function ajax(url,options) {
  'use strict';
  //create request object
  var xhr = new XMLHttpRequest();


  //open
  xhr.open(options.method, url, true); //method, url, async or not

  //since tests use HTTP status codes instead of actual events we'll check for those instead and use the more generic onreadystatechange event handler

  xhr.onreadystatechange = function(){
    if(xhr.readyState === xhr.DONE){
      if(xhr.status === 200){
        var data = JSON.parse(xhr.responseText);//parse the json text.Assumption here is that it's just JSON.
        options.success.call(options.context,data,xhr.status,xhr);
      }else if (xhr.status === 404) {
        options.failure.call(options.context,xhr,xhr.status,xhr.responseText);//Add context for this.Call is used here to invoke method immediately instead of bind which returns a function set with context for use later.
      }
      options.complete.call(options.context,xhr,xhr.status);
    }
  };

  xhr.send(options.data);

}

module.exports = ajax;
