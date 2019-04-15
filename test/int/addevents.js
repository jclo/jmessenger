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
  describe('Test the method addEvents:', () => {
    it('Expects JMessenger("aaa")to add the event "aaa".', () => {
      const mess = JMessenger('aaa');
      expect(mess.db).to.be.an('object').that.have.property('aaa').that.is.an('object');
    });

    it('Expects JMessenger(["aaa", "bbb"])to add the events "aaa" and "bbb".', () => {
      const mess = JMessenger(['aaa', 'bbb']);
      expect(mess.db).to.be.an('object').that.have.property('aaa').that.is.an('object');
      expect(mess.db).to.be.an('object').that.have.property('bbb').that.is.an('object');
    });

    it('Expects JMessenger().addEvents("aaa") to add the event "aaa".', () => {
      const mess = JMessenger();
      mess.addEvents('aaa');
      expect(mess.db).to.be.an('object').that.have.property('aaa').that.is.an('object');
    });

    it('Expects JMessenger().addEvents(["aaa", "bbb"]) to add the events "aaa" and "bbb".', () => {
      const mess = JMessenger();
      mess.addEvents(['aaa', 'bbb']);
      expect(mess.db).to.be.an('object').that.have.property('aaa').that.is.an('object');
      expect(mess.db).to.be.an('object').that.have.property('bbb').that.is.an('object');
    });
  });
};
