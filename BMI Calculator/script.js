const form=document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#results');

    if(height==='' || height<0 || isNaN(height))
    {
        result.innerHTML=`Please give a valid height ${height}`;
    }
    else if(weight==='' || weight<0 || isNaN(weight))
    {
        result.innerHTML=`Please give a valid weight ${weight}`;
    }
    else{
        const bmi=(weight/((height*height)/10000));
        result.innerHTML=`<span>${bmi}</span>`;
        if(bmi<18.6)
        {
           const under=document.querySelector('#a');
           console.log(under);
           under.style.fontSize='35px';
           under.style.color='white';
           
        }
        else if(bmi>=18.6 && bmi<=24.9)
        {
           const under=document.querySelector('#b');
           console.log(under);
           under.style.fontSize='35px';
           under.style.color='white';
           
        }
        else{
           const under=document.querySelector('#c');
           console.log(under);
           under.style.fontSize='35px';
           under.style.color='white';
           
        }
    }

});