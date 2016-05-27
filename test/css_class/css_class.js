
describe('CssClassManipulation', function() {
  'use strict';

  beforeEach(function() {
    //create some dummy elements to test with
    //using jasmine-fixture
    affix('#toy .book');

    //jquery version of selection
    this.$toy = $('#toy');
    this.toy = this.$toy[0];
  });

  it('should add a css class to the element', function() {
    cssClass.add(this.toy, 'building');
    expect(this.$toy.hasClass('building')).toBe(true);
  });

  it('should not overwrite existing css classes', function() {
    this.$toy.addClass('spooky');
    cssClass.add(this.toy, 'building');

    expect(this.$toy.hasClass('building')).toBe(true);
    expect(this.$toy.hasClass('spooky')).toBe(true);
  });

  it('should remove a specific css class of the element', function() {
    this.$toy.addClass('very-important-class');
    this.$toy.addClass('super-cool-class');

    cssClass.remove(this.toy, 'super-cool-class');

    expect(this.$toy.hasClass('super-cool-class')).toBe(false);
    expect(this.$toy.hasClass('very-important-class')).toBe(true);
  });

  it('should toggle a css class of the element', function() {
    this.$toy.addClass('hidden-tower');

    cssClass.toggle(this.toy, 'hidden-tower');
    expect(this.$toy.hasClass('hidden-tower')).toBe(false);

    cssClass.toggle(this.toy, 'hidden-tower');
    expect(this.$toy.hasClass('hidden-tower')).toBe(true);
  });

  it('should return true if a HTML element has a given css class', function() {
    this.$toy.addClass('hidden-tower');
    expect(cssClass.has(this.toy, 'hidden-tower')).toBe(true);
  });

  it('should return false if a HTML element doesn\'t have a given css class', function() {
    this.$toy.removeClass('hidden-tower');
    expect(cssClass.has(this.toy, 'hidden-tower')).toBe(false);
  });
});
