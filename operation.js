const addInput=document.querySelectorAll('.input');
const addBtn=document.querySelector('#add-btn');
const output=document.querySelector('#output')

function add(a,b){
    const getAdd=a+b;
output.innerHTML=getAdd;
}

function clickAddHandler(){
const getAdd=add(Number(addInput[0].value),Number(addInput[1].value));

}
addBtn.addEventListener('click',clickAddHandler)



const subInput=document.querySelectorAll('.input');
const subBtn=document.querySelector('#sub-btn');


function sub(a,b){
    const getSub=a-b;
    output.innerHTML=getSub;
}

function clickSubHandler(){
const getSub=sub(Number(subInput[0].value),Number(subInput[1].value));

}
subBtn.addEventListener('click',clickSubHandler)



const multInput=document.querySelectorAll('.input');
const multBtn=document.querySelector('#mult-btn');


function mult(a,b){
    const getMult=a*b;
    output.innerHTML=getMult;
}

function clickMultHandler(){
const getMult=mult(Number(multInput[0].value),Number(multInput[1].value));

}
multBtn.addEventListener('click',clickMultHandler)


const divInput=document.querySelectorAll('.input');
const divBtn=document.querySelector('#div-btn');


function div(a,b){
    const getDiv=a/b;
    output.innerHTML=getDiv;
}

function clickDivHandler(){
const getDiv=div(Number(divInput[0].value),Number(divInput[1].value));

}
divBtn.addEventListener('click',clickDivHandler)














