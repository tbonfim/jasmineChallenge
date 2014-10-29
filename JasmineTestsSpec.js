describe("Challenge test's", function()
{	
	var MyCalculator = require('./MyCalculator.js').MyCalculator;

	it("sum 2 + 2 SHOULD be 4" , function(){
		expect(MyCalculator.sum(2, 2)).toBe(4);
	});

	it("sum 2 + 2 + 3 + 1 SHOULD be 8" , function(){
		expect(MyCalculator.sum(MyCalculator.sum(2, 2), MyCalculator.sum(1, 3))).toBe(8);
	});

	it("subtraction between 2 and 2 SHOULD be 0" , function(){
		expect(MyCalculator.subtraction(2,2)).toBe(0);
	});

	it("subtraction between 3 and 4 SHOULD be -1" , function(){
		expect(MyCalculator.subtraction(3,4)).toBe(-1);
	});

	it("multiplication between 3 and 2 SHOULD be 6" , function(){
		expect(MyCalculator.multiplication(3,2)).toBe(6);
	});

	it("multiplication between 3, 2 and 4 SHOULD be 24" , function(){
		expect(MyCalculator.multiplication(MyCalculator.multiplication(3,2), 4)).toBe(24);
	});

	it("division between 2 and 2 SHOULD be 1" , function(){
		expect(MyCalculator.division(2,2)).toBe(1);
	});

	it("division between 6 and 2 SHOULD be 3" , function(){
		expect(MyCalculator.division(6,2)).toBe(3);
	});
}); 