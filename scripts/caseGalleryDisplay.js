var dis1 = document.getElementById("dis1");
var dis2 = document.getElementById("dis2");
var dis3 = document.getElementById("dis3");
var dis4 = document.getElementById("dis4");
var open = 0

function changeSize(size) {
    // console.log(size); //debug
    if (size == 1) {

        dis1.style.width = (open != 1 ? 500 : 70) + "px";
        dis2.style.width = 70 + "px";
        dis3.style.width = 70 + "px";
        dis4.style.width = 70 + "px";
        open = open != 1 ? 1 : 0;

    }
    else if (size == 2) {

        dis1.style.width = 70 + "px";
        dis2.style.width = (open != 2 ? 500 : 70) + "px";
        dis3.style.width = 70 + "px";
        dis4.style.width = 70 + "px";
        open = open != 2 ? 2 : 0;

    }
    else if (size == 3) {

        dis1.style.width = 70 + "px";
        dis2.style.width = 70 + "px";
        dis3.style.width = (open != 3 ? 500 : 70) + "px";
        dis4.style.width = 70 + "px";
        open = open != 3 ? 3 : 0;
    }
    else {

        dis1.style.width = 70 + "px";
        dis2.style.width = 70 + "px";
        dis3.style.width = 70 + "px";
        dis4.style.width = (open != 4 ? 500 : 70) + "px";
        open = open != 4 ? 4 : 0;
    }

}