import React, { useEffect, useRef, useState } from "react";
import { Map, View } from "ol";
import { Tile as TileLayer } from "ol/layer";
import OSM from "ol/source/OSM";
import { useGeographic } from "ol/proj";
import Geolocation from "ol/Geolocation";
import { Circle as CircleStyle, Fill, Style } from "ol/style";
import { Circle as CircleGeometry, Point } from "ol/geom";
import Feature from "ol/Feature";
import { Vector as VectorSource } from "ol/source";
import { Vector as VectorLayer } from "ol/layer";

export function Mapa({ showCars }) {
  useGeographic();

  const mapRef = useRef(null);
  const [map, setMap] = useState(null);
  const [markerLayer, setMarkerLayer] = useState(null);

  useEffect(() => {
    const mapInstance = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      controls: [],
    });

    const view = new View({
      zoom: 17,
    });
    mapInstance.setView(view);

    const geolocation = new Geolocation({
      tracking: true,
      trackingOptions: {
        enableHighAccuracy: true,
        maximumAge: 1000,
        timeout: 5000,
      },
      projection: "EPSG:4326",
    });

    geolocation.on("change", () => {
      const coordinates = geolocation.getPosition();

      if (coordinates) {
        setTimeout(() => {
          view.setCenter(coordinates);
        }, 1000);

        const circleFeature = new Feature({
          geometry: new CircleGeometry(coordinates, 0.0002),
        });

        const vectorSource = new VectorSource({
          features: [circleFeature],
        });

        const vectorLayer = new VectorLayer({
          source: vectorSource,
          style: new Style({
            fill: new Fill({
              color: "blue",
            }),
          }),
        });

        mapInstance.addLayer(vectorLayer);
        setMarkerLayer(vectorLayer);
      }
    });

    setMap(mapInstance);

    return () => {
      mapInstance.setTarget(null);
      geolocation.setTracking(false);
    };
  }, []);

  useEffect(() => {
    if (showCars && map && markerLayer) {
      const coordinates1 = [-8.648462, 40.649172];
      const coordinates2 = [-8.653247, 40.646909];
      const coordinates3 = [-8.648693, 40.632694]
  
      const markerFeature1 = new Feature({
        geometry: new Point(coordinates1),
      });
  
      const markerFeature2 = new Feature({
        geometry: new Point(coordinates2),
      });

      const markerFeature3 = new Feature({
        geometry: new Point(coordinates3),
      });
  
      const vectorSource = new VectorSource({
        features: [markerFeature1, markerFeature2, markerFeature3],
      });
  
      const markerStyle = new Style({
        image: new CircleStyle({
          radius: 12,
          fill: new Fill({ color: "rgba(255, 0, 0, 0.75)" }),
        }),
      });
  
      markerFeature1.setStyle(markerStyle);
      markerFeature2.setStyle(markerStyle);
      markerFeature3.setStyle(markerStyle);
  
      markerLayer.setSource(vectorSource);
    }
  }, [showCars, map, markerLayer]);
  
  return <div ref={mapRef} style={{ width: "100%", height: "100vh", position: "relative" }} />;
}
