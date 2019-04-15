// ESLint declarations:
/* global describe */
/* eslint one-var: 0, semi-style: 0 */

'use strict';

// -- Node modules


// -- Local modules
const JMessenger  = require('../index.js')
    , constructor = require('./int/constructor.js')
    , methods     = require('./int/methods.js')
    , addEvents   = require('./int/addevents.js')
    , addandfire  = require('./int/addandfire.js')
    ;


// -- Local constants


// -- Local variables


// -- Main
describe('Test JMessenger:', () => {
  constructor(JMessenger);
  methods(JMessenger);
  addEvents(JMessenger);
  addandfire(JMessenger);
});
