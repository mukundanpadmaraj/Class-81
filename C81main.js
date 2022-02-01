var canvas = document.getElementById("My_Canvas")
var ctx = canvas.getContext("2d")
var colour = "blueviolet"

ctx.beginPath()
ctx.strokeStyle = colour
ctx.lineWidth = 2
ctx.arc(100, 100, 22, 0, 2 * Math.PI)
ctx.stroke()

canvas.addEventListener("mousedown", my_mousedown)
function my_mousedown(e) {
    console.log(e)
    var mouse_x = e.clientX - canvas.offsetLeft
    var mouse_y = e.clientY - canvas.offsetTop
    circle(mouse_x, mouse_y)
}
function circle(x, y) {
    ctx.beginPath()
    ctx.strokeStyle = colour
    ctx.lineWidth = 2
    ctx.arc(x, y, 22, 0, 2 * Math.PI)
    ctx.stroke()
}