
function calculateBtnClicked(billItems) {
  var billTotal = 0;
var billString = billItems.split(",");


  //loop over all the bill items
  for (var i = 0; i < billString.length; i++) {
    var billItem = billString[i].trim();

    if (billItem === "call") {
      billTotal += 2.75;
    }

    else if (billItem === "sms") {
      billTotal += 0.75;
    }
  }
  return billTotal.toFixed(2);
}
