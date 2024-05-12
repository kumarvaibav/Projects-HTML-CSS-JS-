function updateClock(){
    const d=new Date();
    const hours=d.getHours();
    const minutes=d.getMinutes();
    const seconds=d.getSeconds();

   const hourHand=document.getElementById('hourHand');
   const minuteHand=document.getElementById('minuteHand');
   const secondhand=document.getElementById('secondHand');

   const hourDegrees = (hours % 12) * 30 + minutes * 0.5;
   const minuteDegrees = minutes * 6 + seconds * 0.1;
   const secondDegrees = seconds * 6;

   hourHand.style.transform=`translate(0px,-60px) rotate(${hourDegrees}deg)`;
   minuteHand.style.transform=`translate(0px,-80px) rotate(${minuteDegrees}deg)`;
   secondhand.style.transform=`translate(0px,-90px) rotate(${secondDegrees}deg)`;
}

setInterval(updateClock,1000);
updateClock();