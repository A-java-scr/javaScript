//Arrays
const myArr = [2,3,4,5,6]
//console.log(myArr[2]);

//Array Methods
//myArr.push(6)
//myArr.push(7)
//myArr.pop()

//myArr.unshift(2)
myArr.shift()

// console.log(myArr.includes(6));
// console.log(myArr.indexOf(10));

const newAryy = myArr.join()
//console.log(typeof newAryy);
// console.log(myArr);

// slice and splice
//console.log("A",myArr);
const myn1 = myArr.slice(1,4)
//console.log(myn1);
const myn2 = myArr.splice(1,4)
// console.log(myn1);
//console.log(myn2);

// =====================================================
const marvel_heros = ["SpiderMan","IronMan"]
const Dc_heros = ["Batman","Flash"]

const all_heros= marvel_heros.concat(Dc_heros)
// console.log(all_heros);

const all_new_heros=[...marvel_heros,...Dc_heros]
console.log(all_new_heros);

//imp
console.log(Array.isArray("Asad"))
console.log(Array.from("Asad"));
console.log(Array.from({name: "Asad"})); // interesting case

let score=100
let score1=200

console.log(Array.of(score,score1));




