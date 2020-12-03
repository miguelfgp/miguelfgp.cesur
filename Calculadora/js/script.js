var num1 = '';
var num2 = '';
var op1 = '';
var op2 = '';
var insert = false;

document.addEventListener('keydown', function(event) {

    let code = event.code;

    if (code == 'Delete'){
        operator('C');
    } else {
        let type = code.slice(0,-1);
        let number = parseInt(code.slice(-1));

        if (type == "Digit"){
            operator(number);
        } else if (type == "Numpad"){
            
            if (number >= 0 || number <= 9){
                operator(number);
            }

        } else {

            let op = code.slice(6);

            switch (op){
                case 'Add': operator('+'); break;
                case 'Subtract': operator('-'); break;
                case 'Multiply': operator('*'); break;
                case 'Divide': operator('/'); break;
                case 'Enter': operator('='); break;
            }
        }
    }

  });

function operator(char){

    if (char >= 0 || char <= 9){
        if (op1 == ''){
            num1 += char;
        } else {
            num2 += char;
        }
        showNumber(char);
    } else if (char == 'C') {
        document.getElementById('screen').value = '0';
        num1 = '';
        num2 = '';
        op1 = '';
        op2 = '';
    } else {
        if (op2 != '' && char != '='){
            op1 = char;
        } else {
            op2 = char;
            calculator();
        }
        insert = false;
    }
};

function showNumber(num){
    
    var screenNumber = document.getElementById('screen').value;

    if (screenNumber.localeCompare("0") && insert){
        if (screenNumber.length < 5){
            document.getElementById('screen').value += num;
        }
    } else {
        document.getElementById('screen').value = num;
        insert = true;
    }
};

function calculator(){
    num1 = eval(num1 + op1 + num2);
    num1 = checkLength(num1);
    document.getElementById('screen').value = num1;

    if (op2 == '='){
        op1 = '';
    } else {
        op1 = op2;
        op2 = '';
    }
    num2 = '';
};

function checkLength(number){

    if (number >= 99999){
        number = 99999;
    }
        
    number = number.toString();
    number = number.substring(0, 5);
    return number;
}