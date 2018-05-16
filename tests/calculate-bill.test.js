describe('Calculate-bill' , function(){
    it('should calculate total amount of calls' , function(){
        assert.equal(calculateBtnClicked('call'), 2.75);

    });

    it('should calculate total amount of sms' , function(){
        assert.equal(calculateBtnClicked('sms'), 0.75);

    });
    it('should calculate total amount of sms&call' , function(){
        assert.equal(calculateBtnClicked('sms,call,call,call,sms,call'),12.5 );
    });
});
