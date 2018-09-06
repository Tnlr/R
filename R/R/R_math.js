
/*
    R.Math{
        quadraticEquation(a, b, c); 求一元二次方程或一元一次方程
    }
*/


var R = {
    Math : {
        // 求一元二次方程或一元一次方程
        // a, b ,c
        quadraticEquation : function (a, b, c)  {
            c = typeof c !== 'number' ? 0 : c; // 判断是否给出c
            b = typeof b !== 'number' ? 0 : b; // 判断是否给出b

            if (typeof a !== 'number' || (a === 0 && b === 0)) { // 判断a是否给出，a和b同时为0时无解
                console.error('Parameter Error!');
                return false;
            }

            if (a === 0) { // a等于0时，为一元一次方程
                return -c / b;
            }

            var d = b * b - 4 * a * c; // 判别式

            if (d < 0) { // 无解时
                console.log('No solution!');
                return false;
            } else { // 一元二次方程有一个解或两个解
                return d === 0 ? -b / (2 * a) : [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)]; // 返回值
            }
        }
    }
};