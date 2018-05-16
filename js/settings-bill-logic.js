var SettingsFactory = function() {

    var callSettings = 0;
    var smsSettings = 0;
    var totalS = 0;

    var callCost = 0;
    var smsCost = 0;
    var warning = 0;
    var critical = 0;

    var settingsLogic = function(billType) {

      if (billType === "sms") {
        smsSettings += smsCost;
        totalS += smsCost;


      }
      if (billType === "call") {
        callSettings += callCost;
        totalS += callCost;


      }
    }
      //getters
      var getCall = function() {
        return callSettings;
      }
      var getSms = function() {
        return smsSettings;
      }
      var getWarning = function() {
        return warning;
      }
      var getCritical = function() {
        return critical;
      }
      var getTotals = function() {
        return smsSettings + callSettings;
      }
        //setters

      var setCallCost = function(value) {
        callCost = parseFloat(value);
      }
      var setSmsCost = function(value) {
        smsCost = parseFloat(value);
      }
      var setWarning = function(value) {
        warning = parseFloat(value);
      }
      var setCritical = function(value) {
        critical = parseFloat(value);
      }

      var ReachedWarning = function() {
       return getTotals() >= getWarning();
      }

      var ReachedCritical = function() {
      return  getTotals() >=getCritical();
      }

      return {
        settingsLogic,
        getCall,
        getSms,
        getWarning,
        getCritical,
        getTotals,
        setCallCost,
        setSmsCost,
        setWarning,
        setCritical,
        ReachedWarning,
        ReachedCritical

      }
    }
