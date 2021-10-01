let myArr = [];
// Only change code below this line
function* multiplication(x) {
    for(var i = 1; i < x; i++) {
        yield x * 2;
        myArr.push(x)
    }
} 
let num = multiplication(3);

for(var i = 1; i < 4; i++) {
    num.next();
}


console.log(multiplication(3).next());
console.log(myArr);
// Only change code above this line
module.exports = multiplication;