


function processData(input) {
	 inputArr = input.split("\n");

	 var T = parseInt(inputArr, 10);

	 for (var i=0; i < T; i++) {
	 	console.log(makePalendrome(inputArr[i+1]));
	 }
}

/**
 * Determines the number of operations to turn
 * into a palendrome.
 *  
 * I cheat and simply find the difference between
 * characters using their char code.
 *
 * I return the sum of all deltas.
 */
function makePalendrome(str) {
	
	var left;
	var right;
	var mid = Math.floor(str.length/2);

	var numOps = 0;

	if (str.length % 2 == 0) {
		left = mid-1;
		right = mid;
	}
	else {
		left = mid-1;
		right = mid+1;
	}

	while (left >= 0 && right < str.length) {
		numOps+= Math.abs(str.charCodeAt(left) - str.charCodeAt(right));
		left--;
		right++;
	}

	return numOps;
}


//Code from: https://www.hackerrank.com/challenges/service-lane
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
