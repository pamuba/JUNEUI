describe('main.js', function(){
    describe('calculate()', function(){
        it('validates expression1', function(){
            spyOn(window, 'updateResult').and.stub();

            calculate('a+3');

            expect(window.updateResult).toHaveBeenCalled()
            expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized')
            expect(window.updateResult).toHaveBeenCalledTimes(1)
        });
        it('validates expression2', function(){
            spyOn(window, 'updateResult');

            calculate('3+a');

            expect(window.updateResult).toHaveBeenCalled()
            expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized')
        });
        it('validates expression3', function(){
            spyOn(window, 'updateResult');

            calculate('4_3');

            expect(window.updateResult).toHaveBeenCalled()
            expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized')
        });
        it('call to add', function(){
            // const calculator = new Calculator()
            // spyOn(calculator, 'add');
            // calculate('3+4')
            // expect(calculator.add).toHaveBeenCalledTimes(2)

            // spyOn(Calculator.prototype, "add");
            // calculate('2+2')
            // expect(Calculator.prototype.add).toHaveBeenCalledTimes(2);

            const spy = spyOn(Calculator.prototype, "add");
            calculate('3+5')
            expect(spy).toHaveBeenCalledTimes(2);
            expect(spy).toHaveBeenCalledWith(5);
            expect(spy).toHaveBeenCalledWith(3);
        });

        it('call to subtract', function(){
            const spyAdd = spyOn(Calculator.prototype, "add");
            const spySub = spyOn(Calculator.prototype, "subtract");
            
            calculate('3-5')

            expect(spyAdd).toHaveBeenCalledTimes(1);
            expect(spySub).toHaveBeenCalledTimes(1);
            expect(spyAdd).toHaveBeenCalledWith(3);
            expect(spySub).toHaveBeenCalledWith(5);   
        });
        it('calls updateResult using callThrough', function(){
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, "multiply").and.callThrough();

            calculate('5*5')

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(25);
        })
        it('calls updateResult using callFake', function(){
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, "multiply").and.callFake(function(){
                return 50;
            });

            calculate('5*5')

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(50);
        });
        it('calls updateResult using return value', function(){
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, "multiply").and.returnValue("whatever multiply returns");

            calculate('5*5')

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith("whatever multiply returns");
        })
        it('calls updateResult using return values', function(){
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, "add").and.returnValues(null, "whatever add returns");

            calculate('5+5')

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith("whatever add returns");
        });
        it('doent handle errors', function(){
            spyOn(Calculator.prototype, "multiply").and.throwError("Some Error");
            expect(function(){calculate('5*5')}).toThrowError('Some Error')
        })
    })
})