// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, semi-style: 0 */

'use strict';

// -- Node modules
const { expect } = require('chai')
    ;


// -- Local modules


// -- Local constants


// -- Local variables


// -- Main
module.exports = function(JMessenger) {
  describe('Test JMessenger constructor:', () => {
    it('Expects JMessenger to be a function.', () => {
      expect(JMessenger).to.be.a('function');
    });

    it('Expects JMessenger.VERSION to return a string.', () => {
      expect(JMessenger.VERSION).to.be.a('string');
    });

    it('Expects JMessenger.noConflict to return a function.', () => {
      expect(JMessenger.noConflict).to.be.a('function');
    });

    it('Expects JMessenger() to return an object.', () => {
      expect(JMessenger()).to.be.an('object');
    });
  });
};
