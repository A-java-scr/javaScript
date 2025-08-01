// singleton
//object created with constructor is singleton
//object litereals


const myS = Symbol("key1")
//to use symbol in object we use [] to call the value

const JsUser = {
    name: "Asad",
    "Full name": "Asad Amir",
    [myS] : "maykey1",
    age: 21,
    area : "Gujranwala",
    Email: "jmaher232@gmail.com",
    isLoggesin : false,
    lastLoginDays: ["Monday","Tuesday"]
}
//console.log(JsUser.Email);
//console.log(JsUser["name"]);
//console.log(JsUser["Full name"]);
//console.log(JsUser[myS]);
//console.log();

JsUser.Email = "Makrehhd@dada"
//console.log(JsUser.Email);
// Object.freeze(JsUser)           // after this no changes in object 
//JsUser.name = "Haziq"
 console.log(JsUser);


//functions
JsUser.greetings=function(){
    console.log("Hello JS User");    
}
JsUser.greetingsTwo=function(){
    console.log(`Hello JS User, ${this.name}`);      
}
// console.log(JsUser.greetings());
// console.log(JsUser.greetingsTwo());


// -------------------------------------------------------------------------

const tinderUser ={}
tinderUser.id=2222
tinderUser.isLoggesin=false

//now call the object in object
 const regularUser={
    contact: 332211,
    fullname:{
        username:{
            firstname:"asad",
            lastname: "mehar"
        }
    }
 } 
console.log(regularUser.fullname.username);
//console.log(regularUser.contact);


//combine the objects
const obj1=  {1:"a",2:"b"}
const obj2=  {3:"c",4:"d"}

//const obj3 = Object.assign({},obj1,obj2)  // to combine the arrays,objects
const obj3={...obj1,...obj2}
console.log(obj3);

const users=[
    {
        id:1,
        Pin : 44444

    },
    {
        id:2,
        Pin:2313

    },
    {
        id:3,
        Pin:2313

    }
]
users[1].Pin
//console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggesin'));

    








