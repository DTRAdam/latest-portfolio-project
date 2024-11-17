AOS.init();



for (let i = 1; i <= 6; i++) {
    let skill = document.getElementById(`skill${i}`).innerHTML
    let circle = document.getElementById(`circle${i}`)
    skill = skill.replace("%", "")
    skill = skill / 100
    let offset = 472 - 472 * skill
    circle.style.strokeDashoffset = offset
}



