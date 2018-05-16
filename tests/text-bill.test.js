describe('text/radio-bill' , function(){

    it('Update the appropriate smsTotal and the global total when the ADD button in pressed.' , function(){
      var textB = TextFactory()
      textB.textLogic('sms')
      assert.equal(textB.textSms(), 0.75);

    });

    it('Update the appropriate callsTotal and the global total when the ADD button in pressed.' , function(){
      var textB = TextFactory()
      textB.textLogic('call')
      assert.equal(textB.textCall(), 2.75);

      });

      it('Update the appropriate callsTotal and the global total when the ADD button in pressed.' , function(){
        var textB = TextFactory()
        textB.textLogic('call')
        textB.textLogic('sms')
        assert.equal(textB.textTotals(), 3.5);

        });

      it('test test warning level' , function(){
        var textB = TextFactory()
        textB.textLogic('call')
        textB.textLogic('sms')
        assert.equal(textB.hasReachedWarning(), false);
        textB.textLogic('call')
        textB.textLogic('sms')
        textB.textLogic('call')
        textB.textLogic('sms')
        textB.textLogic('call')
        textB.textLogic('sms')
        textB.textLogic('call')
        textB.textLogic('sms')
        textB.textLogic('call')
        textB.textLogic('call')
        textB.textLogic('call')
        textB.textLogic('call')
        textB.textLogic('call')
        textB.textLogic('sms')
        assert.equal(textB.hasReachedWarning(), true);

        });

      it('test test critical level' , function(){
        var textB = TextFactory()
        textB.textLogic('call')
        textB.textLogic('sms')
        assert.equal(textB.hasReachedWarning(), false);
        textB.textLogic('call')
        textB.textLogic('sms')
        textB.textLogic('call')
        textB.textLogic('sms')
        textB.textLogic('call')
        textB.textLogic('sms')
        textB.textLogic('call')
        textB.textLogic('sms')
        textB.textLogic('call')
        textB.textLogic('call')
        textB.textLogic('call')
        textB.textLogic('call')
        textB.textLogic('call')
        textB.textLogic('sms')
        textB.textLogic('call')
        textB.textLogic('sms')
        textB.textLogic('call')
        textB.textLogic('sms')
        textB.textLogic('call')
        textB.textLogic('sms')
        textB.textLogic('call')
        textB.textLogic('sms')
        textB.textLogic('call')
        textB.textLogic('call')
        textB.textLogic('call')
        textB.textLogic('call')
        textB.textLogic('call')
        textB.textLogic('sms')
        assert.equal(textB.hasReachedCritical(), true);

        });

});
