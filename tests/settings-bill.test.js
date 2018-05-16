describe('settings-bill', function() {

  it('Update the appropriate smsTotal.', function() {
    var settingsB = SettingsFactory();
    settingsB.setSmsCost(0.75);
    settingsB.settingsLogic('sms');
    assert.equal(settingsB.getSms(), 0.75);

  });

  it('Update the appropriate callsTotal.', function() {
    var settingsB = SettingsFactory()
    settingsB.setCallCost(2.75);
    settingsB.settingsLogic('call')
    assert.equal(settingsB.getCall(), 2.75);

  });
  it('should calculate total amount of sms&call.', function() {
    var settingsB = SettingsFactory()
    settingsB.setCallCost(2.75);
    settingsB.setSmsCost(0.75);
    settingsB.settingsLogic('call')
    settingsB.settingsLogic('call')
    settingsB.settingsLogic('sms');
    settingsB.settingsLogic('sms');
    settingsB.settingsLogic('call')
    settingsB.settingsLogic('call')
    assert.equal(settingsB.getCall(), 11);

  });
  it('test if reached warning level' , function(){
    var settingsB = SettingsFactory()
    settingsB.settingsLogic('call')
    settingsB.settingsLogic('sms');
    assert.equal(settingsB.ReachedWarning(),true);
    settingsB.settingsLogic('sms');
    settingsB.settingsLogic('call')
    settingsB.settingsLogic('sms');
    settingsB.settingsLogic('sms');
    settingsB.settingsLogic('call')
    settingsB.settingsLogic('call')
    settingsB.settingsLogic('sms');

    assert.equal(settingsB.ReachedWarning(),true);

  });

  it('test if reaches critical level' , function(){
    var settingsB = SettingsFactory()
    settingsB.settingsLogic('call')
    settingsB.settingsLogic('sms');
    assert.equal(settingsB.ReachedCritical(), true);
    settingsB.settingsLogic('sms');
    settingsB.settingsLogic('call')
    settingsB.settingsLogic('sms');
    settingsB.settingsLogic('sms');
    settingsB.settingsLogic('call')
    settingsB.settingsLogic('call')
    settingsB.settingsLogic('sms');
    settingsB.settingsLogic('sms');
    settingsB.settingsLogic('call')
    settingsB.settingsLogic('call')
    settingsB.settingsLogic('call')
    settingsB.settingsLogic('call')

    assert.equal(settingsB.ReachedCritical(),true );


    });

});
