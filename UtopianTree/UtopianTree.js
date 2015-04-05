'use strict';

function growTree(cycles) {
	var height = 1;
	for (var i=0; i < cycles; i++) {
		if (i%2==0) {
			height *=2;
		}
		else {
			height++;
		}
	}
	return height;
}

function processData(input) {
	var parse_fun = function (s) { return parseInt(s, 10); };
	var lines = input.split('\n');
	var T = parse_fun(lines.shift());
	var data = lines.splice(0, T).map(parse_fun);

	for (var i=0; i<T; i++) {
		//console.log(data[i]);
		console.log(growTree(data[i]));
	}
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function (input) { _input += input; });
process.stdin.on("end", function () { processData(_input); });
