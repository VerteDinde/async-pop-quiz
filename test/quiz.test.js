const assert = require('assert');
const takeFive = require('../lib/quiz');

it('takes five', done => {
  const start = new Date();
  const elapsed = new Date() - start;
  let result = takeFive(() => {
    assert.equal(result, 5000);
    done();
  });
}).timeout(7000);