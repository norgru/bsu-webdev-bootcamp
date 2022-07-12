/*
    CalculatorButton
        operator

    CalculatorButtns[]

    var calculatorButtonsContainerElement = document.querySelector("#calculator.buttons");

    foreach object in calculatorButtonsArray
        create a button child in calculatorButtonsContainerElement
        add object.operator to button child
        button onclick = calculatorButtonOnClick(object)

*/


var calculatorButtonsArray = [
    {
        operator: "1",
        onClick: (currentValue, operator) => {
            return currentValue.concat(operator);
        }
    },   
    {
        operator: "=",
        onClick: (currentValue) => {
            //calculate string. todo
            return currentValue + " w w w";
        }
    } 
]

var display = "";

const calculatorButtonOnClick = (button) => {
    console.log(button.operator, "has been clicked");
    var newValueFromOnClick = button.onClick(display, operator);
    display = newValueFromOnClick;  
}


document.addEventListener("DOMContentLoaded", function() {

    console.log("hello");
    // code...
});