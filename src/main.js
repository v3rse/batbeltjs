var css = require('./css/css');
var cssClass = require('./css_class/css_class');
var dom = require('./dom/dom');

function batbelt() {
  return {
    css:css,
    cssClass:cssClass,
    dom:dom
  };
}

window.batbelt = batbelt;
