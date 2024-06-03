var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_RIESGO_AMBIENTAL_EN_CMRRIESGO_AMBIENTAL_EN_CMRshp_1 = new ol.format.GeoJSON();
var features_RIESGO_AMBIENTAL_EN_CMRRIESGO_AMBIENTAL_EN_CMRshp_1 = format_RIESGO_AMBIENTAL_EN_CMRRIESGO_AMBIENTAL_EN_CMRshp_1.readFeatures(json_RIESGO_AMBIENTAL_EN_CMRRIESGO_AMBIENTAL_EN_CMRshp_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RIESGO_AMBIENTAL_EN_CMRRIESGO_AMBIENTAL_EN_CMRshp_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RIESGO_AMBIENTAL_EN_CMRRIESGO_AMBIENTAL_EN_CMRshp_1.addFeatures(features_RIESGO_AMBIENTAL_EN_CMRRIESGO_AMBIENTAL_EN_CMRshp_1);
var lyr_RIESGO_AMBIENTAL_EN_CMRRIESGO_AMBIENTAL_EN_CMRshp_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RIESGO_AMBIENTAL_EN_CMRRIESGO_AMBIENTAL_EN_CMRshp_1, 
                style: style_RIESGO_AMBIENTAL_EN_CMRRIESGO_AMBIENTAL_EN_CMRshp_1,
                interactive: true,
    title: 'RIESGO_AMBIENTAL_EN_CMR — RIESGO_AMBIENTAL_EN_CMR.shp<br />\
    <img src="styles/legend/RIESGO_AMBIENTAL_EN_CMRRIESGO_AMBIENTAL_EN_CMRshp_1_0.png" /> 0<br />\
    <img src="styles/legend/RIESGO_AMBIENTAL_EN_CMRRIESGO_AMBIENTAL_EN_CMRshp_1_1.png" /> 10<br />\
    <img src="styles/legend/RIESGO_AMBIENTAL_EN_CMRRIESGO_AMBIENTAL_EN_CMRshp_1_2.png" /> 20<br />\
    <img src="styles/legend/RIESGO_AMBIENTAL_EN_CMRRIESGO_AMBIENTAL_EN_CMRshp_1_3.png" /> 30<br />\
    <img src="styles/legend/RIESGO_AMBIENTAL_EN_CMRRIESGO_AMBIENTAL_EN_CMRshp_1_4.png" /> 40<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_RIESGO_AMBIENTAL_EN_CMRRIESGO_AMBIENTAL_EN_CMRshp_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_RIESGO_AMBIENTAL_EN_CMRRIESGO_AMBIENTAL_EN_CMRshp_1];
lyr_RIESGO_AMBIENTAL_EN_CMRRIESGO_AMBIENTAL_EN_CMRshp_1.set('fieldAliases', {'tramo_cue': 'tramo_cue', 'PARTIDO': 'PARTIDO', 'RAD_CENSAL': 'RAD_CENSAL', 'POB_TOTAL': 'POB_TOTAL', 'T_HOGARES': 'T_HOGARES', 'NBI': 'NBI', 'ES': 'ES', 'C_SANIT': 'C_SANIT', 'MPP': 'MPP', 'VTI': 'VTI', 'IVS': 'IVS', 'I': 'I', 'B': 'B', 'ECP': 'ECP', 'PAC': 'PAC', 'CACH': 'CACH', 'RSC': 'RSC', 'RA': 'RA', 'CAT_RA_21': 'CAT_RA_21', });
lyr_RIESGO_AMBIENTAL_EN_CMRRIESGO_AMBIENTAL_EN_CMRshp_1.set('fieldImages', {'tramo_cue': '', 'PARTIDO': '', 'RAD_CENSAL': '', 'POB_TOTAL': '', 'T_HOGARES': '', 'NBI': '', 'ES': '', 'C_SANIT': '', 'MPP': '', 'VTI': '', 'IVS': '', 'I': '', 'B': '', 'ECP': '', 'PAC': '', 'CACH': '', 'RSC': '', 'RA': '', 'CAT_RA_21': '', });
lyr_RIESGO_AMBIENTAL_EN_CMRRIESGO_AMBIENTAL_EN_CMRshp_1.set('fieldLabels', {'tramo_cue': 'no label', 'PARTIDO': 'no label', 'RAD_CENSAL': 'no label', 'POB_TOTAL': 'no label', 'T_HOGARES': 'no label', 'NBI': 'no label', 'ES': 'no label', 'C_SANIT': 'no label', 'MPP': 'no label', 'VTI': 'no label', 'IVS': 'no label', 'I': 'no label', 'B': 'no label', 'ECP': 'no label', 'PAC': 'no label', 'CACH': 'no label', 'RSC': 'no label', 'RA': 'no label', 'CAT_RA_21': 'no label', });
lyr_RIESGO_AMBIENTAL_EN_CMRRIESGO_AMBIENTAL_EN_CMRshp_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});