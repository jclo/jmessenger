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
  describe('Test JMessenger methods:', () => {
    const o = JMessenger();

    it('Expects JMessenger() to return an object.', () => {
      expect(o).to.be.an('object');
    });

    it('Expects this object to own the property "addEvents" that is a function.', () => {
      expect(o).to.have.property('addEvents').that.is.a('function');
    });

    it('Expects this object to own the property "addStreamEvents" that is a function.', () => {
      expect(o).to.have.property('addStreamEvents').that.is.a('function');
    });

    it('Expects this object to own the property "fire" that is a function.', () => {
      expect(o).to.have.property('fire').that.is.a('function');
    });

    it('Expects this object to own the property "trigger" that is a function.', () => {
      expect(o).to.have.property('trigger').that.is.a('function');
    });

    it('Expects this object to own the property "addEventListener" that is a function.', () => {
      expect(o).to.have.property('addEventListener').that.is.a('function');
    });

    it('Expects this object to own the property "addOneTimeEventListener" that is a function.', () => {
      expect(o).to.have.property('addOneTimeEventListener').that.is.a('function');
    });

    it('Expects this object to own the property "removeEventListener" that is a function.', () => {
      expect(o).to.have.property('removeEventListener').that.is.a('function');
    });

    it('Expects this object to own the property "on" that is a function.', () => {
      expect(o).to.have.property('on').that.is.a('function');
    });

    it('Expects this object to own the property "one" that is a function.', () => {
      expect(o).to.have.property('one').that.is.a('function');
    });

    it('Expects this object to own the property "off" that is a function.', () => {
      expect(o).to.have.property('off').that.is.a('function');
    });

    it('Expects this object to own the property "fireQActive" that is a function.', () => {
      expect(o).to.have.property('fireQActive').that.is.a('function');
    });

    it('Expects this object to own the property "fireQ" that is a function.', () => {
      expect(o).to.have.property('fireQ').that.is.a('function');
    });

    it('Expects this object to own the property "fireQL" that is a function.', () => {
      expect(o).to.have.property('fireQL').that.is.a('function');
    });

    it('Expects this object to own the property "addEventStreamListener" that is a function.', () => {
      expect(o).to.have.property('addEventStreamListener').that.is.a('function');
    });

    it('Expects this object to own the property "addEventStreamListenerLast" that is a function.', () => {
      expect(o).to.have.property('addEventStreamListenerLast').that.is.a('function');
    });

    it('Expects this object to own the property "q" that is a function.', () => {
      expect(o).to.have.property('q').that.is.a('function');
    });

    it('Expects this object to own the property "ql" that is a function.', () => {
      expect(o).to.have.property('ql').that.is.a('function');
    });

    it('Expects this object to own the property "setOpen" that is a function.', () => {
      expect(o).to.have.property('setOpen').that.is.a('function');
    });
  });
};
