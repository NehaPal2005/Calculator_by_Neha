let inputBox= document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')
let memory=0
let string=''
function factorial(n)
{
    if(n==0)
    return 1
    else 
    return n*factorial(n-1)
}
buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerText== '='){
            string=string.replace('^','**')
            string=string.replace('π',3.14)
            string=eval(string);
            inputBox.value=string;
        }
        else if(e.target.innerText== 'AC'){
            string=''
            inputBox.value=string;
        }
        else if(e.target.innerText=='DE'){
            string=string.substring(0,string.length-1)
            inputBox.value=string;
        }
        else if(e.target.innerText=='M+'){
            const displayedValue=parseFloat(inputBox.value)
            memory+=displayedValue
        }
        else if(e.target.innerText=='MR'){
            inputBox.value=memory;
        }
        else if(e.target.innerText=='MC'){
            memory=0
            inputBox.value=memory
        }
        else if(e.target.innerText=='sin'){
            const angle=parseFloat(inputBox.value)*Math.PI/180
            inputBox.value=Math.sin(angle)
        }
        else if(e.target.innerText=='cos'){
            const angle=parseFloat(inputBox.value)*Math.PI/180
            inputBox.value=Math.cos(angle)
        }
        else if(e.target.innerText=='tan'){
            const angle=parseFloat(inputBox.value)*Math.PI/180
            inputBox.value=Math.tan(angle)
        }
        else if(e.target.innerText=='rad'){
            const angle=parseFloat(inputBox.value)
            inputBox.value=angle *(Math.PI/180)
        }
        else if(e.target.innerText=='sin-1'){
            const angle=parseFloat(inputBox.value)
            inputBox.value=Math.asin(angle)*(180/Math.PI)
        }
        else if(e.target.innerText=='cos-1'){
            const angle=parseFloat(inputBox.value)
            inputBox.value=Math.acos(angle)*(180/Math.PI)
        }
        else if(e.target.innerText=='tan-1'){
            const angle=parseFloat(inputBox.value)
            inputBox.value=Math.atan(angle)*(180/Math.PI)
        }
        else if(e.target.innerText=='log'){
            const n=parseFloat(inputBox.value)
            inputBox.value=Math.log10(n)
        }
        else if(e.target.innerText=='sqrt'){
            const n=parseFloat(inputBox.value)
            inputBox.value=Math.sqrt(n)
        }
        else if(e.target.innerText=='cbrt'){
            const n=parseFloat(inputBox.value)
            inputBox.value=Math.cbrt(n)
        }
        else if(e.target.innerText=='n!')
        {
            const n=parseFloat(inputBox.value)
            if(n<0 || Number.isNaN(n))
            inputBox.value="invalid"
            else 
            inputBox.value=factorial(n);
        }
        else if (e.target.innerText == 'e') {
            inputBox.value = Math.E;
          } 
          else if (e.target.innerText == '1/x') {
            const number = parseFloat(inputBox.value);
            if (number == 0) {
              inputBox.value = "Error";
            } 
            else {
              inputBox.value = 1 / number;
            }
        }
        else
        {
            string+= e.target.innerText
            inputBox.value=string;
        }

    })
})