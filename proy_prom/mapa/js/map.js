import * as L from 'leaflet';
import { crear_pafs , crear_ortho } from "modulos/capas.js";
import { minimap } from "modulos/minimap.js";

function init () {
  const argenmap = new L.tileLayer('https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png',
    {
      minZoom: 6,
      maxZoom: 20
    }
  );

  // Cuenca
  const pafs = crear_pafs();
  const centroide_bbox = pafs.capa.getBounds().getCenter();

  // Mapa principal
  const map = new L.map('map',
    {
      attributionControl: false,
      center: centroide_bbox,
      zoom: 18,
      zoomControl: true,
      layers: [argenmap]
    }
  );

  // Scalebar
  const scalebar = L.control.scale(
    {
      position: 'bottomleft',
      imperial: false
    }
  );
  scalebar.addTo(map);


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

  // Crear el minimap dentro del elemento div con id minimap del control
  const mm = minimap(
    'minimap',
    centroide_bbox,
    map.getZoom() - 6
  );

  // Crear la capa recuadro dentro del minimapa
  const recuadro = L.rectangle(
    map.getBounds(),
    {
      color: "#ff7800",
      weight: 1,
      interactive:false
    }
  );
  recuadro.addTo(mm);

  //  Dragend (actualizar el minimapa en base a los nuevos bounds del mapa)
  map.on('zoomend moveend', function (event) {
    mm.setView(map.getBounds().getCenter(), map.getZoom() - 6 );
    recuadro.setBounds(map.getBounds());
  });

  // Agregar capa de cuenca al mapa principal
  pafs.capa.addTo(map);

  // Orthomosaico
  const ortho = crear_ortho();
  ortho.capa.addTo(map);

}

init();

