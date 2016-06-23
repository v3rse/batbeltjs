//append to existing className
function add(htmlElement, className){
    if(!this.has(htmlElement, className)){
      htmlElement.classList.add(className);
    }
}

//filter out html class
function remove(htmlElement, className){
    htmlElement.classList.remove(className);
}

//use has method to check if it's been set
function toggle(htmlElement,className){
  htmlElement.classList.toggle(className);
}

//most important method
function has(htmlElement,className){
    return htmlElement.classList.contains(className);
}

//export methods
module.exports = {
  add: add,
  remove: remove,
  toggle: toggle,
  has: has,
};
