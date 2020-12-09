var expense;
var cost;
var totalNum = 0;
var income;
var wiggleRoom;
var snd = new Audio("clickSound.mp3");

$(document).ready(function(){
    
    $("#add").click(function() {
        var errorMsg = document.getElementById("errorMsg");
        expense = document.getElementById("expense").value;
        cost = document.getElementById("cost").value;
        cost = parseFloat(cost);
        snd.play();

        if (expense == "" || cost == ""){
            errorMsg.innerHTML = "Please make sure all fields are filled.";
        } else if(isNaN(cost)) {
            errorMsg.innerHTML = "Make sure you enter digits into the cost area";
        } else {
            errorMsg.innerHTML = "";
            createElement("h1", "Expense: " + expense, "expenseH", "expenseContainer");
            createElement("h1", "Cost: $" + cost, "", "expenseCostContainer");
            totalNum = cost + totalNum;

            total();
        
            document.getElementById("cost").value = "";
            document.getElementById("expense").value = "";
            document.getElementById("expense").focus();
        }
    });
    
    $("#clear").click(function() {
        document.getElementById("expenseContainer").innerHTML = "";
        document.getElementById("expenseCostContainer").innerHTML = "";
        document.getElementById("totalOutput").innerHTML = "";
        document.getElementById("wiggleRoomContainer").innerHTML = "";
        document.getElementById("cost").value = "";
        document.getElementById("expense").value = "";
        document.getElementById("incomeCalc").style.display = "none";
        totalNum = 0;
        snd.play();
    });
    
    $("#print").click(function() {
        snd.play();
        window.print();
    });
    
    $("#incomeSubmit").click(function() {
        income = document.getElementById("income").value;
        var errorMsg2 = document.getElementById("errorMsg2");
        if (isNaN(income)){
            errorMsg2.innerHTML = "Income entered is not a number or contains comma's."
        } else {
            snd.play();
            errorMsg2.innerHTML = "";
            document.getElementById("wiggleRoomContainer").innerHTML = "";
            wiggleRoom = income - totalNum;
            createElement("h1", "Your wiggle room is: $" + wiggleRoom, "", "wiggleRoomContainer");
            if (wiggleRoom < 0){
                createElement("h1", "Looks like you don't have enough money for all of your expenses.", "bankDivideSep", "wiggleRoomContainer");
            }
        }
    });
    
    $("#equals").click(function() {
           var calcMethod = document.getElementById("calcOptions").value;
        var num1 = document.getElementById("num1").value;
        var num2 = document.getElementById("num2").value;
        var display = document.getElementById("calcDisplay");
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        var numAdd = num1 + num2;
        var numMin = num1 - num2;
        var numDiv = num1 / num2;
        var numMul = num1 * num2;

        if (calcMethod == "addition"){
            display.innerHTML = numAdd;
        } else if (calcMethod == "subtract"){
            display.innerHTML = numMin;
        } else if (calcMethod == "divide"){
            display.innerHTML = numDiv;
        } else if (calcMethod == "multiply"){
            display.innerHTML = numMul;
        }
    });
    
    $("#clearCalc").click(function() {
       var num1 = document.getElementById("num1");
        var num2 = document.getElementById("num2");
        var display = document.getElementById("calcDisplay");
        num1.value = "";
        num2.value = "";
        display.innerHTML = 0;
    });
    
});

function total(){
    document.getElementById("totalOutput").innerHTML = "";
    createElement("h1", "Total cost: $" + totalNum, "", "totalOutput")
    document.getElementById("incomeCalc").style.display = "block";
}

function createElement(type, text, idName, locat){
    var newEl = document.createElement(type);
    
    //Text for the item(if it applies)
    var newText = document.createTextNode(text);
    
    //Adding text into the element
    newEl.appendChild(newText);
    
    //Setting ID
    newEl.setAttribute("id", idName);
    
    //Setting a location
    var element = document.getElementById(locat);
    
    //Moving to the new location
    element.appendChild(newEl);
}