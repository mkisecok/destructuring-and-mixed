
console.log(`=====Task1=====`);
const fruitArray = ["watermelon", "strawberry", "orange"];

let[our,...rest] = fruitArray.reverse()

console.log(our);

console.log(`=====Task2=====`);

const person = {
    firstName: "John",
    lastName: "Smith",
    age: 56,
    hobbies: ["programming", "travelling", "cycling"],
    address: {
        street: "Prenzlauer Allee 6",
        city:"Berlin"
    }

};

const{firstName}=person;

console.log(firstName);

const{city}=person.address;

console.log(city);

const{hobbies} = person;

console.log(hobbies);



