var css = require('../../src/css/css');
describe('css', function() {
  it('should return "Hello Tests!"',function () {
    expect(css()).toBe('Hello Tests!');
  });
});
