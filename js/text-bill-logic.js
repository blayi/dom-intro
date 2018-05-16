var TextFactory = function(billTypeEntered) {

  var callsTotals = 0;
  var smsTotals = 0;
  var totalCost = 0;



  var bill = billTypeEntered;

  var textLogic = function(bill) {

    if (bill === "call") {

      callsTotals += 2.75;

    } else if (bill === "sms") {
      smsTotals += 0.75;
    }
  }

  var hasReachedWarning = function() {
    return textTotals() >= 30 && textTotals() <= 50
  }

  var hasReachedCritical = function() {
    return textTotals() > 50
  }

  var textCall = function() {
    return callsTotals;
  }
  var textSms = function() {
    return smsTotals;
  }
  var textTotals = function() {
    return smsTotals + callsTotals;
  }
  return {
    textLogic,
    textCall,
    textSms,
    textTotals,
    hasReachedWarning,
    hasReachedCritical
  }

}
