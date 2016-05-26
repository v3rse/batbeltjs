module.exports = function (element,key,value){
  if (arguments.length > 1) {//check number of arguments
    if(typeof element === 'undefined'){
      console.error('Provide element');
      return;
    }
    if (typeof key === 'string') {//if second argument is a string
      if (typeof value !== 'undefined') {//and third is defined
        //set single property
        element.style[key] = value;
      }else {//if third is undefined
        //get CSS property value
        return window.getComputedStyle(element,null)[key];
      }
    }else if( typeof key === 'object'){//if second argument is an object
        //set multiple properties
        for(var i in key){
          element.style[i] = key[i];
        }
    }
  }else {//if fewer than one element is set then through error.
      console.error('Provide the necessary arguments');
  }
};
