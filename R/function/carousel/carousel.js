
// 轮播特效
// 使用方法div>span + div(img *3) + span
// elementCarousle：父级div
function carousel (elementCarousle) {
    var element = elementCarousle.querySelector('div'), // 获取滑动div
        setTimeA, //setTimeout变量
        buttons = elementCarousle.querySelectorAll('span'); // 上一页下一页按钮

    sortImg(element, false);
    setTimeout(cycle, 5000);

    // 上一页函数
    buttons[0].onclick = function () {
        slide(element, true);
    };

    // 下一页函数
    buttons[1].onclick = function () {
        slide(element, false);
    };

    // 鼠标移入，停止循环
    elementCarousle.addEventListener('mouseenter', function () {
        clearTimeout(setTimeA);
    });

    // 鼠标移出调用循环函数
    elementCarousle.addEventListener('mouseleave', function () {
        setTimeA = setTimeout(cycle, 5000); // 调用循环函数
    });


    // 循环函数
    function cycle () { 
        slide(element, true); // 调用滑动函数
        clearTimeout(setTimeA); // 清除未执行的setTimeout
        setTimeA = setTimeout(cycle, 5000); // 调用自身函数
    }

    // 对图片进行重新排序，
    // element，direction：目标元素；ture为左，false为由
    function sortImg (element, direction) {
        var imgs = element.querySelectorAll('img'); // 获取所有图片
        if (direction) { // 判断是向左还是向右
            element.appendChild(imgs[0]); // 向左时，第一张图片移到最后去
        } else {
            // 向右时，最后一张图片移到第一位
            element.insertBefore(imgs[imgs.length - 1], imgs[0]); 
        }
        // 重置父级div的位置
        element.style.left = '-100%';
    }

    // 左右移动函数
    // element，direction：目标元素；ture为左，false为由
    function slide (element, direction) {
        var c = element.style.left.slice(0, -1); // 获取left样式
        c = !c ? -100 : Number(c); // 判断是否为百分比
        var d = true; // 判断条件

        if (direction) { // 左移动时
            c -= 3; // left--
            d = c > -200 ? true : false; // 判别式为大于-200时继续移动
        } else{ // 右移动时
            c +=3; // right++
            d = c < 0 ? true : false; // 判别式为小于0时继续移动
        }

        element.style.left = c + '%'; // 移动

        if (d) { // 判断是否该继续移动
            setTimeout(function () { // 设置移动时间
                slide(element, direction); // 
            }, 1000 / 60);
        } else {
            sortImg(element, direction);
        }
    }
}