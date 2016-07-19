var expect = require('chai').expect,
    bjork = require('../index.js'),
    to_ex_dot = function(i){ return i? 'x': '.'; }
;

it("E(3,5)", function () {
  expect(bjork(3,5).map(to_ex_dot).join('')).to.equal('x.x.x');
})
it("E(4,7)", function () {
  expect(bjork(4,7).map(to_ex_dot).join('')).to.equal('x.x.x.x');
})
it("E(5,7)", function () {
  expect(bjork(5,7).map(to_ex_dot).join('')).to.equal('x.xx.xx');
})
it("E(2,8)", function () {
  expect(bjork(2,8).map(to_ex_dot).join('')).to.equal('x...x...');
})
it("E(3,8)", function () {
  expect(bjork(3,8).map(to_ex_dot).join('')).to.equal('x..x..x.');
})
it("E(4,8)", function () {
  expect(bjork(4,8).map(to_ex_dot).join('')).to.equal('x.x.x.x.');
})
it("E(5,8)", function () {
  expect(bjork(5,8).map(to_ex_dot).join('')).to.equal('.xx.xx.x');
})
it("E(7,8)", function () {
  expect(bjork(7,8).map(to_ex_dot).join('')).to.equal('.xxxxxxx');
})
it("E(5,9)", function () {
  expect(bjork(5,9).map(to_ex_dot).join('')).to.equal('x.x.x.x.x');
})
it("E(5,12)", function () {
  expect(bjork(5,12).map(to_ex_dot).join('')).to.equal('x..x.x..x.x.');
})
it("E(5,16)", function () {
  expect(bjork(5,16).map(to_ex_dot).join('')).to.equal('.x..x..x..x..x..');
})
it("E(7,16)", function () {
  expect(bjork(7,16).map(to_ex_dot).join('')).to.equal('x..x.x.x..x.x.x.');
})
it("E(9,16)", function () {
  expect(bjork(9,16).map(to_ex_dot).join('')).to.equal('.xx.x.x.xx.x.x.x');
})
it("E(10,16)", function () {
  expect(bjork(10,16).map(to_ex_dot).join('')).to.equal('.xx.xx.x.xx.xx.x');
})
