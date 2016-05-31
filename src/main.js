var css = require('./css/css');
var cssClass = require('./css_class/css_class');
var dom = require('./dom/dom');
var dom = require('./ajax/ajax');

function batbelt() {
  return {
    css:css,
    cssClass:cssClass,
    dom:dom,
    ajax:ajax
  };
}

window.batbelt = batbelt;
