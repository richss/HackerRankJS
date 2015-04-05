/**
 *  Richard S. Stansbury
 *  HackerRanks Problem - Service Lane
 *  Reference: https://www.hackerrank.com/challenges/service-lane
 *
 *  node solution.js < input.txt
 *
 */


var N, T;
var lanes;


function processData(input) {
    
    var parse_fun = function(s) { return parseInt(s,10); };

    inputArr = input.split("\n");

    //Get First Line and Split to N number of service lanes
    // and T number of test cases.
    setup = inputArr[0].split(" ");
    N = parse_fun(setup[0]);
    T = parse_fun(setup[1]);


    //Get the second line and split it into an array of lane
    // sizes

    lanes = inputArr[1].split(" ").splice(0, N).map(parse_fun);

    //Loop reading one line at a time.  Split line into entry point
    // and exit point.  Then call method findMaximumSize(entry, exit)
    // to determine maximum allowable size of automobile.
    for (var i=0; i < T; i++) {

        testcase = inputArr[i + 2].split(" ").splice(0, N).map(parse_fun);
    	console.log(findMaximumSize(testcase[0], testcase[1], lanes));
    }

} 

/**
 * Determines the minimum value between index
 * entry and exit (inclusive) of the array lanes.
 */
function findMaximumSize(entry, exit, lanes) {
    var minimum = 3;

    for (var i=entry; i <= exit; i++) {
        if (lanes[i] < minimum)
            minimum=lanes[i];
    }

	return minimum;
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

var astr = "hello";
//console.log(astr[0] + " " + astr[0]-1);
console.log(astr[0] + " " + --astr[0]);
