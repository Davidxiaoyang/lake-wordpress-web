// 
(function() {
            var EventUtil = {
                //判断浏览器(绑定事件)
                addHandler: function(element, type, handler) {
                    if (element.addEventListener) {
                        element.addEventListener(type, handler, false);
                    } else if (element.attachEvent) {
                        element.attachEvent("on" + type, handler);
                    } else {
                        element["on" + type] = handler;
                    }
                },
                //解除事件
                removeHandler: function(element, type, handler) {
                    if (element.removeEventListener) {
                        element.removeEventListener(type, handler, false);
                    } else if (element.detachEvent) {
                        element.detachEvent("on" + type, handler);
                    } else {
                        element["on" + type] = null;
                    }
                },
                //取得事件对象
                getEvent: function(event) {
                    return event ? event : window.event;
                },
                //取得事件目标对象
                getTarget: function(event) {
                    if (event.target) {
                        return event.target;
                    } else {
                        return event.srcElement;
                    }
                },
                //阻止默认事件
                preventDefault: function(event) {
                    if (event.preventDefault) {
                        event.preventDefault();
                    } else {
                        event.returnValue = false;
                    }
                }
            }
  
  
            var btn = document.getElementById("myBtn");
            EventUtil.addHandler(btn, "click", function(event) {
                event = EventUtil.getEvent(event);
                var target = EventUtil.getTarget(event);
            });
        })();