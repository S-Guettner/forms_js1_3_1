const age1 = document.getElementById("number1");
const age2 = document.getElementById("number2");
const button = document.getElementById("button");
const  output = document.getElementById("output");

button.addEventListener('click', () =>{
    const ageInput1 = age1.value;
    const ageInput2 = age2.value;
    if(ageInput1 < ageInput2){
        output.innerHTML = ageInput2 - ageInput1;
    }else{
        output.innerHTML = ageInput1 - ageInput2;
    }
})
