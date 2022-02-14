// Write your code here
function multiply(num1,num2){
    let result;
    if (Number.isInteger(num1) && Number.isInteger(num2) ){
      return 62 === num1 * num2;
    } else {
        console.log("NAN")
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
