'use strict';

Ember.SimpleAuth.Stores.Ephemeral = Ember.Object.extend(Ember.Evented, {
  init: function() {
    this.clear();
  },

  persist: function(properties) {
    for (var property in properties) {
      this._data[property] = properties[property];
    }
  },

  restore: function() {
    return Ember.$.extend({}, this._data);
  },

  clear: function() {
    delete this._data;
    this._data = {};
  }
});
