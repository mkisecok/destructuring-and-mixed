### Destructuring

1.
Assign orange to an extra variable using destructuring.
```
const fruitArray = ["watermelon", "strawberry", "orange"]
```
---
2.
Create variables for the following values from the object using destructuring.

- an extra variable for name (should hold firstName as a value)
- an extra variable  for the city
- an extra variable holding the hobbies

```
const person = {
    firstName: "John",
    lastName: "Smith",
    age: 56,
    hobbies: ["programming", "travelling", "cycling"],
    address: {
        street: "Prenzlauer Allee 6",
        city:"Berlin"
    }
}
```

----

### Test prep extras:

3.
Take the person object from the destructuring part of this exercise and create the following output
using a method.
```
[
  [ 'firstName', 'John' ],
  [ 'lastName', 'Smith' ],
  [ 'age', 56 ],
  [ 'hobbies', [ 'programming', 'travelling', 'cycling' ] ],
  [ 'address', { street: 'Prenzlauer Allee 6', city: 'Berlin' } ]
]
``` 
---

4.
Convert the following two arrays to an object. Use the method `reduce.()`
``` 
const cities = ["Berlin", "Hamburg", "Leipzig", "Duesseldorf"];
const inhabitants = ["3,645 million", "1,841 million", "587.857 thousand", "619.294 thousand"];
```
---

5.
Write a function which converts the given array,
as follows:
- replace Canada with Germany
- swap places for Brazil and Iran 
```
const myArr = ["Iran", "Brazil", "Syria", "Canada"]
```
