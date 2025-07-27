// stack and heap
// stack used in primitive type databse and create copy of it
// heap used in non primitive datatypes changes in original
let myyoutubeName = "asad"
let anotherName = myyoutubeName
anotherName = "chayaurCode"
 console.log(anotherName);
 console.log(myyoutubeName);

 let userOne = {
    email : "asad@gift",
    upid : "2313@fdna"
 }
 
 
 let userTwo = userOne
 userTwo.email = "jmaher23@gsas"
console.log(userOne);

 console.log(userTwo);
 