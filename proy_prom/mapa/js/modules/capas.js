import * as L from 'leaflet';
import { pafs_geojson } from "geojs/pafs.js";

export function crear_pafs () {

  const pafs = {
    "nombre": "pafs"
  }

  pafs.geojsonMarkerOptions = {
    radius: 4,
    fillColor: '#b07681',
    color: '#c498a1',
    weight: 1,
    opacity: 1,
    fillOpacity: 0.9
  };

  pafs.onEachFeature = function (feature, layer) {
    // does this feature have a property named marker_label?
    if (feature.properties && feature.properties.marker_label) {
      layer.bindPopup(feature.properties.marker_label);
    }
  };

  // Capa
  pafs.capa = L.geoJson(
    pafs_geojson,
    {
      onEachFeature: pafs.onEachFeature,
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, pafs.geojsonMarkerOptions);
      }
    }
  )


  return pafs;
};

export function crear_ortho () {

  const ortho = {
    "nombre": "ortho"
  }

  ortho.imageUrl = '../../images/Ortho.png';
  ortho.errorOverlayUrl = 'https://cdn-icons-png.flaticon.com/512/110/110686.png';
  ortho.altText = 'Ortomosaico.';
  ortho.latLngBounds = L.latLngBounds([[-34.5653902273945874, -58.6512560086463210], [-34.5626892273945856, -58.6487930086463223]]);

  ortho.capa = L.imageOverlay(
    ortho.imageUrl,
    ortho.latLngBounds,
    {
      opacity: 0.95,
      errorOverlayUrl: ortho.errorOverlayUrl,
      alt: ortho.altText,
      interactive: false
    }
  );

  return ortho;
};



