//append to existing className
function add(htmlElement, className){
  if(!this.has(htmlElement, className)){
    htmlElement.className += " " + className ;
  }
}

//filter out html class
function remove(htmlElement, className){
  htmlElement.className = htmlElement.className.trim().split(" ").filter(function(name){
    return name !== className;
  }).join();
}

//use has method to check if it's been set
function toggle(htmlElement,className){
  if(this.has(htmlElement,className)){
    this.remove(htmlElement,className);
  }else{
    this.add(htmlElement,className);
  }
}

//most important method
function has(htmlElement,className){
  var check = htmlElement.className.split(" ").filter(function (name) {
    return name === className;
  }).join();

  if (check) {
    return true;
  }

  return false;
}

//export methods
module.exports = {
  add: add,
  remove: remove,
  toggle: toggle,
  has: has,
};
