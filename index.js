const person={
name: "mithu",
age: 24,
profession: "student",
isReading: "false",

address:{
    city: "kishoregsnj",
    street: "678 nagua street",
    country: "Bangladesh",
    
},
  hobbies:["listening song","reading story book", "drawing picture"]   
};
console.log(person);
console.log(person.address);
console.log(person.address.street);
console.log(person.hobbies);



const rev=[]
let number=[1,2,3,4,5,6,7,8,9];
for (i=0; i< number.length;i++) {
    const newRev= number[i]
    rev.unshift(newRev)
    
}
console.log(rev);

let newRev= []
let num=[1,2,3,4,5,6,7,8,9];
for (const element of num) {
    console.log(element);
    newRev.unshift(element)
    
}
console.log(newRev);
let newRev1=[]
let num1=[11,12,13,14,15,16,17];
for (const element of num1) {
    console.log(element);
    
    newRev1.unshift(element)
}

console.log(newRev1);

let newRev2=[]
let num2=[1,2,3,4,5,6,7,8,9];
for(let x=num2.length;x>=0;x--){
    console.log(x);
    newRev2.push(x)
}
console.log(newRev2);





