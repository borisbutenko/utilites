'use strict';

/**
 * Удаляем обработчик на элемент
 * @param eventName str event name
 * @param handler callback
 * @param eventDive boolean; default = false
 */

(function(node) {
    node.prototype.off = function(eventName, handler, eventDive) {
        let element = this;
        if (node.prototype.removeEventListener) {
            eventDive = eventDive || false;
            return node.prototype.removeEventListener.call(element, eventName, handler, eventDive);
        } else if (node.prototype.dispatchEvent)
            return node.prototype.dispatchEvent.call(element, 'on' + eventName, handler);
    };
})(Node);