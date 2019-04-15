/** **************************************************************************
 *-
 * Defines JMessenger library.
 *
 * jmessenger.js is built upon the Prototypal Instantiation pattern. It
 * returns an object by calling its constructor. It doesn't use the new
 * keyword.
 *
 * Constructor:
 *  . JMessenger                  creates the JMessenger object,
 *
 *
 * Public Static Methods:
 *  . noConflict                  returns a reference to this JMessenger object,
 *
 *
 * Public Methods:
 *  . addEvents                   enables a list of events,
 *  . addStreamEvents             enables a list of streamed events,
 *  . fire                        fires an event,
 *  . trigger                     fires an event (alias),
 *  . addEventListener            adds an event listener,
 *  . addOneTimeEventListener     adds an event listener fired once,
 *  . removeEventListener         removes an event listener,
 *  . on                          adds an event listener (alias),
 *  . one                         adds an event listener fired once (alias),
 *  . off                         removes an event listener (alias),
 *  . fireQActive                 returns the status of a streamed queue,
 *  . fireQ                       fires a streamed queue,
 *  . fireQL                      fires a streamed queue,
 *  . addEventStreamListener      adds a streamed event,
 *  . addEventStreamListenerLast  adds a stremed event,
 *  . q                           adds a streamed event (alias),
 *  . ql                          adds a streamed event (alias),
 *  . setOpen                     authorizes any events messages,
 *
 *
 * @namespace    JMessenger
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
  var M = JM.Private;


  // -- Local constants
  var previousJMessenger
    , methods
    ;

  // -- Local variables


  // -- Public ---------------------------------------------------------------

  /**
   * Creates and returns the object JMessenger.
   * (Prototypal Instantiation Pattern)
   *
   * @constructor ()
   * @public
   * @param {arg1}          -,
   * @returns {Object}  returns the JMessenger object,
   * @since 0.0.0
   */
  JMessenger = function(events) {
    var obj = Object.create(methods);
    // Initializes the message database to empty:
    obj.db = {};
    // Adds event messages:
    obj.addEvents(events);
    return obj;
  };

  // Saves the previous value of the library variable, so that it can be
  // restored later on, if noConflict is used.
  previousJMessenger = root.JMessenger;

  // Current version of the library:
  JMessenger.VERSION = '{{lib:version}}';


  // -- Public Static Methods ------------------------------------------------

  /**
   * Returns a reference to this JMessenger object.
   *
   * Nota:
   * Runs JMessenger in noConflict mode by returning the JMessenger variable
   * to its previous owner and returning a reference to this JMessenger object.
   *
   * @method ()
   * @public
   * @param {}            -,
   * @returns {Object}    returns a reference to this object,
   * @since 0.0.0
   */
  /* istanbul ignore next */
  JMessenger.noConflict = function() {
    /* eslint-disable-next-line no-param-reassign */
    root.JMessenger = previousJMessenger;
    return this;
  };


  // -- Public Methods -------------------------------------------------------

  methods = {
    /**
     * Enables a list of events.
     *
     * @method (arg1)
     * @public
     * @param {String/Array}  the list of events to enable,
     * @returns {Object}      returns this,
     * @since 0.0.0
     */
    addEvents: function(events) {
      M.addEvents(this.db, events);
      return this;
    },

    /**
     * Enables a list of streamed events.
     *
     * @method (arg1)
     * @public
     * @param {String/Array}  the list of events to enable,
     * @returns {Object}      returns this,
     * @since 0.0.0
     */
    addStreamEvents: /* istanbul ignore next */ function(events) {
      M.addStreamEvents(this.db, events);
      return this;
    },

    /**
     * Fires an event.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}        the event,
     * @param {Object}        the payload,
     * @returns {Object}      returns this,
     * @since 0.0.0
     */
    fire: function(event, payload) {
      M.fire(this.db, event, payload);
      return this;
    },

    /**
     * Fires an event (alias).
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}        the event,
     * @param {Object}        the payload,
     * @returns {Object}      returns this,
     * @since 0.0.0
     */
    trigger: /* istanbul ignore next */ function(event, payload) {
      return this.fire(event, payload);
    },

    /**
     * Adds an event listener.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}        the event,
     * @param {Function}      the event handler,
     * @returns {Object}      returns this,
     * @since 0.0.0
     */
    addEventListener: function(event, listener) {
      M.addEventListener(this.db, event, listener, this.open);
      return this;
    },

    /**
     * Adds an event listener that is fired once.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}        the event,
     * @param {Function}      the event handler,
     * @returns {Object}      returns this,
     * @since 0.0.0
     */
    addOneTimeEventListener: /* istanbul ignore next */ function(event, listener) {
      M.addOneTimeEventListener(this.db, event, listener, this.open);
      return this;
    },

    /**
     * Removes an event listener.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}        the event,
     * @param {Function}      the event handler,
     * @returns {Object}      returns this,
     * @since 0.0.0
     */
    removeEventListener: /* istanbul ignore next */ function(event, listener) {
      M.removeEventListener(this.db, event, listener);
      return this;
    },

    /**
     * Adds an event listener (alias).
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}        the event,
     * @param {Function}      the event handler,
     * @returns {Object}      returns this,
     * @since 0.0.0
     */
    on: /* istanbul ignore next */ function(event, listener) {
      return this.addEventListener(event, listener);
    },

    /**
     * Adds an event listener that is fired once (alias).
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}        the event,
     * @param {Function}      the event handler,
     * @returns {Object}      returns this,
     * @since 0.0.0
     */
    one: /* istanbul ignore next */ function(event, listener) {
      return this.addOneTimeEventListener(event, listener);
    },

    /**
     * Removes an event listener (alias).
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}        the event,
     * @param {Function}      the event handler,
     * @returns {Object}      returns this,
     * @since 0.0.0
     */
    off: /* istanbul ignore next */ function(event, listener) {
      return this.removeEventListener(event, listener);
    },

    /**
     * Returns the status of a streamed queue.
     *
     * Nota:
     * it returns true if the 'firer' is running (processing the queue).
     *
     * @method (arg1)
     * @public
     * @param {String}        the event,
     * @returns {Boolean}     returns the queue status,
     * @since 0.0.0
     */
    fireQActive: /* istanbul ignore next */ function(event) {
      return this.db[event].stream.firing;
    },

    /**
     * Fires the events in the queue.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}        the event,
     * @param {Object}        the scope,
     * @returns {Object}      returns this,
     * @since 0.0.0
     */
    fireQ: /* istanbul ignore next */ function(event, scope) {
      M.fireQ(this.db, event, scope);
      return this;
    },

    /**
     * Fires the events in the queue.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}        the event,
     * @param {Object}        the scope,
     * @returns {Object}      returns this,
     * @since 0.0.0
     */
    fireQL: /* istanbul ignore next */ function(event, scope) {
      M.fireQL(this.db, event, scope);
      return this;
    },

    /**
     * Adds a streamed event.
     *
     * Nota:
     * The streamed events are stored in a special queue. As soon as the queue
     * contains an event hanlder, this handler is fired. But, instead of a payload,
     * the event handler gets a function it must execute at completion. This
     * function fires the next event hanlder in the queue, and so on.
     *
     * Thus, this mode allows to execute sequentially the event handlers sharing
     * the same event.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}        the event,
     * @param {Function}      the event handler,
     * @returns {Object}      returns this,
     * @since 0.0.0
     */
    addEventStreamListener: /* istanbul ignore next */ function(event, listener) {
      M.addEventStreamListener(this.db, event, listener);
      return this;
    },

    /**
     * Adds a streamed event.
     *
     * Nota:
     * This function has quite the same behaviour as the previous one. But,
     * instead of firing the event handlers sequentially, the 'firer' fires the
     * last event handler in the queue and it scratch out the intermediate ones.
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}        the event,
     * @param {Function}      the event handler,
     * @returns {Object}      returns this,
     * @since 0.0.0
     */
    addEventStreamListenerLast: /* istanbul ignore next */ function(event, listener) {
      M.addEventStreamListenerLast(this.db, event, listener);
      return this;
    },

    /**
     * Adds a streamed event (alias).
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}        the event,
     * @param {Function}      the event handler,
     * @returns {Object}      returns this,
     * @since 0.0.0
     */
    q: /* istanbul ignore next */ function(event, listener) {
      return this.addEventStreamListener(event, listener);
    },

    /**
     * Adds a streamed event (alias).
     *
     * @method (arg1, arg2)
     * @public
     * @param {String}        the event,
     * @param {Function}      the event handler,
     * @returns {Object}      returns this,
     * @since 0.0.0
     */
    ql: /* istanbul ignore next */ function(event, listener) {
      return this.addEventStreamListenerLast(event, listener);
    },

    /**
     * Authorizes any event messages.
     *
     * @method ()
     * @public
     * @param {}              -,
     * @returns {Object}      returns this,
     * @since 0.0.0
     */
    setOpen: /* istanbul ignore next */ function() {
      this.open = true;
      return this;
    }
  };
}());
/* eslint-enable one-var, semi-style */
