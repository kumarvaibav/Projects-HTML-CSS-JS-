const clock=document.getElementById('clock');
// console.log(clock);

//setInterval()=>  The setInterval() method calls a function at specified intervals (in milliseconds).
                // The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.(1 second = 1000 milliseconds.)


setInterval(function(){
    const date=new Date();
    clock.innerText=date.toLocaleTimeString();
},1000);