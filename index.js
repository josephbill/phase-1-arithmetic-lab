// Write your code here
function multiply(num1,num2){
    let x = Number( num2 )* Number(num1);
    if(x === 62){
        return x;
    }
}

function random() {
    let x = Math.floor(Math.random() * 10) + 1 ;
    return x;
}

function max(){
    return Math.max(1, 3, 20);
}

function mod(num1,num2){
    return num2%num1;
}

console.log(mod(5,19))