//stgring
let newVariable: string= "Ashish is the don"
newVariable="manish"
newVariable.toLowerCase
console.log(newVariable)

//Number

let numberofCat: number=23
numberofCat=24

//boolean
let exsist: boolean =true

//tuple
//Tuples in TypeScript are a way to represent an array with a fixed number of elements whose types are known, but not necessarily the same. 
//This concept is similar to arrays, but with the added feature that the type of each element is fixed based on its position in the tuple.
let listOfelement:[String,boolean]=["ashish",true]
// error example :-  let listOfelement:[String,boolean]=["ashish",true,"as"] it has 3 values but it is set to 2 elements only
// error example  :- let listOfStudents:[string,number]=[23,25]

//enums
//Enums are a new data type supported in TypeScript12345. They are used to define a set of named constants, i.e., a collection of related values
enum users{
    ADMIN ="ADMIN",
    USER ="user",
    SUPER_ADMIN= "super_admin"
}

enum statu{
    OK="200",
    CREATED= "201",
    NOT_FOUND="204"
}
//EXMAPEL:

let statuscode=statu.OK//here we can use 


//Type Inference 
//Type inference makes shower that once a variable is assigned to a datatype by assigning the value 
//the variables considers that as the datatype and then next we can not add any other datatype
let tvShow ="ashish"
// tvShow=25  //we cannot assisgn number to the variable which is pre assigned as other variables
tvShow="manish"

console.log("i am the don")

let aniaml:number=35

//any is used when we do not want to check the type while compiling
let anything :any ={
    name:"Ashish",
    age:25,
    role:"Developer"
}

console.log(anything.name)
console.log(anything.salary)
console.log(typeof anything)


//unknown
//in unknown we can have anu datatype  but before performing any operation we have to do manual type cheacking
let value:unknown
value=25
value='ashish'
if(typeof value=="string"){
    value.toLowerCase();
}

//void means nothing
function perform():void{
    console.log("I am the don")
    
}

//interface
//an interface is a powerful way to define the structure of an object. Interfaces help with enforcing the shape of data and defining contracts for classes and other complex types.
//It can have fileds and methods we have to provide the datatype 
//? indecates that it is optional
//readonly is used when u dont want to change the value others can read it 
interface User{
    name:string,
    age:number,
    readonly email?:string
}
function performOp(obj:User):void{
    //obj.email="namnsj"  this is not possible because it is readonly
console.log(obj.age)
}

performOp({name:"ashish",age:24,email:"asshidh"});


//interface 
//extending of interface
interface newUser{
    name:string
}

interface Admin extends newUser{
    age: number
    action(user:User):string //function
}

const person:Admin={
    name:"ashish",
    age:25,
    action(user):string{
        return "ashish"
    }
}


//type
//type is used to define custom types, which can represent a variety of data structures
//type is like allias to provide different manes to the primitive type

//1 in this providing different name to string
type person =string

const user:person="name"

//2 union  
//type can define union types, which allow a variable to hold values of multiple specified types. This is particularly useful for scenarios where a variable can be one of a set of types.

type agrs=string|number

const volume:agrs =25

//in this example the volume can have string or number datatype

//3 intersection
//this is when you want to combine the data 
//which combine multiple types into one
type Person ={
    name:string
}

type employee={
    empDetails:string
}

type staff=Person & employee

const details:staff={
    name:"ashish",
    empDetails: "done"
}


//tuple type

type many=[number,string,number]

const formula:many=[23,"ashsh",34];


//array is for storing data in consicutive memory location

//1st way
let arr: number[]=[24,34,34,34]

//2nd way
let arraylist:Array<number>=[23,34,78,3,34,32]


//. Tuples (Fixed-Length Arrays)
//Tuples are a special type of array with a fixed length and specified types for each position. They are useful when the structure and types of elements are fixed.

let fixed:[number,string,boolean]=[23,"ashish",true]

//inthis the datatrype should be in same order and size should also be same



//Class and object in type script

//class creation
//class can have fileds and methods 

class Machine{

    //access modifiers as same as that the java
    public brand
    private element
    protected cups

    //readonly is like final once initialized it cannot be changed example
    public readonly PI=3.142

    //constructor is used for initialization of the fields 

    constructor(brand:string,element:string,cups:number){
        this.brand=brand
    this.element=element
    this.cups=cups
    }

    //geters and setter 
    //get keyword is used for getter and it should return any thing it can not be void 
    //set keyword is used for the setter and it aways should accept some parameters

    get brandName(){
        return this.brand
    }

    set brandName(brand:string){
        this.brand=brand
    }

    //method example
    operation(){
        console.log("It is to perfoem some operation")
    }

    //static keyword is used when you dont want to create a instance but want to access 
    //field or the methods 
    //it is used on that content that are always same for saving memory .
    static randomNumberGerneartion(){
        return Math.random()*1
    }

    
}

    //object creation 
    //it is done by using new  keyword and same as java
let b1=new Machine("coffeday","beans",3)

Machine.randomNumberGerneartion()



//abstract class  is a type of class that can ahave abstarct method and field and concretae methods also
//abstract method are those methods that that the sub class will provid ethe implementation of it

abstract class Payment{
    abstract name:string
    abstract process(amount: number):void
    move(){
        console.log("Welcome to payment gateway")
    }
}

//exmaple

class paytm extends Payment
{
    name="money"

    process(amount: number): void {
        console.log("Payment done")
    }
}


//function 

//function types

function sum(a:number,b:number){
    console.log("done")
}

function example(a:number,ab:(val:number)=>void){
    console.log(ab)
}

example(23,(2)=>{console.log("hello")})

//Rest parameters 
//used when you have multile parameters the we can combine it it ti one it self 
//using the ... which mean rest/spred operator

function sumation(...arr:number[]){
    console.log("hellow")
}

sumation(2,32,3,2,2,3)

//optionals and defaulter value for a parametr
//functiona overloading


//optinal operator
function zoo(a?:string):void{

}

//default example used
function zoo(a:number=25,b:string):string{
return "ashuish"
}


import { pay,paypal } from "./Payment"
import Machine1 from "./party"

pay(25)
paypal(56)