
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

const{firstName:name,hobbies}=person;

console.log(name);

const{city}=person.address;

console.log(city);

console.log(hobbies);

console.log(`=====Task3=====`);

const entries = Object.entries(person);

console.log(entries);


console.log(`=====Task4=====`);

const cities = ["Berlin", "Hamburg", "Leipzig", "Duesseldorf"];
const inhabitants = ["3,645 million", "1,841 million", "587.857 thousand", "619.294 thousand"];
function ourNewObject(par1,par2)
{
   let result = par1.reduce((o, k, i) => ({...o, [k]: par2[i]}), {});
    return result;
}


console.log(ourNewObject(cities,inhabitants));

/* Alternative  with assign
result2 = Object.assign(...cities.map((k, i) => ({[k]: inhabitants[i]})))
*/

/*Alternative with for each
let result3 = {};
cities.forEach((key, i) => result3[key] = inhabitants[i]);
 */

/*Alternative with Object.fromEntries
let result4 = {};
result4=Object.fromEntries(cities.map((a,i) => [cities[i], inhabitants[i]]));
 console.log(result4);
*/

console.log(`==========Task5========`);

const myArr = ["Iran", "Brazil", "Syria", "Canada"];

/*
let[a,b,c,d]=  myArr;
d='germany'
console.log(d);
console.log(myArr);
*/

function toNewArray(element)
{
 for(let i=0; i< element.length; i++)
 {
     let result= [element[i+1],element[i],element[i+2],element[i+3]='Germany'];
     return result
 }
 //return [element[1],element[0],element[2],element='Germany']  
}
console.log(toNewArray(myArr));
