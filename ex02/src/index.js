// Only change code below this line
function* myGenerator() {
    yield insideGenerator1().next();
    yield insideGenerator2().next();
    yield insideGenerator3().next();
}

function* insideGenerator1() {
    yield;
}

function* insideGenerator2() {
    yield;
}

function* insideGenerator3() {
    yield;
}

var iterator = myGenerator();
let fifteenArray = [];
// Only change code above this line
module.exports = { fifteenArray, myGenerator}