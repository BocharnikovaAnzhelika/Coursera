var needToEmit = {};

module.exports = {

    /**
     * @param {String} event
     * @param {Object} subscriber
     * @param {Function} handler
     */
    on: function (event, subscriber, handler) {
        if (needToEmit[event] === undefined) {
            needToEmit[event] = [{
                subscriber: subscriber,
                handler: handler
            }]
        }
        else {
            needToEmit[event].push({
                subscriber: subscriber,
                handler: handler
            });
        }
        return this;
    },

    /**
     * @param {String} event
     * @param {Object} subscriber
     */
    off: function (event, subscriber) {
        if (needToEmit[event] != undefined) {
            var i = 0;
            while (i < needToEmit[event].length) {
                if (needToEmit[event][i].subscriber === subscriber) {
                    needToEmit[event].splice(i, 1);
                }
                else i++;
            }
        }
        return this;
    },

    /**
     * @param {String} event
     */
    emit: function (event) {
        if (needToEmit[event] != undefined) {
            for (var i = 0; i < needToEmit[event].length; i++) {            
                needToEmit[event][i].handler.call(needToEmit[event][i].subscriber);           
            }
        }
        return this;
    }
};
