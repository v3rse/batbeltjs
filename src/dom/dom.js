//Using Node DOM type that all things stem from
function remove(element){
  if (element.compareDocumentPosition(document) & Node.DOCUMENT_POSITION_DISCONNECTED) {//does this when element is not part of DOM NB: using a bitwise operator
    return;
  }
  element.parentNode.removeChild(element);
}

function append(targetElement,element){
  targetElement.appendChild(element);//this can actually move an already existing element around
}

function prepend(targetElement,element) {//using this.before to place element before target's first child (this assumes there's a first child)
  this.before(targetElement.firstChild,element);
}

function before(targetElement,element) {
  targetElement.parentNode.insertBefore(element,targetElement);
}

function after(targetElement, element) {
  if (targetElement.compareDocumentPosition(document) & Node.DOCUMENT_POSITION_DISCONNECTED) {//does this when element is not part of DOM NB: using a bitwise operator
    return;
  }

  if (targetElement.nextSibling) {
    this.before(targetElement.nextSibling,element);
  }else{
    targetElement.parentNode.insertBefore(element,null);
  }
}

function val(element) {
  return element.value;
}

//export methods
module.exports = {
  remove:remove,
  append:append,
  prepend:prepend,
  before:before,
  after:after,
  val:val,
};
