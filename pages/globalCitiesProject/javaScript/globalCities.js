var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var img5 = document.getElementById("img5");
var img6 = document.getElementById("img6");

function move(img) {
    if (window.innerWidth <= 768) {
        if (img == 1) {
            img3.style.transform = "translateY(165px)";
            img5.style.transform = "translateY(165px)";
        }
        else if (img == 2) {
            img4.style.transform = "translateY(165px)";
            img6.style.transform = "translateY(165px)";
        }
        else if (img == 3) {
            img5.style.transform = "translateY(150px)";
        }
        else if (img == 4) {
            img6.style.transform = "translateY(150px)";
        }
    }
}

function back(img) {
    if (img == 1) {
        img3.style.transform = "translateY(0px)";
        img5.style.transform = "translateY(0px)";
    }
    else if (img == 2) {
        img4.style.transform = "translateY(0px)";
        img6.style.transform = "translateY(0px)";
    }
    else if (img == 3) {
        img5.style.transform = "translateY(0px)";
    }
    else if (img == 4) {
        img6.style.transform = "translateY(0px)";
    }
}