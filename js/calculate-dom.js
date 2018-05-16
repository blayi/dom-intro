//get a reference to the calculate button
var calculateBtnElement = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
var billStringElement = document.querySelector(".billString");

var billTotalElement = document.querySelector(".billTotal");


function dom() {
  var billItems = billStringElement.value;



  var round = calculateBtnClicked(billItems);
  //var roundedBillTotal = billTotal.toFixed(2);
  billTotalElement.innerHTML = round;

  if (round < 20) {
    billTotalElement.classList.remove("danger");
    billTotalElement.classList.remove("warning");
  } else if (round >= 20 && round <= 30) {
    // adding the danger class will make the text red
    billTotalElement.classList.remove("danger");
    billTotalElement.classList.add("warning");

  } else if (round >= 30) {
    billTotalElement.classList.add("danger");
  }
}




calculateBtnElement.addEventListener('click', dom);
