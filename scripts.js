setInterval(setClock, 1000);
const hourHand = document.querySelector('[data-hour-hand]')
const minutesHand = document.querySelector('[data-minutes-hand]')
const secondHand = document.querySelector('[data-seconds-hand]')


function setClock(){
    const currentTime = new Date();
    const secondsRatio = currentTime.getSeconds()/60;
    const minutesRatio = (secondsRatio + currentTime.getMinutes())/60;
    const hourRatio = (minutesRatio + currentTime.getHours())/12;
    setRotation(secondHand,secondsRatio)
    setRotation( minutesHand, minutesRatio)
    setRotation(hourHand, hourRatio)

}
function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setClock()