const person = {
    name: 'John',
    lastName: 'Alves',
    age: 30,
    address: {
        street: 'Rua dos Bobos',
        number: 123
    }
};

// assignment of  values through destructuing 
const { name, lastName, address: {street}, ...rest} = person;
console.log(name, lastName, street, rest);