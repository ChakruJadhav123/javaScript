//Stack(), Heap()
//datatypes are based on memory allocation
//primitve datatypes-> call by value(stirng, number, boolean, null, undefined, symbol, BigInt)
//-->Stack Memory

//Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

let myYoutubeName="Tech"
let anotherName = myYoutubeName
anotherName = "chaiaurCode"
console.log(anotherName);
console.log(myYoutubeName);


let userOne ={
    email : "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email ="chakru@gmail.com"  // we can access the object by . operator
console.log(userOne.email);
console.log(userTwo.email);