'use strict';

/**
 * Вешаем обработчик на ребенка элемента
 * @param children DOM children element
 * @param eventName str event name
 * @param handler callback
 * @param eventDive boolean; default = false
 */

(function(node) {
    node.prototype.delegate = function(eventName, children, handler, eventDive) {
        let element = this;

        children = (function(value) {
            if (children.nodeType)
                return children;
            if (typeof value === 'string')
                return element.querySelectorAll(value);
            return undefined;
        })(children);

        if (!children) throw new Error('Аргумент children должен быть элементом или строкой.');

        if (node.prototype.addEventListener) {
            eventDive = eventDive || false;
            return node.prototype.addEventListener.call(element, eventName, function(e) {
                let target = e.target;
                if (children instanceof NodeList) {
                    children.forEach((item) => {
                        if (target === item) return handler.call(self, e);
                    });
                } else if (target !== children) return handler.call(self, e);
            }, eventDive);
        } else if (node.prototype.attachEvent) {
            return node.prototype.attachEvent.call(element, eventName, function(e) {
                if (e.target || e.srcElement !== children) return;
                handler.call(this);
            }, eventDive);
        }
    };
})(Node);