const imageContainerEl = document.querySelector(".image-container");
const imageDiv = document.getElementById("image-container")
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");
let x = 0;
prevEl.addEventListener("click", () => {
    x = x + 60;
    updateGallery();
});
nextEl.addEventListener("click", () => {
    x = x - 60;
    updateGallery();
});

function updateGallery() {
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}

updateGallery();

let modeJs = true
let gallerySwitchBtn = document.getElementById("gallerySwitchBtn")
async function getdata() {
    try {
        const res = await fetch("/files/projects.json")
        const data = await res.json()
        let newData = modeJs ? data.Jsprojects : data.HTMLCSSprojects
        let str = `  <span>
                <img src="images/newLogo.webp" />
            </span>`
        for (let i = 0; i < newData.length; i++) {
            str += `<span class="galleryImgSpan" style="--i: ${newData[i].id}"> <a href="/pages/projectlink.html?${newData[i].id}${modeJs ? "Js" : "Html"}"><img src="${newData[i].picture_link}"/></a></span>`
        }
        imageDiv.innerHTML = str
        setTimeout(() => {
            if (modeJs == true) {
                gallerySwitchBtn.innerHTML = `<i class="fa-brands fa-html5" style="color: #ea4424;"></i>`
            } else {
                gallerySwitchBtn.innerHTML = `<i class="fa-brands fa-js" style="color: #FFD43B;"></i>`

            }
        }, 200);

    } catch (error) {
        console.log(error);
    }


}
getdata()

function toggleMode() {
    modeJs = !modeJs
    x += 360
    updateGallery()
    getdata()
}


function submitAction() {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let company = document.getElementById("company").value
    let services = document.getElementById("services").value
    let errormsg = document.getElementById("error")

    if (name && email && company && services) {
        alert(`Thanks for submitting ${name}`)
        errormsg.innerText = ""
    } else {
        errormsg.innerText = "You must fill the form"
    }
}