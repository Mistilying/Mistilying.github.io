var arrZiMu = []
for (var i = 65; i < 91; i++) {
    // String.fromCharCode  根据编码获取内容
    arrZiMu.push(String.fromCharCode(i))
}
console.log(arrZiMu)
// 获取标签
var h1 = document.getElementById('h1')
var spanI = document.getElementById('i')
var spanJ = document.getElementById('j')
var spanV = document.getElementById('v')
// h1.innerText=arrZiMu[1]
function game() {
    var num = Math.floor(Math.random() * 26)
    h1.innerText = arrZiMu[num]
}
game()
//   正确的次数
var i = 0;
//   错误的次数
var j = 0;
//   正确率
var v = 0;
spanI.innerText = '正确：' + i + ''
spanJ.innerText = '错误：' + j + ''
spanV.innerText = '正确率：' + v + '%'
/*
没有开始执行键盘事件之前
开始计时，每两秒执行一次如果超过2秒没有输入则为错误
这次输入结束与下次输入开始间隔为2s
*/
var timer = setInterval(function () {
    h1.style.color = 'red'
    j++;
    spanJ.innerText = '错误：' + j + ''
    console.log('1111')
    spanV.innerText = '正确率：' + v + '%'
    game()
}, 2000)
/*
当开始输入的时候
*/
document.body.onkeyup = function (e) {
    console.log(e.key)
    if (e.key == 'F5') {
        //  console.log('dddd')
    }
    else {
        // 清除计时
            clearInterval(timer)
    //   输入的时候又开一个计时 
       timer = setInterval(function () {
            // 如果输入时间超过2秒
            h1.style.color = 'red'
            j++;
            spanJ.innerText = '错误：' + j + ''
            console.log('2222')
            spanV.innerText = '正确率：' + v + '%'
            game()
        }, 2000)
       
        if (e.key.toUpperCase() == h1.innerText) {
            //   alert('aaa')
            h1.style.color = 'black'
            game()

            i++;
            v = Math.round(i / (i + j) * 100)
            spanI.innerText = '正确：' + i + ''
            spanV.innerText = '正确率：' + v + '%'

        }
        else {
            h1.style.color = 'red'
            j++;
            spanJ.innerText = '错误：' + j + ''
            spanV.innerText = '正确率：' + v + '%'
        }
        
    }
}

