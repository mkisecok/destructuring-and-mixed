
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

console.log(`=====Task3=====`);

const entries = Object.entries(person);

console.log(entries);


console.log(`=====Task4=====`);

const cities = ["Berlin", "Hamburg", "Leipzig", "Duesseldorf"];
const inhabitants = ["3,645 million", "1,841 million", "587.857 thousand", "619.294 thousand"];

result = cities.reduce((o, k, i) => ({...o, [k]: inhabitants[i]}), {})

console.log(result);

/* Alternative  with assign
result2 = Object.assign(...cities.map((k, i) => ({[k]: inhabitants[i]})))
*/

/*Alternative with for each
let result3 = {};
cities.forEach((key, i) => result3[key] = inhabitants[i]);
 */

/*Alternative with Object.fromEntries
let result4 = {};
Object.fromEntries(cities.map((_, i) => [cities[i], inhabitants[i]]));
 */



