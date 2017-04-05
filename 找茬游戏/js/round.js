// 获取图片标签
var img = document.querySelector('img')
// 你还有几处不同
var i = 5;
// 按钮
var direct = true;

img.onclick = function (event) {
    if (direct) {
        console.log(direct)
        console.log(event.pageX)
        console.log(event.pageY)
        var x = event.pageX
        var y = event.pageY
        // 创建圆标签
        var div = document.createElement('div')
        div.style.width = '80px'
        div.style.height = '80px'
        div.style.borderRadius = '50%'
        div.style.border = '1px solid red'
        div.style.position = 'absolute'
        div.style.left = x - 40 + 'px'
        div.style.top = y - 40 + 'px'
        document.body.appendChild(div)
        if (x >= 464 && x <= 524 && y >= 72 && y <= 110) {
            i = i - 1;
            // alert('这是第一处错误')
            div.style.left = '452px'
            div.style.top = '48px'
        }
        else if (x >= 543 && x <= 583 && y >= 321 && y <= 344) {
            i = i - 1;
            // alert('这是第一处错误')
            div.style.left = '521px'
            div.style.top = '291px'
        }
        else if (x >= 624 && x <= 651 && y >= 369 && y <= 388) {
            i = i - 1;
            // alert('这是第一处错误')
            div.style.left = '600px'
            div.style.top = '336px'
        }
        else if (y >= 355 && y <= 373 && x >= 751 && x <= 778) {
            i = i - 1;
            // alert('这是第一处错误')
            div.style.left = '724px'
            div.style.top = '320px'
        }
        else if (x >= 490 && x <= 520 && y >= 362 && y <= 387) {
            i = i - 1;
            // alert('这是第一处错误')
            div.style.left = '464px'
            div.style.top = '340px'
        }
        else {
            // alert('没有找对请重找')
            document.body.removeChild(div)
        }
        b.innerText = i;
        if (i == 0) {
            alert('good！')
            clearInterval(timer)

        }
    }
}
// 创建几处不同标签
var b = document.createElement('b')
b.innerText = i;
b.style.fontSize = '30px'
b.style.color = 'red'
b.style.position = 'absolute'
document.body.appendChild(b)
b.style.left = '496px'
b.style.top = '444px'
// 创建时间标签
var span = document.createElement('span')
span.innerText = 10;
span.style.fontSize = '30px'
span.style.color = 'red'
span.style.position = 'absolute'
document.body.appendChild(span)
span.style.left = '250px'
span.style.top = '443px'
var timer = setInterval(function () {
    span.innerText = span.innerText  - 1;
    console.log(span.innerText)
    if (span.innerText == 0) {
        alert('游戏结束,继续努力-------------')
        direct=false;
        console.log(direct)
    }

}, 1000)
// 游戏时间
setTimeout(function () {
    if (span.innerText == 0) {
        alert('游戏结束,继续努力')
    }
    clearInterval(timer)
    
}, 11000);

