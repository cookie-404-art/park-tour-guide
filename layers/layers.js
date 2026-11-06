var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__0, 
                style: style__0,
                popuplayertitle: 'Фестивальный сквер',
                interactive: false,
                title: '<img src="styles/legend/_0.png" /> Фестивальный сквер'
            });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'Граница Сквер Декабристов',
                interactive: false,
                title: '<img src="styles/legend/_1.png" /> Граница Сквер Декабристов'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'Граница Городского сада',
                interactive: false,
                title: '<img src="styles/legend/_2.png" /> Граница Городского сада'
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'Граница Церкви',
                interactive: false,
                title: '<img src="styles/legend/_3.png" /> Граница Церкви'
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'Парковка',
                interactive: false,
                title: '<img src="styles/legend/_4.png" /> Парковка'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: 'Улицы',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> Улицы'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__6, 
                style: style__6,
                popuplayertitle: 'Беговая дорожка',
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> Беговая дорожка'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__7, 
                style: style__7,
                popuplayertitle: 'Тропинки',
                interactive: true,
                title: '<img src="styles/legend/_7.png" /> Тропинки'
            });
var format_1_8 = new ol.format.GeoJSON();
var features_1_8 = format_1_8.readFeatures(json_1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_8.addFeatures(features_1_8);
var lyr_1_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1_8, 
                style: style_1_8,
                popuplayertitle: 'Тропинки 1',
                interactive: true,
                title: '<img src="styles/legend/1_8.png" /> Тропинки 1'
            });
var format__9 = new ol.format.GeoJSON();
var features__9 = format__9.readFeatures(json__9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__9.addFeatures(features__9);
var lyr__9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__9, 
                style: style__9,
                popuplayertitle: 'Памятники',
                interactive: true,
                title: '<img src="styles/legend/_9.png" /> Памятники'
            });
var format_1_10 = new ol.format.GeoJSON();
var features_1_10 = format_1_10.readFeatures(json_1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1_10.addFeatures(features_1_10);
var lyr_1_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1_10, 
                style: style_1_10,
                popuplayertitle: 'Памятники 1',
                interactive: true,
                title: '<img src="styles/legend/1_10.png" /> Памятники 1'
            });
var format__11 = new ol.format.GeoJSON();
var features__11 = format__11.readFeatures(json__11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__11.addFeatures(features__11);
var lyr__11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__11, 
                style: style__11,
                popuplayertitle: 'Декоративные сооружения',
                interactive: true,
                title: '<img src="styles/legend/_11.png" /> Декоративные сооружения'
            });
var format__12 = new ol.format.GeoJSON();
var features__12 = format__12.readFeatures(json__12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__12.addFeatures(features__12);
var lyr__12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__12, 
                style: style__12,
                popuplayertitle: 'Скамейки',
                interactive: true,
                title: '<img src="styles/legend/_12.png" /> Скамейки'
            });
var format__13 = new ol.format.GeoJSON();
var features__13 = format__13.readFeatures(json__13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__13.addFeatures(features__13);
var lyr__13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__13, 
                style: style__13,
                popuplayertitle: 'Церковь',
                interactive: true,
                title: '<img src="styles/legend/_13.png" /> Церковь'
            });
var format__14 = new ol.format.GeoJSON();
var features__14 = format__14.readFeatures(json__14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__14.addFeatures(features__14);
var lyr__14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__14, 
                style: style__14,
                popuplayertitle: 'Парковка дорога',
                interactive: true,
                title: '<img src="styles/legend/_14.png" /> Парковка дорога'
            });
var format__15 = new ol.format.GeoJSON();
var features__15 = format__15.readFeatures(json__15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__15.addFeatures(features__15);
var lyr__15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__15, 
                style: style__15,
                popuplayertitle: 'Дворец творчества',
                interactive: true,
                title: '<img src="styles/legend/_15.png" /> Дворец творчества'
            });
var format__16 = new ol.format.GeoJSON();
var features__16 = format__16.readFeatures(json__16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__16.addFeatures(features__16);
var lyr__16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__16, 
                style: style__16,
                popuplayertitle: 'Кафе',
                interactive: true,
                title: '<img src="styles/legend/_16.png" /> Кафе'
            });
var format__17 = new ol.format.GeoJSON();
var features__17 = format__17.readFeatures(json__17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__17.addFeatures(features__17);
var lyr__17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__17, 
                style: style__17,
                popuplayertitle: 'Областная Дума',
                interactive: true,
                title: '<img src="styles/legend/_17.png" /> Областная Дума'
            });
var format__18 = new ol.format.GeoJSON();
var features__18 = format__18.readFeatures(json__18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__18.addFeatures(features__18);
var lyr__18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__18, 
                style: style__18,
                popuplayertitle: 'Здания (ул. Карла Маркса',
                interactive: true,
                title: '<img src="styles/legend/_18.png" /> Здания (ул. Карла Маркса'
            });
var format__19 = new ol.format.GeoJSON();
var features__19 = format__19.readFeatures(json__19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__19.addFeatures(features__19);
var lyr__19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__19, 
                style: style__19,
                popuplayertitle: 'Дорога среди зданий (ул',
                interactive: true,
                title: '<img src="styles/legend/_19.png" /> Дорога среди зданий (ул'
            });
var format__20 = new ol.format.GeoJSON();
var features__20 = format__20.readFeatures(json__20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__20.addFeatures(features__20);
var lyr__20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__20, 
                style: style__20,
                popuplayertitle: 'Курганский государственный театр драмы',
                interactive: true,
                title: '<img src="styles/legend/_20.png" /> Курганский государственный театр драмы'
            });
var format__21 = new ol.format.GeoJSON();
var features__21 = format__21.readFeatures(json__21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__21.addFeatures(features__21);
var lyr__21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__21, 
                style: style__21,
                popuplayertitle: 'входвыход',
                interactive: true,
                title: '<img src="styles/legend/_21.png" /> входвыход'
            });
var format__22 = new ol.format.GeoJSON();
var features__22 = format__22.readFeatures(json__22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__22.addFeatures(features__22);
var lyr__22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__22, 
                style: style__22,
                popuplayertitle: 'Вход на ул',
                interactive: true,
                title: '<img src="styles/legend/_22.png" /> Вход на ул'
            });
var format__23 = new ol.format.GeoJSON();
var features__23 = format__23.readFeatures(json__23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__23.addFeatures(features__23);
var lyr__23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__23, 
                style: style__23,
                popuplayertitle: 'Памятники парка',
                interactive: true,
                title: '<img src="styles/legend/_23.png" /> Памятники парка'
            });

lyr__0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);lyr_1_8.setVisible(true);lyr__9.setVisible(true);lyr_1_10.setVisible(true);lyr__11.setVisible(true);lyr__12.setVisible(true);lyr__13.setVisible(true);lyr__14.setVisible(true);lyr__15.setVisible(true);lyr__16.setVisible(true);lyr__17.setVisible(true);lyr__18.setVisible(true);lyr__19.setVisible(true);lyr__20.setVisible(true);lyr__21.setVisible(true);lyr__22.setVisible(true);lyr__23.setVisible(true);
var layersList = [lyr__0,lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6,lyr__7,lyr_1_8,lyr__9,lyr_1_10,lyr__11,lyr__12,lyr__13,lyr__14,lyr__15,lyr__16,lyr__17,lyr__18,lyr__19,lyr__20,lyr__21,lyr__22,lyr__23];
lyr__0.set('fieldAliases', {'FID': 'FID', });
lyr__1.set('fieldAliases', {'FID': 'FID', });
lyr__2.set('fieldAliases', {'FID': 'FID', });
lyr__3.set('fieldAliases', {'FID': 'FID', });
lyr__4.set('fieldAliases', {'FID': 'FID', });
lyr__5.set('fieldAliases', {'�_�_�_�_�_�_�_�_': '�_�_�_�_�_�_�_�_', });
lyr__6.set('fieldAliases', {'FID': 'FID', });
lyr__7.set('fieldAliases', {'FID': 'FID', });
lyr_1_8.set('fieldAliases', {'FID': 'FID', });
lyr__9.set('fieldAliases', {'�_�_�_�_�_�_�_�_': '�_�_�_�_�_�_�_�_', 'Audio': 'Audio', });
lyr_1_10.set('fieldAliases', {'��������': '��������', });
lyr__11.set('fieldAliases', {'��������': '��������', });
lyr__12.set('fieldAliases', {'FID': 'FID', });
lyr__13.set('fieldAliases', {'��������': '��������', });
lyr__14.set('fieldAliases', {'FID': 'FID', });
lyr__15.set('fieldAliases', {'��������': '��������', });
lyr__16.set('fieldAliases', {'��������': '��������', });
lyr__17.set('fieldAliases', {'��������': '��������', });
lyr__18.set('fieldAliases', {'��������': '��������', });
lyr__19.set('fieldAliases', {'FID': 'FID', });
lyr__20.set('fieldAliases', {'��������': '��������', });
lyr__21.set('fieldAliases', {'FID': 'FID', });
lyr__22.set('fieldAliases', {'FID': 'FID', });
lyr__23.set('fieldAliases', {'fid': 'fid', 'photo': 'photo', 'filename': 'filename', 'audio': 'audio', });
lyr__0.set('fieldImages', {'FID': 'Range', });
lyr__1.set('fieldImages', {'FID': 'Range', });
lyr__2.set('fieldImages', {'FID': 'Range', });
lyr__3.set('fieldImages', {'FID': 'Range', });
lyr__4.set('fieldImages', {'FID': 'Range', });
lyr__5.set('fieldImages', {'�_�_�_�_�_�_�_�_': 'TextEdit', });
lyr__6.set('fieldImages', {'FID': 'Range', });
lyr__7.set('fieldImages', {'FID': 'Range', });
lyr_1_8.set('fieldImages', {'FID': 'Range', });
lyr__9.set('fieldImages', {'�_�_�_�_�_�_�_�_': 'TextEdit', 'Audio': 'TextEdit', });
lyr_1_10.set('fieldImages', {'��������': 'TextEdit', });
lyr__11.set('fieldImages', {'��������': 'TextEdit', });
lyr__12.set('fieldImages', {'FID': 'Range', });
lyr__13.set('fieldImages', {'��������': 'TextEdit', });
lyr__14.set('fieldImages', {'FID': 'Range', });
lyr__15.set('fieldImages', {'��������': 'TextEdit', });
lyr__16.set('fieldImages', {'��������': 'TextEdit', });
lyr__17.set('fieldImages', {'��������': 'TextEdit', });
lyr__18.set('fieldImages', {'��������': 'TextEdit', });
lyr__19.set('fieldImages', {'FID': 'Range', });
lyr__20.set('fieldImages', {'��������': 'TextEdit', });
lyr__21.set('fieldImages', {'FID': 'Range', });
lyr__22.set('fieldImages', {'FID': 'Range', });
lyr__23.set('fieldImages', {'fid': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'audio': 'ExternalResource', });
lyr__0.set('fieldLabels', {'FID': 'no label', });
lyr__1.set('fieldLabels', {'FID': 'no label', });
lyr__2.set('fieldLabels', {'FID': 'no label', });
lyr__3.set('fieldLabels', {'FID': 'no label', });
lyr__4.set('fieldLabels', {'FID': 'no label', });
lyr__5.set('fieldLabels', {'�_�_�_�_�_�_�_�_': 'no label', });
lyr__6.set('fieldLabels', {'FID': 'no label', });
lyr__7.set('fieldLabels', {'FID': 'no label', });
lyr_1_8.set('fieldLabels', {'FID': 'no label', });
lyr__9.set('fieldLabels', {'�_�_�_�_�_�_�_�_': 'no label', 'Audio': 'no label', });
lyr_1_10.set('fieldLabels', {'��������': 'no label', });
lyr__11.set('fieldLabels', {'��������': 'no label', });
lyr__12.set('fieldLabels', {'FID': 'no label', });
lyr__13.set('fieldLabels', {'��������': 'no label', });
lyr__14.set('fieldLabels', {'FID': 'no label', });
lyr__15.set('fieldLabels', {'��������': 'no label', });
lyr__16.set('fieldLabels', {'��������': 'no label', });
lyr__17.set('fieldLabels', {'��������': 'no label', });
lyr__18.set('fieldLabels', {'��������': 'no label', });
lyr__19.set('fieldLabels', {'FID': 'no label', });
lyr__20.set('fieldLabels', {'��������': 'no label', });
lyr__21.set('fieldLabels', {'FID': 'no label', });
lyr__22.set('fieldLabels', {'FID': 'no label', });
lyr__23.set('fieldLabels', {'fid': 'hidden field', 'photo': 'no label', 'filename': 'no label', 'audio': 'header label - visible with data', });
lyr__23.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});