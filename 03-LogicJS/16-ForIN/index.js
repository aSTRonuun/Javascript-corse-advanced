const person = {
    name: 'John',
    age: 30
}

// When we use for..in loop, it will return the index of the object.
for (let atribut in person) {
    console.log(atribut, person[atribut]);
}