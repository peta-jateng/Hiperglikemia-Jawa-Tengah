var size = 0;
var placement = 'point';

var style_KabupatenKota_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("ckg gds april-september 2025_Hiperglikemia");
    var labelFont = "9.1px \'Open Sans\', sans-serif";
    var labelFill = "#000000";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.5;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("WADMKK") !== null) {
        labelText = String(feature.get("WADMKK"));
    }

    if (feature.get("WADMKK") === "Rembang") {
      offsetX = -15;
      offsetY = 0;
    }
    
    if (feature.get("WADMKK") === "Brebes") {
      offsetX = -10;
      offsetY = 0;
    }

     if (feature.get("WADMKK") === "Cilacap") {
      offsetX = -9;
      offsetY = 0;
    }
    
    if (feature.get("WADMKK") === "Tegal") {
      offsetX = -10;
      offsetY = 0;
    }
       
    if (feature.get("WADMKK") === "Pemalang") {
      offsetX = -15;
      offsetY = 10;
    }

     if (feature.get("WADMKK") === "Purbalingga") {
      offsetX = -20;
      offsetY = 0;
    }
    
    if (feature.get("WADMKK") === "Kebumen") {
      offsetX = -15;
      offsetY = 10;
    }
    
     if (feature.get("WADMKK") === "Banjarnegara") {
      offsetX = -25;
      offsetY = 10;
    }
    
    if (feature.get("WADMKK") === "Pekalongan") {
      offsetX = -20;
      offsetY = 0;
    }
      
     if (feature.get("WADMKK") === "Batang") {
      offsetX = -17;
      offsetY = 0;
    }
    
    if (feature.get("WADMKK") === "Wonosobo") {
      offsetX = -15;
      offsetY = 0;
    }
          
     if (feature.get("WADMKK") === "Purworejo") {
      offsetX = -17;
      offsetY = 0;
    }
    
    if (feature.get("WADMKK") === "Temanggung") {
      offsetX = -20;
      offsetY = 0;
    }
      
    if (feature.get("WADMKK") === "Magelang") {
      offsetX = -15;
      offsetY = 15;
    }
    
    if (feature.get("WADMKK") === "Kota Semarang") {
      offsetX = -30;
      offsetY = 0;
    }
      
    if (feature.get("WADMKK") === "Semarang") {
      offsetX = 10;
      offsetY = -15;
    }
       
    if (feature.get("WADMKK") === "Kendal") {
      offsetX = -6;
      offsetY = 0;
    }
    
    if (feature.get("WADMKK") === "Klaten") {
      offsetX = -15;
      offsetY = 5;
    }
      
    if (feature.get("WADMKK") === "Sukoharjo") {
      offsetX = -18;
      offsetY = 0;
    }
      
    if (feature.get("WADMKK") === "Demak") {
      offsetX = -20;
      offsetY = -10;
    }
      
    if (feature.get("WADMKK") === "Kudus") {
      offsetX = -5;
      offsetY = 0;
    }
      
    if (feature.get("WADMKK") === "Boyolali") {
      offsetX = -15;
      offsetY = 0;
    }
      
    if (feature.get("WADMKK") === "Sragen") {
      offsetX = -10;
      offsetY = 0;
    }
      
    if (feature.get("WADMKK") === "Jepara") {
      offsetX = -20;
      offsetY = 0;
    }
      
    if (feature.get("WADMKK") === "Pati") {
      offsetX = -10;
      offsetY = 15;
    }
      
    if (feature.get("WADMKK") === "Blora") {
      offsetX = -15;
      offsetY = 0;
    }
      
    if (feature.get("WADMKK") === "Karanganyar") {
      offsetX = -25;
      offsetY = 10;
    }
     
    if (feature.get("WADMKK") === "Wonogiri") {
      offsetX = 10;
      offsetY = -20;
    }
    
    if (value >= 14000.000000 && value <= 51000.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(236,255,255,0.92)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, offsetX, offsetY)
    })]
                    } else if (value >= 51000.000000 && value <= 67000.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(200,220,240,0.9)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, offsetX, offsetY)
    })]
                    } else if (value >= 67000.000000 && value <= 83000.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(115,178,216,0.9)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, offsetX, offsetY)
    })]
                    } else if (value >= 83000.000000 && value <= 105000.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(41,121,185,0.9)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, offsetX, offsetY)
    })]
                    } else if (value >= 105000.000000 && value <= 231969.000000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(8,48,107,0.9)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, offsetX, offsetY)
    })]
                    };

    return style;
};
