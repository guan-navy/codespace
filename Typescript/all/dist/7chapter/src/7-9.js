var CommercialBank = (function () {
    function CommercialBank(name, address) {
        this.address = 'beijjing';
        this.name = 'wuhan';
        this.name = name;
        this.address = address;
    }
    CommercialBank.prototype.loan = function () {
        console.log('贷款');
    };
    return CommercialBank;
}());
export default CommercialBank;
var CommercialBankInstance = CommercialBank;
var cbIntance = new CommercialBankInstance('wuhan', 'beijing');
console.log(cbIntance);
