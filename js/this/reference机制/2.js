var testVar = 'This is a test variable';

function testFunction() {
    console.log(this);
    
    console.log(this.testVar);
}

testFunction();

console.log(111);
