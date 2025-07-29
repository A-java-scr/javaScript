// dates
let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());
console.log(typeof mydate);

let mytampstamp = Date.now()

console.log(mytampstamp);
console.log(mydate.getTime());
console.log(Math.floor(Date.now()/1000));

let newdate= new Date()
console.log(newdate);
console.log(newdate.getHours());

newdate.toLocaleString('default',{
    weekday: "long"
})






