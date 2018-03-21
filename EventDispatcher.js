// =============================================================================
//! Pseudoclassical Instantiation
// EventDispatcher.js - This is a class with two methods, attach() and notify(). 
// The attach() method accepts a function as a parameter. You can call attach() 
// as many times as you want and the function you pass can contain whatever code
// inside you want. Once you call the notify method on that Event object, each 
// function you attached to that Event will be run.
// =============================================================================

var Event = function (sender) { //! The Event function is the constructor
    // =========================================================================
    // In order to access the sender parameter in the prototype methods, you 
    // have to attach sender to a property on the constructor. Without that step, 
    // sender will be undefined. That is why they set this._sender equal to sender.
    // =========================================================================
    this._sender = sender;
    this._listeners = [];
}
Event.prototype = { // In order to access the sender parameter in the prototype methods
    attach: function (listener) { 
        this._listeners.push(listener);
    },
    notify: function (args) {
        for (var i = 0; i < this._listeners.length; i += 1) {
            this._listeners[i](this._sender, args);
        }
    }

};

//* Notifies user if the task has been added, marked as complete, or deleted.