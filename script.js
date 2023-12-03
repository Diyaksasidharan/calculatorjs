//1.display numbers on textbox
    function displayNumber(num){
        result.value+=num
    }
//2.clear textbox
function clearBox(){
    result.value = ""
}

//3.evaluate expression
//method 1
function evaluateExp(){
exp = result.value;//eg:6*6
output = eval(exp);
result.value = output;
}

//method 2
// result.value = eval(result.value)

//4.remove last item from textbox
function removelastitem(){
    result.value = result.value.slice(0,-1);
}
