ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_amenagements_1 = new ol.format.GeoJSON();
var features_amenagements_1 = format_amenagements_1.readFeatures(json_amenagements_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_amenagements_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amenagements_1.addFeatures(features_amenagements_1);
var lyr_amenagements_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_amenagements_1, 
                style: style_amenagements_1,
                popuplayertitle: "amenagements",
                interactive: true,
                    title: '<img src="styles/legend/amenagements_1.png" /> amenagements'
                });
var format_UGB_2 = new ol.format.GeoJSON();
var features_UGB_2 = format_UGB_2.readFeatures(json_UGB_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_UGB_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UGB_2.addFeatures(features_UGB_2);
var lyr_UGB_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UGB_2, 
                style: style_UGB_2,
                popuplayertitle: "UGB",
                interactive: true,
                    title: '<img src="styles/legend/UGB_2.png" /> UGB'
                });
var format_Campuspedagogique_3 = new ol.format.GeoJSON();
var features_Campuspedagogique_3 = format_Campuspedagogique_3.readFeatures(json_Campuspedagogique_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Campuspedagogique_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Campuspedagogique_3.addFeatures(features_Campuspedagogique_3);
var lyr_Campuspedagogique_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Campuspedagogique_3, 
                style: style_Campuspedagogique_3,
                popuplayertitle: "Campus pedagogique",
                interactive: true,
                    title: '<img src="styles/legend/Campuspedagogique_3.png" /> Campus pedagogique'
                });
var format_Arbre_4 = new ol.format.GeoJSON();
var features_Arbre_4 = format_Arbre_4.readFeatures(json_Arbre_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Arbre_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arbre_4.addFeatures(features_Arbre_4);
var lyr_Arbre_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Arbre_4, 
                style: style_Arbre_4,
                popuplayertitle: "Arbre",
                interactive: true,
                    title: '<img src="styles/legend/Arbre_4.png" /> Arbre'
                });
var format_CONTOURUGB_5 = new ol.format.GeoJSON();
var features_CONTOURUGB_5 = format_CONTOURUGB_5.readFeatures(json_CONTOURUGB_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_CONTOURUGB_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTOURUGB_5.addFeatures(features_CONTOURUGB_5);
var lyr_CONTOURUGB_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTOURUGB_5, 
                style: style_CONTOURUGB_5,
                popuplayertitle: "CONTOUR UGB",
                interactive: true,
                    title: '<img src="styles/legend/CONTOURUGB_5.png" /> CONTOUR UGB'
                });
var format_Couchefermeagricole_6 = new ol.format.GeoJSON();
var features_Couchefermeagricole_6 = format_Couchefermeagricole_6.readFeatures(json_Couchefermeagricole_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Couchefermeagricole_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Couchefermeagricole_6.addFeatures(features_Couchefermeagricole_6);
var lyr_Couchefermeagricole_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Couchefermeagricole_6, 
                style: style_Couchefermeagricole_6,
                popuplayertitle: "Couche ferme agricole",
                interactive: true,
                    title: '<img src="styles/legend/Couchefermeagricole_6.png" /> Couche ferme agricole'
                });
var format_ParkingRectorat_7 = new ol.format.GeoJSON();
var features_ParkingRectorat_7 = format_ParkingRectorat_7.readFeatures(json_ParkingRectorat_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ParkingRectorat_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ParkingRectorat_7.addFeatures(features_ParkingRectorat_7);
var lyr_ParkingRectorat_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ParkingRectorat_7, 
                style: style_ParkingRectorat_7,
                popuplayertitle: "Parking Rectorat",
                interactive: true,
                    title: '<img src="styles/legend/ParkingRectorat_7.png" /> Parking Rectorat'
                });
var format_Boutiquesetrestosprivs_8 = new ol.format.GeoJSON();
var features_Boutiquesetrestosprivs_8 = format_Boutiquesetrestosprivs_8.readFeatures(json_Boutiquesetrestosprivs_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Boutiquesetrestosprivs_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boutiquesetrestosprivs_8.addFeatures(features_Boutiquesetrestosprivs_8);
var lyr_Boutiquesetrestosprivs_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boutiquesetrestosprivs_8, 
                style: style_Boutiquesetrestosprivs_8,
                popuplayertitle: "Boutiques et restos privés",
                interactive: true,
                    title: '<img src="styles/legend/Boutiquesetrestosprivs_8.png" /> Boutiques et restos privés'
                });
var format_Maisons_d_l_universite_9 = new ol.format.GeoJSON();
var features_Maisons_d_l_universite_9 = format_Maisons_d_l_universite_9.readFeatures(json_Maisons_d_l_universite_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Maisons_d_l_universite_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Maisons_d_l_universite_9.addFeatures(features_Maisons_d_l_universite_9);
var lyr_Maisons_d_l_universite_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Maisons_d_l_universite_9, 
                style: style_Maisons_d_l_universite_9,
                popuplayertitle: "Maisons_d_ l_universite",
                interactive: true,
                    title: '<img src="styles/legend/Maisons_d_l_universite_9.png" /> Maisons_d_ l_universite'
                });
var format_Restaurants_universitaire_10 = new ol.format.GeoJSON();
var features_Restaurants_universitaire_10 = format_Restaurants_universitaire_10.readFeatures(json_Restaurants_universitaire_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Restaurants_universitaire_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Restaurants_universitaire_10.addFeatures(features_Restaurants_universitaire_10);
var lyr_Restaurants_universitaire_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Restaurants_universitaire_10, 
                style: style_Restaurants_universitaire_10,
                popuplayertitle: "Restaurants_universitaire",
                interactive: true,
                    title: '<img src="styles/legend/Restaurants_universitaire_10.png" /> Restaurants_universitaire'
                });
var format_village_11 = new ol.format.GeoJSON();
var features_village_11 = format_village_11.readFeatures(json_village_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_village_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_village_11.addFeatures(features_village_11);
var lyr_village_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_village_11, 
                style: style_village_11,
                popuplayertitle: "village",
                interactive: true,
                    title: '<img src="styles/legend/village_11.png" /> village'
                });
var format_Espacesportif_12 = new ol.format.GeoJSON();
var features_Espacesportif_12 = format_Espacesportif_12.readFeatures(json_Espacesportif_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Espacesportif_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Espacesportif_12.addFeatures(features_Espacesportif_12);
var lyr_Espacesportif_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Espacesportif_12, 
                style: style_Espacesportif_12,
                popuplayertitle: "Espace sportif",
                interactive: true,
                    title: '<img src="styles/legend/Espacesportif_12.png" /> Espace sportif'
                });
var format_allee_village_13 = new ol.format.GeoJSON();
var features_allee_village_13 = format_allee_village_13.readFeatures(json_allee_village_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_allee_village_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_allee_village_13.addFeatures(features_allee_village_13);
var lyr_allee_village_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_allee_village_13, 
                style: style_allee_village_13,
                popuplayertitle: "allee_village",
                interactive: true,
                    title: '<img src="styles/legend/allee_village_13.png" /> allee_village'
                });
var format_Mosque_14 = new ol.format.GeoJSON();
var features_Mosque_14 = format_Mosque_14.readFeatures(json_Mosque_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Mosque_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mosque_14.addFeatures(features_Mosque_14);
var lyr_Mosque_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mosque_14, 
                style: style_Mosque_14,
                popuplayertitle: "Mosquée",
                interactive: true,
                title: '<img style="max-width:16px; max-height:16px;" src="styles/place_of_worship_islamic3.svg" /> Mosquée'
            });
var format_Lampesolaire_15 = new ol.format.GeoJSON();
var features_Lampesolaire_15 = format_Lampesolaire_15.readFeatures(json_Lampesolaire_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Lampesolaire_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lampesolaire_15.addFeatures(features_Lampesolaire_15);
var lyr_Lampesolaire_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lampesolaire_15, 
                style: style_Lampesolaire_15,
                popuplayertitle: "Lampe solaire",
                interactive: true,
                title: '<img style="max-width:16px; max-height:16px;" src="styles/lamp-modern-right-svgrepo-com (1).svg" /> Lampe solaire'
            });
var format_lampelectrique_16 = new ol.format.GeoJSON();
var features_lampelectrique_16 = format_lampelectrique_16.readFeatures(json_lampelectrique_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_lampelectrique_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lampelectrique_16.addFeatures(features_lampelectrique_16);
var lyr_lampelectrique_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lampelectrique_16, 
                style: style_lampelectrique_16,
                popuplayertitle: "lamp electrique",
                interactive: true,
                title: '<img style="max-width:16px; max-height:16px;" src="styles/lamp-modern-right-svgrepo-com (1).svg" /> lamp electrique'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_amenagements_1.setVisible(true);lyr_UGB_2.setVisible(true);lyr_Campuspedagogique_3.setVisible(true);lyr_Arbre_4.setVisible(true);lyr_CONTOURUGB_5.setVisible(true);lyr_Couchefermeagricole_6.setVisible(true);lyr_ParkingRectorat_7.setVisible(true);lyr_Boutiquesetrestosprivs_8.setVisible(true);lyr_Maisons_d_l_universite_9.setVisible(true);lyr_Restaurants_universitaire_10.setVisible(true);lyr_village_11.setVisible(true);lyr_Espacesportif_12.setVisible(true);lyr_allee_village_13.setVisible(true);lyr_Mosque_14.setVisible(true);lyr_Lampesolaire_15.setVisible(true);lyr_lampelectrique_16.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_amenagements_1,lyr_UGB_2,lyr_Campuspedagogique_3,lyr_Arbre_4,lyr_CONTOURUGB_5,lyr_Couchefermeagricole_6,lyr_ParkingRectorat_7,lyr_Boutiquesetrestosprivs_8,lyr_Maisons_d_l_universite_9,lyr_Restaurants_universitaire_10,lyr_village_11,lyr_Espacesportif_12,lyr_allee_village_13,lyr_Mosque_14,lyr_Lampesolaire_15,lyr_lampelectrique_16];
lyr_amenagements_1.set('fieldAliases', {'NAME': 'NAME', 'TYPE': 'TYPE', 'Superficie': 'Superficie', });
lyr_UGB_2.set('fieldAliases', {'NAME': 'NAME', 'Code': 'Code', 'village': 'village', 'emplacemen': 'emplacemen', 'type': 'type', 'numero': 'numero', 'occupants': 'occupants', 'nbre_palie': 'nbre_palie', 'nbre_occup': 'nbre_occup', 'douche_int': 'douche_int', 'nbre_douch': 'nbre_douch', 'salle_tv': 'salle_tv', 'nbre_salle': 'nbre_salle', 'salle_tv_h': 'salle_tv_h', 'salle_etud': 'salle_etud', 'nbre_sal_1': 'nbre_sal_1', 'nbre_toile': 'nbre_toile', 'nbre_chamb': 'nbre_chamb', 'nbre_conci': 'nbre_conci', 'concierger': 'concierger', 'nbre_debar': 'nbre_debar', 'un_debarra': 'un_debarra', 'bureau_adm': 'bureau_adm', 'bureau_cv': 'bureau_cv', 'bureau_cv_': 'bureau_cv_', 'chambres _': 'chambres _', 'mosquee_da': 'mosquee_da', 'mosquee_ho': 'mosquee_ho', 'name_2': 'name_2', 'amenity': 'amenity', 'name_3': 'name_3', 'NAME_4': 'NAME_4', 'LIEU': 'LIEU', 'NAME_5': 'NAME_5', 'LAYER': 'LAYER', 'KML_STYLE': 'KML_STYLE', 'tessellate': 'tessellate', 'name_6': 'name_6', 'Nom': 'Nom', 'Superficie': 'Superficie', 'NAME_7': 'NAME_7', 'LIEU_2': 'LIEU_2', 'NAME_8': 'NAME_8', 'LIEU_3': 'LIEU_3', 'NAME_9': 'NAME_9', 'LIEU_4': 'LIEU_4', 'non villag': 'non villag', });
lyr_Campuspedagogique_3.set('fieldAliases', {'NAME': 'NAME', });
lyr_Arbre_4.set('fieldAliases', {'id': 'id', 'area': 'area', 'processing': 'processing', });
lyr_CONTOURUGB_5.set('fieldAliases', {'id': 'id', 'Superficie': 'Superficie', });
lyr_Couchefermeagricole_6.set('fieldAliases', {'Nom': 'Nom', 'Superficie': 'Superficie', });
lyr_ParkingRectorat_7.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'KML_STYLE': 'KML_STYLE', 'tessellate': 'tessellate', });
lyr_Boutiquesetrestosprivs_8.set('fieldAliases', {'NAME': 'NAME', 'LIEU': 'LIEU', });
lyr_Maisons_d_l_universite_9.set('fieldAliases', {'name': 'name', });
lyr_Restaurants_universitaire_10.set('fieldAliases', {'amenity': 'amenity', 'name': 'name', });
lyr_village_11.set('fieldAliases', {'Code': 'Code', 'village': 'village', 'emplacemen': 'emplacemen', 'type': 'type', 'numero': 'numero', 'occupants': 'occupants', 'nbre_palie': 'nbre_palie', 'nbre_occup': 'nbre_occup', 'douche_int': 'douche_int', 'nbre_douch': 'nbre_douch', 'salle_tv': 'salle_tv', 'nbre_salle': 'nbre_salle', 'salle_tv_h': 'salle_tv_h', 'salle_etud': 'salle_etud', 'nbre_sal_1': 'nbre_sal_1', 'nbre_toile': 'nbre_toile', 'nbre_chamb': 'nbre_chamb', 'nbre_conci': 'nbre_conci', 'concierger': 'concierger', 'nbre_debar': 'nbre_debar', 'un_debarra': 'un_debarra', 'bureau_adm': 'bureau_adm', 'bureau_cv': 'bureau_cv', 'bureau_cv_': 'bureau_cv_', 'chambres _': 'chambres _', 'mosquee_da': 'mosquee_da', 'mosquee_ho': 'mosquee_ho', });
lyr_Espacesportif_12.set('fieldAliases', {'name': 'name', 'code': 'code', });
lyr_allee_village_13.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'highway': 'highway', 'ford': 'ford', 'footway': 'footway', 'level': 'level', 'layer': 'layer', 'covered': 'covered', 'tracktype': 'tracktype', 'noexit': 'noexit', 'junction': 'junction', 'access': 'access', 'width': 'width', 'lit': 'lit', 'service': 'service', 'oneway': 'oneway', 'surface': 'surface', 'ref': 'ref', 'nat_ref': 'nat_ref', 'name': 'name', 'maxspeed': 'maxspeed', 'lanes': 'lanes', 'int_ref_ar': 'int_ref_ar', 'int_ref': 'int_ref', });
lyr_Mosque_14.set('fieldAliases', {'id': 'id', 'Name': 'Name', });
lyr_Lampesolaire_15.set('fieldAliases', {'Point': 'Point', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_lampelectrique_16.set('fieldAliases', {'id': 'id', });
lyr_amenagements_1.set('fieldImages', {'NAME': 'TextEdit', 'TYPE': 'TextEdit', 'Superficie': '', });
lyr_UGB_2.set('fieldImages', {'NAME': '', 'Code': '', 'village': '', 'emplacemen': '', 'type': '', 'numero': '', 'occupants': '', 'nbre_palie': '', 'nbre_occup': '', 'douche_int': '', 'nbre_douch': '', 'salle_tv': '', 'nbre_salle': '', 'salle_tv_h': '', 'salle_etud': '', 'nbre_sal_1': '', 'nbre_toile': '', 'nbre_chamb': '', 'nbre_conci': '', 'concierger': '', 'nbre_debar': '', 'un_debarra': '', 'bureau_adm': '', 'bureau_cv': '', 'bureau_cv_': '', 'chambres _': '', 'mosquee_da': '', 'mosquee_ho': '', 'name_2': '', 'amenity': '', 'name_3': '', 'NAME_4': '', 'LIEU': '', 'NAME_5': '', 'LAYER': '', 'KML_STYLE': '', 'tessellate': '', 'name_6': '', 'Nom': '', 'Superficie': '', 'NAME_7': '', 'LIEU_2': '', 'NAME_8': '', 'LIEU_3': '', 'NAME_9': '', 'LIEU_4': '', 'non villag': '', });
lyr_Campuspedagogique_3.set('fieldImages', {'NAME': '', });
lyr_Arbre_4.set('fieldImages', {'id': 'TextEdit', 'area': 'TextEdit', 'processing': 'DateTime', });
lyr_CONTOURUGB_5.set('fieldImages', {'id': 'TextEdit', 'Superficie': '', });
lyr_Couchefermeagricole_6.set('fieldImages', {'Nom': 'TextEdit', 'Superficie': '', });
lyr_ParkingRectorat_7.set('fieldImages', {'NAME': '', 'LAYER': '', 'KML_STYLE': '', 'tessellate': '', });
lyr_Boutiquesetrestosprivs_8.set('fieldImages', {'NAME': 'TextEdit', 'LIEU': 'TextEdit', });
lyr_Maisons_d_l_universite_9.set('fieldImages', {'name': 'TextEdit', });
lyr_Restaurants_universitaire_10.set('fieldImages', {'amenity': 'TextEdit', 'name': 'TextEdit', });
lyr_village_11.set('fieldImages', {'Code': '', 'village': '', 'emplacemen': '', 'type': '', 'numero': '', 'occupants': '', 'nbre_palie': '', 'nbre_occup': '', 'douche_int': '', 'nbre_douch': '', 'salle_tv': '', 'nbre_salle': '', 'salle_tv_h': '', 'salle_etud': '', 'nbre_sal_1': '', 'nbre_toile': '', 'nbre_chamb': '', 'nbre_conci': '', 'concierger': '', 'nbre_debar': '', 'un_debarra': '', 'bureau_adm': '', 'bureau_cv': '', 'bureau_cv_': '', 'chambres _': '', 'mosquee_da': '', 'mosquee_ho': '', });
lyr_Espacesportif_12.set('fieldImages', {'name': '', 'code': '', });
lyr_allee_village_13.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'highway': '', 'ford': '', 'footway': '', 'level': '', 'layer': '', 'covered': '', 'tracktype': '', 'noexit': '', 'junction': '', 'access': '', 'width': '', 'lit': '', 'service': '', 'oneway': '', 'surface': '', 'ref': '', 'nat_ref': '', 'name': '', 'maxspeed': '', 'lanes': '', 'int_ref_ar': '', 'int_ref': '', });
lyr_Mosque_14.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', });
lyr_Lampesolaire_15.set('fieldImages', {'Point': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_lampelectrique_16.set('fieldImages', {'id': 'TextEdit', });
lyr_amenagements_1.set('fieldLabels', {'NAME': 'no label', 'TYPE': 'no label', 'Superficie': 'no label', });
lyr_UGB_2.set('fieldLabels', {'NAME': 'inline label - visible with data', 'Code': 'inline label - visible with data', 'village': 'inline label - visible with data', 'emplacemen': 'inline label - visible with data', 'type': 'inline label - visible with data', 'numero': 'inline label - visible with data', 'occupants': 'inline label - visible with data', 'nbre_palie': 'inline label - visible with data', 'nbre_occup': 'inline label - visible with data', 'douche_int': 'inline label - always visible', 'nbre_douch': 'inline label - visible with data', 'salle_tv': 'inline label - visible with data', 'nbre_salle': 'inline label - visible with data', 'salle_tv_h': 'inline label - visible with data', 'salle_etud': 'inline label - visible with data', 'nbre_sal_1': 'no label', 'nbre_toile': 'inline label - visible with data', 'nbre_chamb': 'inline label - visible with data', 'nbre_conci': 'inline label - visible with data', 'concierger': 'inline label - visible with data', 'nbre_debar': 'inline label - visible with data', 'un_debarra': 'inline label - visible with data', 'bureau_adm': 'inline label - visible with data', 'bureau_cv': 'inline label - visible with data', 'bureau_cv_': 'inline label - visible with data', 'chambres _': 'inline label - visible with data', 'mosquee_da': 'inline label - visible with data', 'mosquee_ho': 'inline label - visible with data', 'name_2': 'no label', 'amenity': 'no label', 'name_3': 'no label', 'NAME_4': 'no label', 'LIEU': 'no label', 'NAME_5': 'no label', 'LAYER': 'no label', 'KML_STYLE': 'no label', 'tessellate': 'no label', 'name_6': 'no label', 'Nom': 'no label', 'Superficie': 'inline label - visible with data', 'NAME_7': 'no label', 'LIEU_2': 'no label', 'NAME_8': 'no label', 'LIEU_3': 'no label', 'NAME_9': 'no label', 'LIEU_4': 'no label', 'non villag': 'no label', });
lyr_Campuspedagogique_3.set('fieldLabels', {'NAME': 'no label', });
lyr_Arbre_4.set('fieldLabels', {'id': 'no label', 'area': 'no label', 'processing': 'no label', });
lyr_CONTOURUGB_5.set('fieldLabels', {'id': 'no label', 'Superficie': 'no label', });
lyr_Couchefermeagricole_6.set('fieldLabels', {'Nom': 'no label', 'Superficie': 'no label', });
lyr_ParkingRectorat_7.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'KML_STYLE': 'no label', 'tessellate': 'no label', });
lyr_Boutiquesetrestosprivs_8.set('fieldLabels', {'NAME': 'no label', 'LIEU': 'no label', });
lyr_Maisons_d_l_universite_9.set('fieldLabels', {'name': 'no label', });
lyr_Restaurants_universitaire_10.set('fieldLabels', {'amenity': 'no label', 'name': 'no label', });
lyr_village_11.set('fieldLabels', {'Code': 'inline label - visible with data', 'village': 'inline label - visible with data', 'emplacemen': 'inline label - visible with data', 'type': 'inline label - visible with data', 'numero': 'inline label - visible with data', 'occupants': 'inline label - visible with data', 'nbre_palie': 'inline label - visible with data', 'nbre_occup': 'inline label - visible with data', 'douche_int': 'inline label - visible with data', 'nbre_douch': 'inline label - visible with data', 'salle_tv': 'inline label - visible with data', 'nbre_salle': 'inline label - visible with data', 'salle_tv_h': 'inline label - visible with data', 'salle_etud': 'inline label - visible with data', 'nbre_sal_1': 'inline label - visible with data', 'nbre_toile': 'inline label - visible with data', 'nbre_chamb': 'inline label - visible with data', 'nbre_conci': 'inline label - visible with data', 'concierger': 'inline label - visible with data', 'nbre_debar': 'inline label - visible with data', 'un_debarra': 'inline label - visible with data', 'bureau_adm': 'inline label - visible with data', 'bureau_cv': 'inline label - visible with data', 'bureau_cv_': 'no label', 'chambres _': 'no label', 'mosquee_da': 'no label', 'mosquee_ho': 'no label', });
lyr_Espacesportif_12.set('fieldLabels', {'name': 'no label', 'code': 'no label', });
lyr_allee_village_13.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'highway': 'no label', 'ford': 'no label', 'footway': 'no label', 'level': 'no label', 'layer': 'no label', 'covered': 'no label', 'tracktype': 'no label', 'noexit': 'no label', 'junction': 'no label', 'access': 'no label', 'width': 'no label', 'lit': 'no label', 'service': 'no label', 'oneway': 'no label', 'surface': 'no label', 'ref': 'no label', 'nat_ref': 'no label', 'name': 'no label', 'maxspeed': 'no label', 'lanes': 'no label', 'int_ref_ar': 'no label', 'int_ref': 'no label', });
lyr_Mosque_14.set('fieldLabels', {'id': 'no label', 'Name': 'inline label - visible with data', });
lyr_Lampesolaire_15.set('fieldLabels', {'Point': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_lampelectrique_16.set('fieldLabels', {'id': 'no label', });
lyr_lampelectrique_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});