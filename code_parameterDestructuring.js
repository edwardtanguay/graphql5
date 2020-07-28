// class Person {
// 	constructor(person) {
// 		this.firstName = person.firstName;
// 		this.lastName = person.lastName;
// 		this.age = person.age || 0;
// 	}
// }

class Person {
	constructor(id, { firstName, lastName, age = 0 }) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.age = age;
	}
}

const employee = {
	firstName: 'George',
	lastName: 'Martin'
};

const person = new Person(123, employee);
console.log(person);