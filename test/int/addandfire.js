// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0, dot-notation: 0 */

'use strict';

// -- Node modules
const { expect } = require('chai')
    ;


// -- Local modules


// -- Local constants


// -- Local variables


// -- Main
module.exports = function(JMessenger) {
  describe('Test the methods "addEventListener" and "fire":', () => {
    it('Expects addEventListener to return a payload when fired.', () => {
      const mess = JMessenger('aaa');
      mess.addEventListener('aaa', (payload) => {
        expect(payload).to.be.an('array');
      });
      mess.fire('aaa', [1, 2, 3]);
    });

    it('Expects this payload to be and array with three elements.', () => {
      const mess = JMessenger('aaa');
      mess.addEventListener('aaa', (payload) => {
        expect(payload).to.be.an('array').that.have.lengthOf(3);
      });
      mess.fire('aaa', [1, 2, 3]);
    });
  });
};
