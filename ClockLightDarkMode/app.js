const timeEL = document.querySelector(".time")
const btnToggle = document.querySelector(".toggle")

function setTime(){
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    timeEL.innerHTML=`${hours}:
    ${minutes<10 ? `0${minutes}` : minutes}:
    ${seconds<10 ? `0${seconds}` : seconds}`
}

btnToggle.addEventListener("click",(e)=>{
    
})
setTime()
setInterval(setTime,1000)