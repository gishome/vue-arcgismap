// mutations

import Chm from '@/core/Chm'
import * as esriLoader from 'esri-loader'

String.prototype.firstUpperCase = function () {
  return this.replace(/\b(\w)(\w*)/g, function ($0, $1, $2) {
    return $1.toUpperCase() + $2.toLowerCase();
  });
}

export default {
  mixin : function (_) {
    _.__proto__.esri = {};
    var mixinClasses = [
      "esri/geometry/Point",
      'esri/symbols/SimpleMarkerSymbol',
      'esri/views/MapView',
      'esri/Map',
      'esri/layers/VectorTileLayer',
      'esri/layers/Layer',
      'esri/widgets/Expand',
      'esri/widgets/Legend',
      'esri/widgets/LayerList',
      'esri/widgets/Search',
      "esri/layers/GraphicsLayer",
      'esri/Graphic',
      'dojo/dom-construct'
    ];
    esriLoader.dojoRequire(mixinClasses, function () {
      var classes = new Array(arguments.length);
      for (var i = 0; i < classes.length; i++) {
        classes[i] = arguments[i];
      }

      mixinClasses.forEach((v, k) => {
        const paths = v.split('/');
        var top = _.__proto__;
        while (paths.length > 1) {
          const path = paths.shift();
          if (path) {
            top[path] = top[path] || {};
            top = top[path];
          }
        }

        let name = paths.pop();
        const names = name.split('-');
        //将例如 将dom-construct 转为domConstruct
        if (names.length > 1) {
          name = names.shift();
          while (names.length > 0) {
            name += names
              .shift()
              .firstUpperCase();
          }
        }

        top[name] = classes[k];
      });

      window.esri = _.esri;
      window.dojo = _.dojo;

      _
        .vue
        .$store
        .dispatch({type: 'apiLoaded'});

    })
  }

}