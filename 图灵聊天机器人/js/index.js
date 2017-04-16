// 获取文本标签
var txt = document.getElementById('txt')
var app = document.querySelector('#app')
// 键盘事件 
function keyupHandle(e) {
    if (e.keyCode == 13) {
        // 获取的数据内容显示在页面上
        sendMsg(txt.value.trim())
        // 输入框清空
        txt.value = ""
    }
}
// 参数是输入框的内容
function sendMsg(msg) {
    // 实例化一个对象 可以局部更新页面
    var xhr = new XMLHttpRequest()
    //  接收数据
    xhr.onreadystatechange = function () {
        //  获取内容
        if (xhr.readyState == 4) {
            // console.log(xhr.getResponseHeader("Content-Type"))
            // console.log(xhr.response)
            //  转对象
            var str = JSON.parse(xhr.response)
             app.innerHTML=''
            var strHtml = ''
            //  文本
            if (str.code == 100000) {
                strHtml = `<br>回答：${str.text}` + '<hr>'
            }
            //  链接
            else if (str.code == 200000) {
                strHtml = `回答：<a target="_blank" href="${str.url}">${str.text}</a>` + '<hr>'
            }
            //  新闻
            else if (str.code == 302000) {
                var arrNew = str.list           
                // 遍历数组
                arrNew.forEach(function (item) {
                    strHtml += `回答：<a target="_blank" href="${item.detailurl}">${item.article}</a>` + '<hr>'
                })

            }
            //  菜谱
            else if (str.code == 308000) {
                var arrNew = str.list
                arrNew.forEach(function (item) {
                    strHtml += `回答：<a target="_blank" href="${item.detailurl}">${item.name}</a><br>菜谱信息:${item.info}` + '<hr>'
                })

            }
            else {
                strHtml = `回答：这个问题我回答不了` + '<hr>'
            }

            app.innerHTML += `提问：${msg}<hr>${strHtml}`
        }
    }
    // 请求数据
    /*
    默认异步处理
    */
    xhr.open('get', 'http://www.tuling123.com/openapi/api?key=bc07d902b56e4facb88b88055139f001&info='+msg)
    // 发送数据
    xhr.send()
}
