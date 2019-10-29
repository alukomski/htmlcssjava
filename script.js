var block=document.getElementById("block");
var page=document.getElementById("page");
var left = 5
var bottom = 40
function move(e) {

   

    if (event.keyCode==39){
        left += 50;
        document.getElementById("block").style.left = left + "px";
        if(left = document.getElementById("page").style.width)
        {
            alert ("WRACAJ!")
            window.location.reload();
        }
    }
    if (event.keyCode==37) {
        left -= 50;
        document.getElementById("block").style.left = left + "px";
        if(left <= 0)
        {
            alert ("WRACAJ!")
        }
     }
    if (event.keyCode==38) {
        bottom += 50;
        document.getElementById("block").style.bottom = bottom + "px";
    }
    if (event.keyCode==40) {
        bottom -= 50;
        document.getElementById("block").style.bottom = bottom + "px";
    }
    
}
document.onkeydown = move;