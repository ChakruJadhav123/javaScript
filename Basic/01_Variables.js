const accountId =123
let accountEmail = "chakr@gmail.com"  
var accoutnPassword = "12345"  //it is use within a scope

/**
 * prefer not use to use var
 * becuase of issue in blcok scope and functional scope
 */
let accountState ; //if we declare variable without a value it stores undefined value
accountCity = "jaipur" //it is not prefer to use

//accountId = 2  Single line key word we cannot change the value of constant
accountEmail = "hc@gmail.com"
accountPassword = "12121"
accountCity ="Pune"
//console.log(); is for printing the value
console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);

//If we want to print all in tabular format we can use
//console.table([]);

console.table([accountId,accountEmail,accoutnPassword,accountCity,accountState])