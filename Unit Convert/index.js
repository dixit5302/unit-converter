const meterToFeet = 3.281
const literToGallon = 0.264
const kilogramToPound = 2.204

let inputEl = document.getElementById("input-el")
let convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

convertBtn.addEventListener("click", function(){
    let baseValue = inputEl.value
    if (baseValue > 0){
        lengthEl.textContent = `${baseValue} meters = ${(baseValue*meterToFeet).toFixed(3)} feets | ${(baseValue)} feets = ${(baseValue/meterToFeet).toFixed(3)}  meters`
        volumeEl.textContent = `${baseValue} liters = ${(baseValue*literToGallon).toFixed(3)} gallons | ${(baseValue)} gallons = ${(baseValue/literToGallon).toFixed(3)} liters`
        massEl.textContent = `${baseValue} kilos = ${(baseValue*kilogramToPound).toFixed(3)} pounds | ${(baseValue)} pounds = ${(baseValue/kilogramToPound).toFixed(3)} kilos`
    }
})