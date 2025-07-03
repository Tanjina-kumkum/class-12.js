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





