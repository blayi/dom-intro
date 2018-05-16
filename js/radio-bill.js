var billItemTypeRadio = document.querySelector(".billItemTypeRadio");
// get a reference to the textbox where the bill type is to be entered
var radioBillAddBtn = document.querySelector(".radioBillAddBtn");


var totalCostElement = document.querySelector(".totalTwo");

var callsTotalElement = document.querySelector(".callTotalTwo");
// console.log(callsTotalElem.innerHTML);

var smsTotalElement = document.querySelector(".smsTotalTwo");

var radioFu = TextFactory();

function radioBillTotal() {
  // get the value entered in the billType textfield
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn) {
    var billItemType = checkedRadioBtn.value
    radioFu.textLogic(billItemType);

    // billItemType will be 'call' or 'sms'
  }

  callsTotalElement.innerHTML = radioFu.textCall().toFixed(2);

  smsTotalElement.innerHTML = radioFu.textSms().toFixed(2);
  //var totalCost = callsTotal + smsTotal;
  totalCostElement.innerHTML = radioFu.textTotals().toFixed(2);

  //if ( radioFu.hasReachedWarning() ) {
  if (radioFu.hasReachedWarning()) {
    totalCostElement.classList.add("warning");
    // adding the danger class will make the text red

  } else if (radioFu.hasReachedCritical()) {
    totalCostElement.classList.add("danger");
  }
}
radioBillAddBtn.addEventListener('click', radioBillTotal);



//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
