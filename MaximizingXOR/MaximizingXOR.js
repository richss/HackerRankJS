/*

Author:  Richard S. Stansbury

This program finds the maximum XOR value between two variables a and b whose
values are less than left and right boundaries and L <= A <= B <= R

References: https://www.hackerrank.com/challenges/maximizing-xor

*/

process.stdin.resume();
process.stdin.setEncoding('ascii');

var __input_stdin = "";
var __input_stdin_array = "";
var __input_currentline = 0;

process.stdin.on('data', function (data) {
    __input_stdin += data;
});
/*
 * Complete the function below.
 */
function maxXor(l, r) {

	var a,b, xorVal;
	var maximum = 0;

	for (a=l; a <= r; a++) {
		for (b=r; b>=a; b--) {
			//console.log(a + " " + b);
			xorVal = a ^ b;
			if (xorVal > maximum) {
				maximum = xorVal;
			}
		}
	}
	return maximum;

}

process.stdin.on('end', function () {
    __input_stdin_array = __input_stdin.split("\n");
    var res;
    var _l = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
    __input_currentline += 1;
    
    var _r = parseInt(__input_stdin_array[__input_currentline].trim(), 10);
    __input_currentline += 1;
    
    res = maxXor(_l, _r);
    process.stdout.write(""+res);
    
});