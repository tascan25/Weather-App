let cont = document.querySelector(".container")
let btn = document.querySelector(".btn")
let val = document.querySelector(".searchbtn input")
let img = document.querySelector(".main img")
let city_name = document.getElementById("name")
let humidity = document.getElementById("humidity")
let temp = document.getElementById("temp")
let windspeed = document.getElementById("speed")
let desc = document.querySelector("#desc")
window.addEventListener("load",async()=>{
    let response = await fetch("https://api.openweathermap.org/data/2.5/weather?appid=1cb1355f11f5e46c0ddf7e0afbc58fd5&q=Delhi&units=metric")
    let data = await response.json()
    console.log(data.weather[0]["icon"])
    console.log(data.weather[0]["description"])
    img.src = `http://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png`;
    desc.innerText = data.weather[0]["description"]
    city_name.innerText = data.name
    humidity.innerText = `${data.main["humidity"]}%`
    temp.innerText = Math.round(data.main["temp"])+"°c"
    windspeed.innerText = `${Math.round(data.wind["speed"])}`
})
btn.addEventListener("click",async ()=>{
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?appid=1cb1355f11f5e46c0ddf7e0afbc58fd5&q=${val.value}&units=metric`)
    let data = await response.json()
    console.log(data.weather[0]["icon"])
    img.src = `http://openweathermap.org/img/wn/${data.weather[0]["icon"]}@2x.png`;
    desc.innerText = data.weather[0]["description"]
    city_name.innerText = data.name
    humidity.innerText = `${data.main["humidity"]}%`
    temp.innerText = Math.round(data.main["temp"])+"°c"
    windspeed.innerText = `${Math.round(data.wind["speed"])}`
    // console.log(val.value)

})