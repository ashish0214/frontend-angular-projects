"use strict";
//stgring
let newVariable = "Ashish is the don";
newVariable = "manish";
newVariable.toLowerCase;
console.log(newVariable);
//Number
let numberofCat = 23;
numberofCat = 24;
//boolean
let exsist = true;
//tuple
//Tuples in TypeScript are a way to represent an array with a fixed number of elements whose types are known, but not necessarily the same. 
//This concept is similar to arrays, but with the added feature that the type of each element is fixed based on its position in the tuple.
let listOfelement = ["ashish", true];
// error example :-  let listOfelement:[String,boolean]=["ashish",true,"as"] it has 3 values but it is set to 2 elements only
// error example  :- let listOfStudents:[string,number]=[23,25]
//enums
//Enums are a new data type supported in TypeScript12345. They are used to define a set of named constants, i.e., a collection of related values
var users;
(function (users) {
    users["ADMIN"] = "ADMIN";
    users["USER"] = "user";
    users["SUPER_ADMIN"] = "super_admin";
})(users || (users = {}));
var statu;
(function (statu) {
    statu["OK"] = "200";
    statu["CREATED"] = "201";
    statu["NOT_FOUND"] = "204";
})(statu || (statu = {}));
//EXMAPEL:
let statuscode = statu.OK; //here we can use 
//Type Inference 
//Type inference makes shower that once a variable is assigned to a datatype by assigning the value 
//the variables considers that as the datatype and then next we can not add any other datatype
let tvShow = "ashish";
// tvShow=25  //we cannot assisgn number to the variable which is pre assigned as other variables
tvShow = "manish";
console.log("i am the don");
let aniaml = 35;
//any is used when we do not want to check the type while compiling
let anything = {
    name: "Ashish",
    age: 25,
    role: "Developer"
};
console.log(anything.name);
console.log(anything.salary);
console.log(typeof anything);
//unknown
//in unknown we can have anu datatype  but before performing any operation we have to do manual type cheacking
let value;
value = 25;
value = 'ashish';
if (typeof value == "string") {
    value.toLowerCase();
}
//void means nothing
function perform() {
    console.log("I am the don");
}
