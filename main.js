color = "Red";
width_of_line = 2;
canvas = document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var last_position_of_X, last_position_of_Y;
var mouseEvent ="empty"; 
canvas.addEventListener("mousedown" , my_mousedown );
function my_mousedown(e){
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup" , my_mouseup );
function my_mouseup(e){
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave" , my_mouseleave );
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_X = e.clientX - canvas.offsetLeft;
    current_position_of_Y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    console.log("last postion of X and Y coordinate =");
    console.log("X =" + last_position_of_X + "Y = " + last_position_of_Y);
    ctx.moveTo(last_position_of_X , last_position_of_Y);

    console.log("Current postion of X and Y coordinate =");
    console.log("X =" + current_position_of_X + "Y = " + current_position_of_Y);
    ctx.lineTo(current_position_of_X , current_position_of_Y);
    ctx.stroke();
}
last_position_of_X = current_position_of_X;
last_position_of_Y=current_position_of_Y;


}