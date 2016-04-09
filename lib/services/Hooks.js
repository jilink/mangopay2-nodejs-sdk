var _ = require('underscore');

var Service = require('../service');

var Hook = require('../models/Hook');

var Hooks = Service.extend({
    /**
     * Create new hook
     * @param {Object}  hook    Hook object
     * @param callback
     * @param options
     * @returns {Object}        Request promise
     */
    create: function(hook, callback, options) {
        options = this._api._getOptions(callback, options, {
            data: hook,
            dataClass: Hook
        });

        return this._api.method('hooks_create', callback, options);
    },

    /**
     * Get hook
     * @param {number}  hookId  Hook identifier
     * @param callback
     * @param options
     * @returns {Object}        Request promise
     */
    get: function(hookId, callback, options) {
        options = this._api._getOptions(callback, options, {
            path: {
                id: hookId
            },
            dataClass: Hook
        });

        return this._api.method('hooks_get', callback, options);
    },

    /**
     * Save hook
     * @param {Object}  hook    Hook object
     * @param callback
     * @param options
     * @returns {Object}        Request promise
     */
    update: function(hook, callback, options) {
        options = this._api._getOptions(callback, options, {
            path: {
                id: hook.Id
            },
            data: hook,
            dataClass: Hook
        });

        return this._api.method('hooks_save', callback, options);
    },

    /**
     * Get all hooks
     * @param callback
     * @param options
     * @returns {Object}            Request promise
     */
    getAll: function(callback, options) {
        options = this._api._getOptions(callback, options, {
            dataClass: Hook
        });

        return this._api.method('hooks_all', callback, options);
    }
});

module.exports = Hooks;