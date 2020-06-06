const h2 = document.querySelector("h2")

const remainTime = () => {
    const dateNow = new Date()
    const dateChristmas = new Date("Dec 25 , 2020 00:00:00")
    let remainSecond = Math.ceil((dateChristmas.getTime() - dateNow.getTime())/1000)
    let remainMin = (remainSecond - remainSecond%60)/60
    let remainHour = (remainMin - remainMin%60)/60
    let remainDay = (remainHour - remainHour%24)/24
    remainSecond = remainSecond%60 > 9 ? remainSecond%60 : `0${remainSecond%60}`
    remainMin = remainMin%60 > 9 ? remainMin%60 : `0${remainMin%60}`
    remainHour = remainHour%60 > 9 ? remainHour%60 : `0${remainHour%60}`
    remainSecond % 60,remainMin%60,remainHour%24,remainDay
    h2.innerText = `${remainDay}d ${remainHour%24}h ${remainMin%60}m ${remainSecond}s`
}


remainTime()
setInterval(remainTime,1000);


