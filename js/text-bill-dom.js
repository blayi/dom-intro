var billTypeText = document.querySelector(".billTypeText");
// get a reference to the textbox where the bill type is to be entered
var textTotalAddBtn = document.querySelector(".addToBillBtn");


var totalCostElem = document.querySelector(".totalOne");

var callsTotalElem = document.querySelector(".callTotalOne");
// console.log(callsTotalElem.innerHTML);

var smsTotalElem = document.querySelector(".smsTotalOne");

var textFu = TextFactory();

var textBillTotal = function() {
  // get the value entered in the billType textfield
  //console.log(billTypeEntered);

  var billTypeEntered = billTypeText.value.trim();
  textFu.textLogic(billTypeEntered);

  callsTotalElem.innerHTML = textFu.textCall().toFixed(2);
  smsTotalElem.innerHTML = textFu.textSms().toFixed(2);
  //totalCost = callsTotals + smsTotals;
  totalCostElem.innerHTML = textFu.textTotals().toFixed(2);

  //color the total based on the criteria
  if (textFu.hasReachedWarning()) {
    totalCostElem.classList.add("warning");
    // adding the danger class will make the text red

  } else if (textFu.hasReachedCritical()) {
      totalCostElem.classList.add("danger");
  }
}

textTotalAddBtn.addEventListener('click', textBillTotal);



//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
