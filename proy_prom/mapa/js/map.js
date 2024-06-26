import * as L from 'leaflet';
import { minimap } from "minimap";

function init () {
  const argenmap = new L.tileLayer('https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png',
    {
      minZoom: 1,
      maxZoom: 20
    }
  );

  const map = new L.map('map',
    {
      attributionControl: false,
      center: new L.LatLng(-34.5790, -58.6608),
      zoom: 11,
      zoomControl: true,
      layers: [argenmap]
    }
  );

  //=====
  // Créditos
  //=====


  //=====
  // Control minimapa
  //=====

  const mm_ctrl = L.control({position: 'bottomright'});

  // onAdd(): Crear y devolver el elemento DOM del panel
  mm_ctrl.onAdd = function (map) {
    // crear un elemento div de clase panel_minimapa
    const panel = L.DomUtil.create('div', 'mm_panel');
    // deshabilitar propagación de eventos para este elemento
    L.DomEvent.disableScrollPropagation(panel);
    L.DomEvent.disableClickPropagation(panel);
    // crear el contenedor para el minimapa
    const container = L.DomUtil.create('div', 'mm_container', panel);
    container.id = "minimap";

    return panel;
  };
  // Agregar al mapa
  mm_ctrl.addTo(map);

  const mm = minimap('minimap', 6);

  //  Dragend (actualizar el minimapa en base a los nuevos bounds del mapa)
  map.on('zoomend moveend', function (event) {
    mm.setView(map.getBounds().getCenter(), map.getZoom() - 5 );
  });

}

init();

