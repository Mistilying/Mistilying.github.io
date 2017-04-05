// 获取标签用来显示时间
var span = document.querySelector('span')
// 获取添加table的父标签
var app = document.querySelector('.app')
// 获得当前时间
var now = new Date()
//  console.log(now)
time(now)
// 上个月的点击事件
function upMonth() {
    app.innerHTML = ''
    var month = new Date(now.setMonth(now.getMonth() - 1, 1))
    // console.log(now.setMonth(now.getMonth()+1,1))
    time(month)
}
// 下个月的点击事件
function nextMonth() {
    app.innerHTML = ''
    var month = new Date(now.setMonth(now.getMonth() + 1, 1))
    // console.log(now.setMonth(now.getMonth()+1,1))
    time(month)
}


// 参数m是想要显示的时间
function time(m) {
    // console.log(now)
    span.innerText = m.getFullYear() + "年" + (m.getMonth() + 1) + "月"
    // console.log(m)
    //   设置当前时间为1号
    var day = new Date(m.setDate(1))
    // 用来计算这个月的天数
    var dayNum = new Date(m.setDate(1))
    // 获取星期
    var week = m.getDay()
    // 用来计算上个月的天数
    var dayNext = new Date(m.setDate(1 - week))
    // 创建table标签
    var table = document.createElement('table')
    table.style.width = '400px'
    table.style.height = '300px'
    table.style.margin = '0 auto'
    var trRow = table.insertRow()
    var arrWeeks = ['日', '一', '二', '三', '四', '五', '六']
    for (var i = 0; i < 7; i++) {
        var tdCell = trRow.insertCell()
        tdCell.innerText = arrWeeks[i]
    }
    for (var i = 0; i < 6; i++) {
        var tr = table.insertRow()
        for (var j = 0; j < 7; j++) {
            var td = tr.insertCell()
            if (week <= j + i * 7) {
                var current = new Date()
                // console.log(current)
                if (dayNum.getDate() == current.getDate() && dayNum.getFullYear() == current.getFullYear() && dayNum.getMonth() == current.getMonth()) {
                    td.style.color = 'red'
                }
                if (dayNum.getMonth() != day.getMonth()) {
                    td.style.color = '#999'
                }
                td.innerText = dayNum.getDate()
                dayNum.setDate(dayNum.getDate() + 1)

            }
            else {

                if (dayNext.getMonth() != day.getMonth()) {
                    td.style.color = '#999'
                    td.innerText = dayNext.getDate()
                    dayNext.setDate(dayNext.getDate() + 1)
                }
            }
        }
    }
    app.appendChild(table)
}