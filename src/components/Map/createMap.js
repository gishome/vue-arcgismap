import Chm from '@/core/Chm';

export const createMap = function (loader, router, title) {

  const esriLoader = loader
  esriLoader.dojoRequire([
    'esri/core/urlUtils',
    'esri/core/watchUtils',
    'esri/views/MapView',
    'esri/Map',
    'esri/layers/VectorTileLayer',
    'esri/layers/Layer',
    'esri/widgets/Expand',
    'esri/widgets/Legend',
    'esri/widgets/LayerList',
    'esri/widgets/Search',
    'widgets/MyPopup'
  ], (urlUtils, watchUtils, MapView, Map, VectorTileLayer, Layer, Expand, Legend, LayerList, Search,MyPopup) => {
    const urlObject = urlUtils.urlToObject(window.location.href)
    const map = new Map({basemap: 'topo-vector'});
    const view = new MapView({map: map, container: 'viewDiv'});
    Chm.setView(view);
    const searchWidget = new Search({view: view})
  })
}
