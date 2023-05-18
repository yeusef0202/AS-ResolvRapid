import React, { useEffect, useRef } from "react";
import { Map, View } from "ol";
import { Tile as TileLayer } from "ol/layer";
import OSM from "ol/source/OSM";
import { defaults as defaultControls } from "ol/control";

export function Mapa() {
    const mapRef = useRef(null);

    useEffect(() => {
      const map = new Map({
        target: mapRef.current,
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [40, 22], // Adjust the center coordinates as needed
          zoom: 5, // Adjust the zoom level as needed
        }),
        controls: [],
      });
  
      return () => {
        map.setTarget(null);
      };
    }, []);
  
    return <div ref={mapRef} style={{ width: "100%", height: "100vh", position:'relative'}} />;
}