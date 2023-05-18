import React, { useEffect, useRef } from "react";
import { Map, View } from "ol";
import { Tile as TileLayer } from "ol/layer";
import OSM from "ol/source/OSM";
import { useGeographic } from "ol/proj";
import Geolocation from 'ol/Geolocation';
import { Circle as CircleStyle, Fill, Style } from 'ol/style';
import { Circle as CircleGeometry, Point } from 'ol/geom';
import Feature from 'ol/Feature';
import { Vector as VectorSource } from 'ol/source';
import { Vector as VectorLayer } from 'ol/layer';

export function Mapa() {
  useGeographic();

  const mapRef = useRef(null);

  useEffect(() => {
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      controls: [],
    });
  
    const view = new View({
      zoom: 18,
    });
    map.setView(view);
  
    const geolocation = new Geolocation({
      tracking: true,
      trackingOptions: {
        enableHighAccuracy: true,
        maximumAge: 1000, 
        timeout: 5000,
      },
      projection: 'EPSG:4326',
    });
  
    geolocation.on('change', () => {
      const coordinates = geolocation.getPosition();
  
      if (coordinates) {
        setTimeout(() => {
          view.setCenter(coordinates);
        }, 1000);

        const circleFeature = new Feature({
          geometry: new CircleGeometry(coordinates, 0.0001), 
        });
  
        const vectorSource = new VectorSource({
          features: [circleFeature],
        });
  
        const vectorLayer = new VectorLayer({
          source: vectorSource,
          style: new Style({
            fill: new Fill({
              color: 'rgba(255, 0, 0, 0.5)', 
            }),
          }),
        });
  
        map.addLayer(vectorLayer);
      }
    });
  
    return () => {
      map.setTarget(null);
      geolocation.setTracking(false);
    };
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "100vh", position: 'relative' }} />;
}
