var css = require('../../src/css/css');
describe('css', function() {
  'use strict';

  beforeEach(function() {
    //create some dummy elements to test with
    //using jasmine-fixture
    affix('#toy .book');

    //jquery version of selection
    this.$toy = $('#toy');
    this.toy = this.$toy[0];
  });

  it('should set a CSS attribute of an element',function () {
    css(this.toy, 'width', '500px');

    //Verify using jQuery's version
    expect(this.$toy.css('width')).toBe('500px');
  });

  it('should set a CSS attribute of an element', function() {
    css(toy, 'width', '9001px');
    expect(this.$toy.css('width')).toBe('9001px');
  });

  it('should return an existing CSS property value of an HTML element', function() {
    this.$toy.css('display', 'none');
    expect(css(toy, 'display')).toBe('none');
  });

  it('should set multiple CSS properties of an HTML element', function() {
    css(this.toy, {
      'height': '100px',
      'display': 'none'
    });

    expect(this.$toy.css('display')).toBe('none');
    expect(this.$toy.css('height')).toBe('100px');
  });

  it('should properly set CSS properties if called multiple times on different HTML elements', function() {
    var $book = $('.book');
    var book = $book[0];

    css(this.toy, 'height', '100px');
    css(book, 'display', 'none');

    expect(this.$toy.css('height')).toBe('100px');
    expect(this.$toy.css('display')).not.toBe('none');
    expect($book.css('display')).toBe('none');
  });
});
