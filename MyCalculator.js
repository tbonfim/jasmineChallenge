exports.MyCalculator = 
{
	sum: function( a, b)
	{
		return a + b;
	},
	subtraction: function( a, b)
	{
		return a - b;
	},
	multiplication : function( a, b)
	{
		return a * b;
	},
	division: function( a, b)
	{
		if(b== 0)
		{
			return;
		} 
		return a / b;
	}
};