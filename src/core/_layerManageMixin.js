// mutations

import Chm from '@/core/Chm'
import * as esriLoader from 'esri-loader'

export default {
  mixin : function (parent) {
 
    parent.__proto__.layers = [
      {
        name: 'asd',
        url: 'asdasd'
      }
    ];

 

    parent.__proto__.addLayer = function (param) {
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
        "esri/layers/GraphicsLayer"
      ], (urlUtils, watchUtils, MapView, Map, VectorTileLayer, Layer, Expand, Legend, LayerList, Search, GraphicsLayer) => {

  
        var gl = new GraphicsLayer();
        this
          .view
          .map
          .add(gl);
        this
          .layers
          .push(gl);
      })

      return this.view;
    }
  }
}