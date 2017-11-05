// class Person {
// 	constructor(name, age) {
// 		this.name 	= name || 'test';
// 		this.age 	= age || '0';
// 	}
// 	getGreeting() {
// 		// return 'Hi i am ' + this.name + '!';
// 		return `i am ${this.name}! and i am ${this.age} Years old.`;
// 	}
// 	getDescription() {
// 		return `${this.name} is ${this.age} Year's old.`;
// 	}
// }

// class Students extends Person {
// 	constructor(name, age, major) {
// 		super(name, age);
// 		this.major = major;
// 	}
// 	hasMajor() {
// 		return !!this.major;
// 	}
// 	getDescription() {
// 		let description = super.getDescription();
// 		if (this.hasMajor()) {
// 			description += ` Their major is ${this.major}.`;
// 		}
// 		return description;
// 	}
// }

// class Traveler extends Person {
// 	constructor(name, age, address) {
// 		super(name, age);
// 		this.address = address;
// 	}
// 	hasAddress() {
// 		return !!this.address;
// 	}
// 	getGreeting() {
// 		let greeting = super.getGreeting();
// 		if(this.hasAddress()) {
// 			greeting += ` I'm visiting from ${this.address}.`;
// 		}
// 		return greeting;
// 	}
// }

// const me = new Person('Daniyal Khan', 25);
// console.log(me.getDescription());

// const Other = new Students('Basit Khan', 27, 'Computer Science');
// console.log(Other.getDescription());

// const empty = new Students('');
// console.log(empty.getDescription());

// const TravelerPerson = new Traveler('Asim', 22, '22 baker Street');
// console.log(TravelerPerson.getGreeting());




