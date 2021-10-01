// Only change code below this line
function* myGenerator() {
    yield* [1, 2, 3, 4, 5];
    yield* 'Arena';
    yield* arguments(6,7,8);
}

let generatorArray = [];
for(var i=1;1<3;i++) {
    generatorArray;
}
// Only change code above this line
module.exports = { generatorArray, myGenerator };