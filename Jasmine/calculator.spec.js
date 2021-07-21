//test suites
describe('calculator.js', function(){
    //individual tests
    xit("should add numbers to toal", function(){
        const calculator = new Calculator();
        //5+10
        calculator.add(5);
        calculator.add(10)
        //expect total to be 15
        expect(calculator.total).toBe(15)
    });
    xit("should subtract numbers to toal", function(){
        const calculator = new Calculator();
        //5+10
        calculator.add(5);
        calculator.subtract(10)
        //expect total to be 15
        expect(calculator.total).toBe(-5)
    });
    it("should multiply numbers to toal", function(){
        const calculator = new Calculator();
        //5+10
        calculator.add(5);
        calculator.multiply(10)
        //expect total to be 15
        expect(calculator.total).toBe(50)
    });
    it("should divide numbers to toal", function(){
        const calculator = new Calculator();
        //5+10
        calculator.add(5);
        calculator.divide(10)
        //expect total to be 15
        expect(calculator.total).toBe(.5)
    });
    it('should initialze total', function(){
        const calculator = new Calculator();
        expect(calculator.total).toBe(0)
    });
    it('has consructor', function(){
        const calculator = new Calculator();
        // calculator.total = 5;
        const calculator2 = new Calculator();
        const calculator3 = undefined;

        expect(calculator).toBeTruthy();
        expect(calculator2).not.toBeFalsy();
        expect(calculator3).toBeFalsy();
        expect(calculator).toEqual(calculator2)
    });
    it('has common oprations', function(){
        const calculator = new Calculator();
        expect(calculator.add).toBeDefined();
        expect(calculator.sum).toBeUndefined();
    });
    it('can overwrite total', function(){
        const calculator = new Calculator();
        calculator.total = null;
        expect(calculator.total).toBeNull();
        expect(calculator.constructor.name).toContain("lator");
    });
    it('doesnt have NaN', function(){
        const calculator = new Calculator();
        calculator.total = 20;
        calculator.multiply('a')
        expect(calculator.total).toBeNaN();
    })
})