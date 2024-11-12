const days = document.getElementById('days')
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')

const finishDate = "01 jan 2025"




function calcDuration () {
    const newFinishDate = new Date(finishDate)
    const currentDate = new Date()
    
    const totalSeconds = (newFinishDate - currentDate) / 1000
    
    
    Timer(totalSeconds, days, hours, minutes, seconds)
    
    
}

function Timer(duration, dias, horas, minutos, segundos){
    let timeInSeconds = duration
    let days, hours, minutes, seconds;

    setInterval(() => {
        days = Math.floor(timeInSeconds / 86400)
        hours = Math.floor((timeInSeconds / 60) / 60 - (days * 24))
        minutes = Math.floor((timeInSeconds / 60) % 60)
        seconds = Math.floor(timeInSeconds % 60)
        
        dias.innerText = days < 10 ? `0${days}:`: `${days}:`
        horas.innerText = hours < 10 ? `0${hours}:`: `${hours}:`
        minutos.innerText = minutes < 10 ? `0${minutes}:`: `${minutes}:`
        segundos.innerText = seconds < 10 ? `0${seconds}`:seconds
        
        timeInSeconds -=1

    }, 1000)
}

calcDuration()

