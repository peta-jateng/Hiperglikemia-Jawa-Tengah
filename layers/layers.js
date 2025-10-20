ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([108.008715, -8.522962, 111.856752, -5.938403]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KabupatenKota_1 = new ol.format.GeoJSON();
var features_KabupatenKota_1 = format_KabupatenKota_1.readFeatures(json_KabupatenKota_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KabupatenKota_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabupatenKota_1.addFeatures(features_KabupatenKota_1);
var lyr_KabupatenKota_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KabupatenKota_1, 
                style: style_KabupatenKota_1,
                popuplayertitle: 'Kabupaten/Kota',
                interactive: true,
    title: 'Kabupaten/Kota<br />\
    <img src="styles/legend/KabupatenKota_1_0.png" /> 14000 - 51000<br />\
    <img src="styles/legend/KabupatenKota_1_1.png" /> 51000 - 67000<br />\
    <img src="styles/legend/KabupatenKota_1_2.png" /> 67000 - 83000<br />\
    <img src="styles/legend/KabupatenKota_1_3.png" /> 83000 - 105000<br />\
    <img src="styles/legend/KabupatenKota_1_4.png" /> 105000 - 231969<br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_KabupatenKota_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_KabupatenKota_1];
lyr_KabupatenKota_1.set('fieldAliases', {'WADMKK': 'WADMKK', 'ckg gds april-september 2025_Hiperglikemia': 'Hiperglikemia', 'ckg gds april-september 2025_Hiperglikemia yang tindak lanjut': 'Tindak lanjut', 'gap_Gap': 'Presentase tindak lanjut', 'gap_field_3': 'gap_field_3', });
lyr_KabupatenKota_1.set('fieldImages', {'WADMKK': 'TextEdit', 'ckg gds april-september 2025_Hiperglikemia': 'Range', 'ckg gds april-september 2025_Hiperglikemia yang tindak lanjut': 'Range', 'gap_Gap': 'TextEdit', 'gap_field_3': 'TextEdit', });
lyr_KabupatenKota_1.set('fieldLabels', {'WADMKK': 'no label', 'ckg gds april-september 2025_Hiperglikemia': 'inline label - visible with data', 'ckg gds april-september 2025_Hiperglikemia yang tindak lanjut': 'inline label - visible with data', 'gap_Gap': 'inline label - visible with data', 'gap_field_3': 'hidden field', });
lyr_KabupatenKota_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});