const randomNumber=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++)
    {
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
};
let Interval;
  function startChangingColor(){
    if(Interval==null)
    {
        Interval=setInterval(ChangeBgColor,1000);
    }
    function ChangeBgColor(){    
     document.body.style.backgroundColor=randomNumber();
    }
  }

 function stopChangingColor(){
    clearInterval(Interval);
    Interval=null;
  }

 document.querySelector('#start').addEventListener('click',startChangingColor);
document.querySelector('#stop').addEventListener('click',stopChangingColor);