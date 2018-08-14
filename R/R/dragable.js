
// 自定义事件

function EventTarget() {
    this.handlers = {};
}

EventTarget.prototype = {
    constructor: EventTarget,
    addHandler: function(type, handler) { // 为指令添加事件
        if (typeof this.handlers[type] == 'undefined') { // 指令第一次传入时
            this.handlers[type] = []; // 初始化指令
        }
        this.handlers[type].push(handler); // 将函数推入指令中
    },

    fire: function(event) { // event为一个对象{'type' : 指令, 参数
        if (!event.target) {
            event.target = this;
        }
        if (this.handlers[event.type] instanceof Array) { // 指令已经存在
            var handlers = this.handlers[event.type]; // 获取指令的函数数组
            for (var i = 0, len = handlers.length; i < len; i++) { // 遍历指令的函数数组
                handlers[i](event); // 执行函数
            }
        }
    },
    removeHandler: function(type, handler) { // 移除指令的某个绑定函数
        if (this.handlers[type] instanceof Array) { // 判断指令是否初始化
            var handlers = this.handlers[type]; // 获取指令的函数数组
            for (var i = 0, len = handlers.length; i < len; i++) { // 遍历指令的函数数组
                if (handlers[i] === handler) { // 查找到需要解绑函数的位置
                    break;
                }
            }

            handlers.splice(i, 1); // 解绑函数
        }
    }
};

// 拖动

var DragDrop = function () {
    var dragging = null,
        diffX = 0,
        diffY = 0,
        dragdrop = new EventTarget();

    function handleEvent (event) {
        // 获取事件和目标
        event = R.getEvent(event);
        var target = R.getTarget(event);

        // 确定事件类型
        switch(event.type) {
            case "mousedown" :
                if (target.className.indexOf('draggable') > -1) {
                    dragging = target;
                    diffX = event.clientX - target.offsetLeft;
                    diffY = event.clientY - target.offsetTop;
                    dragdrop.fire({type : 'dragstart', target : dragging, x : event.clientX, y : event.clientY});
                }
                break;

            case 'mousemove' :
                if (dragging !== null) {
                    dragging.style.left = (event.clientX - diffX) + 'px';
                    dragging.style.top = (event.clientY - diffY) + 'px';
                    dragdrop.fire({type : 'drag', target : dragging, x : event.clientX, y : event.clientY});
                }
                break;

            case "mouseup" :
                dragdrop.fire({type : 'dragend', target : dragging, x : event.clientX, y : event.clientY});
                dragging = null;
                break;
        }
    }

    dragdrop.enable = function () {
        R.addHandler(document, 'mousedown', handleEvent);
        R.addHandler(document, 'mousemove', handleEvent);
        R.addHandler(document, 'mouseup', handleEvent);
    };
    dragdrop.disable = function () {
        R.removeHandler(document, 'mousedown', handleEvent);
        R.removeHandler(document, 'mousemove', handleEvent);
        R.removeHandler(document, 'mouseup', handleEvent);
    };

    return dragdrop;
};

var DragDrop = DragDrop();
DragDrop.enable();

DragDrop.addHandler('dragstart', function (event) {
    var status = document.getElementById('status');
    status.innerHTML = 'Started dragging' + event.target.id;
});

DragDrop.addHandler('drag', function (event) {
    var status = document.getElementById('status');
    status.innerHTML = "<br/> Dragged " + event.target.id + "to (" + event.x + "," + event.y + ')';
});

DragDrop.addHandler('dragend', function (event) {
    var status = document.getElementById('status');
    status.innerHTML = status.innerHTML = "<br/> Dragged " + event.target.id + "to (" + event.x + "," + event.y + ')';
});

