var size = 0;
var placement = 'point';
function categories_RIESGO_AMBIENTAL_EN_CMRRIESGO_AMBIENTAL_EN_CMRshp_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case '0':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(43,131,186,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '10':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(145,203,168,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '20':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(254,223,153,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '30':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(245,144,83,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '40':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(215,25,28,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_RIESGO_AMBIENTAL_EN_CMRRIESGO_AMBIENTAL_EN_CMRshp_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("RA");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_RIESGO_AMBIENTAL_EN_CMRRIESGO_AMBIENTAL_EN_CMRshp_1(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
