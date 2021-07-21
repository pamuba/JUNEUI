//test suites
xdescribe('calculator.js', function(){

    let calculator;
    let calculator2;
    let calculator3;
    //SET UP FUNCTIONS
    beforeAll(function(){
        //
    })
    beforeEach(function(){
        calculator = new Calculator();
        calculator2 = new Calculator();
        calculator3 = undefined;
    })



    //individual tests
    xit("should add numbers to toal", function(){
        //5+10
        calculator.add(5);
        calculator.add(10)
        //expect total to be 15
        expect(calculator.total).toBe(15)
    });
    xit("should subtract numbers to toal", function(){
        //5+10
        calculator.add(5);
        calculator.subtract(10)
        //expect total to be 15
        expect(calculator.total).toBe(-5)
    });
    it("should multiply numbers to toal", function(){
        //5+10
        calculator.add(5);
        calculator.multiply(10)
        //expect total to be 15
        expect(calculator.total).toBe(50)
    });
    it("should divide numbers to toal", function(){
        //5+10
        calculator.add(5);
        calculator.divide(10)
        //expect total to be 15
        expect(calculator.total).toBe(.5)
    });
    it('should initialze total', function(){
        expect(calculator.total).toBe(0)
    });
    it('has consructor', function(){
        // calculator.total = 5;
        expect(calculator).toBeTruthy();
        expect(calculator2).not.toBeFalsy();
        expect(calculator3).toBeFalsy();
        expect(calculator).toEqual(calculator2)
    });
    it('has common oprations', function(){
        expect(calculator.add).toBeDefined();
        expect(calculator.sum).toBeUndefined();
    });
    it('can overwrite total', function(){
        calculator.total = null;
        expect(calculator.total).toBeNull();
        expect(calculator.constructor.name).toContain("lator");
    });
    it('doesnt have NaN', function(){
        calculator.total = 20;
        calculator.multiply('a')
        expect(calculator.total).toBeNaN();
    });
    it('handles divide by 0', function(){
        calculator.total = 10;
        expect(function(){calculator.divide(0)}).toThrow()
        expect(function(){calculator.divide(0)}).toThrowError(Error)
        expect(function(){calculator.divide(0)}).toThrowError(Error, 'Cannot divide by zero')
    });
    it('return total', function(){
        calculator.total = 50

        expect(calculator.add(20)).toBe(70);
        //will pass if it matches sub part
        expect(calculator.total).toMatch(/-?\d/)
        expect(typeof calculator.total).toMatch('number')
        expect(12).toEqual(jasmine.anything())
    })

    afterEach(function(){
        calculator = null;
        calculator2 = null;
        calculator3 = null;
    })

})