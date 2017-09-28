/**
 * Created by Caihm on 2017/5/10.
 */

var pathRegex = new RegExp(/\/[^\/]+$/);
var locationPath = location
    .pathname
    .replace(pathRegex, '');
//dojo config
window.isVue = true;
window.dojoConfig = {
    parseOnLad: true,
    packages: [
        {
            name: "widgets",
            location: locationPath + 'static/widgets'
        }, {
            name: "core",
            location: locationPath + 'static/core'
        }, {
            name: "layer",
            location: locationPath + 'static/layer'
        }
    ]
};