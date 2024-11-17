function textanimation(text, who, time) {
    let element = document.getElementById(who)
    let textArr = text.split("");
    for (let i = 0; i < textArr.length; i++) {
        setTimeout(() => {
            element.innerHTML += textArr[i];

        }, i * time);
    }
}
textanimation("web development.", "textspan", 140)
textanimation("HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.", "aboutmespan", 60)
textanimation("Van Gogh's and Galileo's art combined.", "galleryspan", 65)



setInterval(() => {
    let date = new Date();
    let formattedTime = new Intl.DateTimeFormat('he-IL', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Israel',
    }).format(date);
    document.getElementById("time").innerHTML = `IL, Jerusalem local time: <span class="timespan">${formattedTime}</span>`;
}, 1000);



function isMobile() {
    return window.matchMedia("(max-width: 768px)").matches;
}


let list = document.getElementById("ul")

function hamburger() {
    if (isMobile()) {
        list.style.display = list.style.display == "block" ? "none" : "block"
    }

}


