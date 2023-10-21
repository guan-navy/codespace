const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setTime() {
    const now = new Date();
    //获取当前秒数
    const seconds = now.getSeconds();
    const secondDegrees = seconds * 6 + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    //拿到当前的分钟
    const minutes = now.getMinutes();
    const minuteDegrees = minutes * 6 + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    //拿到当前的小时
    const hours = now.getHours();

    const hourDegrees = (hours * 30 + 90) + (minutes / 60) * 30;
    console.log(minuteDegrees);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setTime();
setInterval(setTime, 1000);



// const secondHand = document.querySelector('.second-hand')
// const minHand = document.querySelector('.min-hand')
// const hourHand = document.querySelector('.hour-hand')

// // console.log(secondHand);

// function setTime() {
//   const now = new Date()

//   // 获取当前的秒数
//   const seconds = now.getSeconds() // 30
//   const secondsDegrees = seconds * 6 + 90
//   secondHand.style.transform = `rotate(${secondsDegrees}deg)`

//   // 获取到分数pl"

//   const mins = now.getMinutes() // 40
//   const minsDegrees = mins * 6 + 90
//   minHand.style.transform = `rotate(${minsDegrees}deg)`

//   // 获取到时
//   const hour = now.getHours() // 21
//   const hourDegrees = hour * 30 + 90 + (mins / 60) * 30
//   hourHand.style.transform = `rotate(${hourDegrees}deg)`
// }

// setTime()
// setInterval(setTime, 1000)