/** **************************************************************************
 *-
 * Implements the JMessenger's methods.
 *
 * jm.js is just a literal object that contains a set of functions. It
 * can't be intantiated.
 *
 * Private Functions:
 *  . schema                      returns the event db schema,
 *  . streamSchema                returns the streamed event db schema,
 *  . add                         adds a new event into the db,
 *  . addStream                   adds a new streamed event into the db,
 *
 *
 * Public Static Methods:
 *  . addEvents                   adds events to the db,
 *  . addStreamEvents             adds streamed events to the db,
 *  . fire                        fires an event,
 *  . addEventListener            adds an event listener,
 *  . addOneTimeEventListener     adds an event listener fired once,
 *  . removeEventListener         removes an event listener,
 *  . fireQ                       fires a streamed queue,
 *  . fireQL                      fires a streamed queue,
 *  . addEventStreamListener      adds a streamed event listener,
 *  . addEventStreamListenerLast  adds a streamed event listener,
 *
 *
 *
 * @namespace    JM.Private
 * @dependencies none
 * @exports      -
 * @author       -
 * @since        0.0.0
 * @version      -
 * ************************************************************************ */
/* eslint-disable one-var, semi-style */

'use strict';

(function() {
  // IIFE

  // -- Module path


  // -- Local modules


  // -- Local constants


  // -- Local variables


  // -- Private Functions ----------------------------------------------------

  /**
   * Returns the event db schema.
   *
   * @function ()
   * @private
   * @returns {Object}    returns the schema,
   * @since 0.0.0
   */
  function schema() {
    return {
      listeners: [],
      listenersOnce: []
    };
  }

  /**
   * Returns the streamed event db schema.
   *
   * @function ()
   * @private
   * @returns {Object}      returns the schema,
   * @since 0.0.0
   */
  /* istanbul ignore next */
  function streamSchema() {
    return {
      stream: {
        firing: false,
        listeners: []
      }
    };
  }

  /**
   * Adds a new event into the db.
   *
   * @function (arg1, arg2)
   * @private
   * @param {Object}        the event db,
   * @param {String}        the event,
   * @returns {}            -,
   * @since 0.0.0
   */
  function add(db, e) {
    if (!Object.prototype.hasOwnProperty.call(db, e)) {
      /* eslint-disable-next-line no-param-reassign */
      db[e] = schema();
    }
  }

  /**
   * Adds a new streamed event into the db.
   *
   * @function (arg1, arg2)
   * @private
   * @param {Object}        the event db,
   * @param {String}        the event,
   * @returns {}            -,
   * @since 0.0.0
   */
  /* istanbul ignore next */
  function addStream(db, e) {
    if (!Object.prototype.hasOwnProperty.call(db, e)) {
      /* eslint-disable-next-line no-param-reassign */
      db[e] = streamSchema();
    }
  }


  // -- Public Static Methods ------------------------------------------------

  JM.Private = {

    /**
     * Adds events to the db.
     *
     * @function (arg1, arg2)
     * @private
     * @param {Object}        the event db,
     * @param {String/Array}  the event,
     * @returns {}            -,
     * @since 0.0.0
     */
    addEvents: function(db, e) {
      var i;

      if (typeof e === 'string') {
        add(db, e);
      } else if (Array.isArray(e)) {
        for (i = 0; i < e.length; i++) {
          if (typeof e[i] === 'string') {
            add(db, e[i]);
          }
        }
      }
    },

    /**
     * Adds streamed events to the db.
     *
     * @function (arg1, arg2)
     * @private
     * @param {Object}        the event db,
     * @param {String/Array}  the event,
     * @returns {}            -,
     * @since 0.0.0
     */
    addStreamEvents: /* istanbul ignore next */ function(db, e) {
      var i;

      if (typeof e === 'string') {
        addStream(db, e);
      } else if (Array.isArray(e)) {
        for (i = 0; i < e.length; i++) {
          if (typeof e[i] === 'string') {
            addStream(db, e[i]);
          }
        }
      }
    },

    /**
     * Fires an event.
     *
     * @function (arg1, arg2, arg3)
     * @private
     * @param {Object}      the event db,
     * @param {String}      the event,
     * @param {Object}      the payload,
     * @returns {}          -,
     * @since 0.0.0
     */
    fire: function(db, event, payload) {
      var i;

      if (typeof event === 'string' && Object.prototype.hasOwnProperty.call(db, event)) {
        // Fires all the 'classic' listeners:
        for (i = 0; i < db[event].listeners.length; i++) {
          db[event].listeners[i](payload);
        }
        // Fires all the listeners for once:
        for (i = 0; i < db[event].listenersOnce.length; i++) {
          db[event].listenersOnce[i](payload);
        }
        // Remove all the event listeners for listener once:
        db[event].listenersOnce.splice(0, db[event].listenersOnce.length);
      }
    },

    /**
     * Adds an event listener.
     *
     * @function (arg1, arg2, arg3, arg4)
     * @private
     * @param {Object}      the event db,
     * @param {String}      the event,
     * @param {Function}    the listener,
     * @param {Boolean}     listens for any events if true, registered otherwise,
     * @returns {}          -,
     * @since 0.0.0
     */
    addEventListener: function(db, event, listener, open) {
      if (open) {
        this.addEvents(db, event);
      }
      if (typeof event === 'string'
          && typeof listener === 'function'
          && Object.prototype.hasOwnProperty.call(db, event)) {
        db[event].listeners.push(listener);
      }
    },

    /**
     * Adds an event listener that is fired once.
     *
     * @function (arg1, arg2, arg3, arg4)
     * @private
     * @param {Object}      the event db,
     * @param {String}      the event,
     * @param {Function}    the listener,
     * @param {Boolean}     listens for any events if true, registered otherwise,
     * @returns {}          -,
     * @since 0.0.0
     */
    addOneTimeEventListener: /* istanbul ignore next */ function(db, event, listener, open) {
      if (open) {
        this.addEvents(db, event);
      }
      if (typeof event === 'string'
          && typeof listener === 'function'
          && Object.prototype.hasOwnProperty.call(db, event)) {
        db[event].listenersOnce.push(listener);
      }
    },

    /**
     * Removes an event listener.
     *
     * @function (arg1, arg2, arg3)
     * @private
     * @param {Object}      the event db,
     * @param {String}      the event,
     * @param {Function}    the listener,
     * @returns {}          -,
     * @since 0.0.0
     */
    removeEventListener: /* istanbul ignore next */ function(db, event, listener) {
      var index;

      if (typeof event === 'string'
        && typeof listener === 'function'
        && Object.prototype.hasOwnProperty.call(db, event)) {
        index = db[event].listeners.indexOf(listener);
        if (index >= 0) {
          db[event].listeners.splice(index, 1);
        }
        index = db[event].listenersOnce.indexOf(listener);
        if (index >= 0) {
          db[event].listenersOnce.splice(index, 1);
        }
      }
    },

    /**
     * Fires a streamed queue.
     *
     * @function (arg1, arg2, arg3)
     * @private
     * @param {Object}      the event db,
     * @param {String}      the event,
     * @param {Object}      the scope,
     * @returns {}          -,
     * @since 0.0.0
     */
    fireQ: /* istanbul ignore next */ function(db, event, scope) {
      var stream = db[event].stream
        , funcs = stream.listeners
        ;

      // Execute the functions one after one until the queue is empty:
      stream.firing = true;
      (function next() {
        if (funcs.length > 0) {
          funcs.shift()
            .apply(scope || {}, [next].concat(Array.prototype.slice.call(arguments, 0)));
        } else {
          stream.firing = false;
        }
      }());
    },

    /**
     * Fires a streamed queue.
     *
     * @function (arg1, arg2, arg3)
     * @private
     * @param {Object}      the event db,
     * @param {String}      the event,
     * @param {Object}      the scope,
     * @returns {}          -,
     * @since 0.0.0
     */
    fireQL: /* istanbul ignore next */ function(db, event, scope) {
      var stream = db[event].stream
        , funcs = stream.listeners
        ;

      // Execute the functions one after one until the queue is empty:
      stream.firing = true;
      (function next() {
        if (funcs.length > 0) {
          while (funcs.length > 1) { funcs.shift(); }
          funcs.shift()
            .apply(scope || {}, [next].concat(Array.prototype.slice.call(arguments, 0)));
        } else {
          stream.firing = false;
        }
      }());
    },

    /**
     * Adds a streamed event listener.
     *
     * @function (arg1, arg2, arg3)
     * @private
     * @param {Object}      the event db,
     * @param {String}      the event,
     * @param {Function}    the listener,
     * @returns {}          -,
     * @since 0.0.0
     */
    addEventStreamListener: /* istanbul ignore next */ function(db, event, listener) {
      if (typeof event === 'string'
          && typeof listener === 'function'
          && Object.prototype.hasOwnProperty.call(db, event)) {
        db[event].stream.listeners.push(listener);

        // Fire the event stream if fireQ is not running:
        if (!db[event].stream.firing) {
          this.fireQ(db, event);
        }
      }
    },

    /**
     * Adds a streamed event listener.
     *
     * @function (arg1, arg2, arg3)
     * @private
     * @param {Object}      the event db,
     * @param {String}      the event,
     * @param {Function}    the listener,
     * @returns {}          -,
     * @since 0.0.0
     */
    addEventStreamListenerLast: /* istanbul ignore next */ function(db, event, listener) {
      if (typeof event === 'string'
          && typeof listener === 'function'
          && Object.prototype.hasOwnProperty.call(db, event)) {
        db[event].stream.listeners.push(listener);

        // Fire the event stream if fireQ is not running:
        if (!db[event].stream.firing) {
          this.fireQL(db, event);
        }
      }
    }
  };
}());
/* eslint-enable one-var, semi-style */
