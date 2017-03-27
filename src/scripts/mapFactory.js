import ol from 'openlayers';

export default class mapFactory {
    static genarateDefaultMap(targetEl) {
        //if (!!mapFactory.defaultMap) return mapFactory.defaultMap;

        var map = new ol.Map({
            target: targetEl,
            controls: ol.control.defaults().extend([
                //new ol.control.FullScreen(),
                new ol.control.OverviewMap(),
                new ol.control.ZoomToExtent(),
                //new ol.control.ZoomSlider(),
            ]),
            loadTilesWhileAnimating:true,
            layers: [
                new ol.layer.Tile({
                    source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([114,32]),
                zoom: 6
            })
        });

        mapFactory.defaultMap = map;

        return map;
    }
}

mapFactory.defaultMap = {};