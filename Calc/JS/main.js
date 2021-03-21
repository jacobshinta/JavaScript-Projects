const Calculator = { //variable to keep track of values
    Display_Value: '0', //display a 0
    First_Operand: null, //will hold the first value
    Wait_Second_Operand: false, //checks if input 2nd operator
    operator: null, //holds the operator
};

function Input_Digit(digit) {  //whenever input is made modifies the values
    const { Display_Value, Wait_Second_Operand } = Calculator; //checking to see if wait_second_operator is true and set the display to the selected button
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else { 
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit; //overwrites display value if 0 otherwise add to it
    }
}

function Input_Decimal(dot) { //handles decimal points
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) { //if display_value does not contain a decimal point add a decimal point
        Calculator.Display_Value += dot;
    }
}

function Handle_Operator(Next_Operator) { //define function that handles operators
    const { First_Operand, Display_Value, operator } = Calculator
    const Value_of_Input = parseFloat(Display_Value); //when op key is pressed convert the current diplayed number to the new vaule and store it
    if (operator && Calculator.Wait_Second_Operand) { //checks if operator already exists and if wait_second_op is true
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        const Value_Now = First_Operand || 0;
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);  //if op exists property lookup is performed and the function that matches is executed
        result = Number(result).toFixed(9) //fixed amount of numbers after decimal
        result = (result * 1).toString() //remove any trailing 0's
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}
function Update_Display() { //updates screen with contents of display_value
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
const keys = document.querySelector('.calculator-keys'); //monitors button clicks
keys.addEventListener('click', (event) => {
    const { target } = event; //object that represents the element that was clicked
    if (!target.matches('button')) {//exit function if element is not a button
    return;
}

if (target.classList.contains('operator')) {
    Handle_Operator(target.value);
    Update_Display();
    return;
}

if (target.classList.contains('decimal')) {
    Input_Decimal(target.value);
    Update_Display();
    return;
}
if (target.classList.contains('all-clear')) {
    Calculator_Reset(target.value);
    Update_Display();
    return;
}
    Input_Digit(target.value);
    Update_Display();
})
