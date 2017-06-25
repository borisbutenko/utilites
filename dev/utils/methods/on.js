'use strict';

/**
 * Вешаем обработчик на элемент
 * @param eventName str event name
 * @param handler callback
 * @param eventDive boolean; default = false
 */

(function(node) {
    node.prototype.on = function(eventName, handler, eventDive) {
        let element = this;
        if (node.prototype.addEventListener) {
            eventDive = eventDive || false;
            return element.addEventListener.call(element, eventName, handler, eventDive);
        } else if (node.prototype.attachEvent) {
            if (eventName === 'DOMContentLoaded') return;
            return node.attachEvent.call(element, 'on' + eventName, handler);
        }
    };
})(Node);