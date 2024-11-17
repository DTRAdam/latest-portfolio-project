let dataQuery = window.location.search.substring(1);
let id = dataQuery.substring(0, 1)
let type = dataQuery.substring(1, dataQuery.length)
let header = document.getElementById("linkPageH")
let ProjectDescription = document.getElementById("linkPageP")
let projectImg = document.getElementById("projectImg")
let btnDiv = document.getElementById("btndiv")



let modeJs = type == "Js" ? true : false
async function setdata() {
    try {
        const res = await fetch("../files/projects.json")
        const data = await res.json()
        let newData = modeJs ? data.Jsprojects : data.HTMLCSSprojects
        let projectName = newData[id - 1].name
        let picturlink = newData[id - 1].picture_link
        let ProjectDescriptionText = newData[id - 1].project_description
        let landingPageLink = newData[id - 1].landing_page


        header.innerText = projectName
        ProjectDescription.innerText = ProjectDescriptionText
        projectImg.innerHTML = `<img class="projectImg" src="../${picturlink}" alt="${ProjectDescriptionText}">`
        btnDiv.innerHTML = `<a href="..${landingPageLink}"><button class="preview-button">Preview</button></a>
                <a href="../projectfiles/${projectName}.zip"><button class="preview-button">Download</button></a>`
    } catch (error) {
        console.log(new Error("project is not found"));

    }

}
setdata()

let list = document.getElementById("ul")

function isMobile() {
    return window.matchMedia("(max-width: 768px)").matches;
}
function hamburger() {
    if (isMobile()) {
        list.style.display = list.style.display == "block" ? "none" : "block"
    }

}







