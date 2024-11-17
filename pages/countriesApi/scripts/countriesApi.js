let img = document.getElementById("imgContainer")
let dataDiv = document.getElementById("dataDiv")
let capitalCityInput = document.getElementById("capitalCity")
let datastyle = document.getElementById("datastyle")
let errorDiv = document.getElementById("error")

async function findCountry(capital) {
    let language = ""

    try {

        const data = await axios.get(`https://restcountries.com/v3.1/capital/${capital}`)
        img.innerHTML = `<img src="${data.data[0].flags.svg}" alt="${data.data[0].flags.alt}">`
        for (let key in data.data[0].languages) {
            language += (language == "" ? "" : ", ") + data.data[0].languages[key]
        }
        dataDiv.innerHTML = `
<h1>${data.data[0].name.common}</h1>
<p>Population: ${data.data[0].population}</p>
<p>Region: ${data.data[0].region}</p>
<p>Languages:${language} </p>`
        if (datastyle.style.display == "") {
            datastyle.style.display = "block"
            errorDiv.innerHTML = ""
        }
    } catch (error) {
        errorDiv.innerHTML = `<p>${capitalCityInput.value} doesn't exist</p>`

    }
}


function findTheContry() {
    if (capitalCityInput.value != "") {
        findCountry(capitalCityInput.value)
    } else {
        errorDiv.innerHTML = `<p>${capitalCityInput.value} doesn't exist</p>`
    }
}