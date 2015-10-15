if (typeof require !== 'undefined'){
    var expect = require('chai').expect;
}else{
    var expect = chai.expect;
}

describe('test setup', function() {
    it('should work', function() {
        expect(true).to.be.true;
    });
});

describe('test setup two', function() {
    it('should work two', function() {
        expect(true).to.be.true;
    });
});

describe('test setup three', function() {
    it('should work three', function() {
        expect(false).to.be.false;
    });
});

describe('test setup four', function() {
    it('should work four', function() {
        expect(false).to.be.false;
    });
});

describe('test setup five', function() {
    it('should work five', function() {
        expect(false).to.be.false;
    });
});






