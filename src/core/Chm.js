import _layerManageMixin from './_layerManageMixin'
import _esriMixin from './_esriMixin'
import * as esriLoader from 'esri-loader'

class Chm {
  static view;
  static vue;

  constructor() {};
  static createMap = function (param) {
    if (!esriLoader.isLoaded()) {
      esriLoader.bootstrap((err) => {
        if (err) {
          console.error(err)
        }
        this._createMap(param);
      }, {url: 'https://js.arcgis.com/4.4/' /*'https://js.arcgis.com/4.4/'*/})

    } else {
      this._createMap(esriLoader, this.$router, 'myMap')
    }
  };

  static _createMap = function (param) {
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
    ], (urlUtils, watchUtils, MapView, Map, VectorTileLayer, Layer, Expand, Legend, LayerList, Search, MyPopup) => {
      const urlObject = urlUtils.urlToObject(window.location.href)
      const map = new Map({basemap: 'topo-vector'});
      const view = new MapView({
        map: map,
        container: param.container || 'viewDiv'
      });
      this.setView(view);
      _esriMixin.mixin(this);
      // const searchWidget = new Search({view: view})
    })
  }

  static setView = function (view_) {
    this.view = view_;
    this
      .view
      .then(() => {
        this
          .vue
          .$store
          .dispatch({type: 'mapLoaded'});
      })
  };

  static getView = function () {
    return this.view;
  };
  static setVue = function (vue_) {

    this.vue = vue_;
  };
  static getVue = function () {
    return this.vue;
  }
}

// _layerManageMixin.mixin(Chm);


export default Chm
