/**
 * Наслідування класів
 *
 *  - extends
 *  - Конструктор дочірнього класу (super)
 *  - Методи дочірнього класу
 */

// class User {
//   constructor(firstname, lastname, phoneNumber, email) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.phoneNumber = phoneNumber;
//     this.email = email;
//   }

//   showInfo() {
//     console.log(`FullName: ${this.firstname} ${this.lastname}`);
//     console.log(`Email: ${this.email}`);
//     console.log(`PhoneNumber: ${this.phoneNumber}`);
//   }
// }

// class Student extends User {
//   constructor(firstname, lastname, phoneNumber, email, group) {
//     super(firstname, lastname, phoneNumber, email);
//     this.group = group;
//   }

//   showFullName() {
//     console.log(this.firstname, this.lastname);
//   }
// }

// const student = new Student(
//   'Vasya',
//   'Romanov',
//   '+3805123123',
//   'Vasya@gmail.com',
//   '121-24-1',
// );

// console.log(student);
// student.showInfo();

//!=========================================

// class Teacher {
//   constructor(firstname, lastname, phoneNumber, email, salary, expirience) {
//     this.firstname;
//   }
// }

//!=========================================

// class Animal {
//   constructor(breed, color, age) {
//     this.breed = breed;
//     this.color = color;
//     this.age = age;
//   }

//   sleep() {
//     console.log('Zzzzz');
//   }
//   eat() {
//     console.log('Ням ням ням');
//   }
// }

// class Dog extends Animal {
//   constructor() {
//     super();
//   }
//   sayWoof() {}
// }

// class Cat extends Animal {
//   constructor() {}
//   sayMeow() {}
// }

// class Bird extends Animal {
//   constructor() {}
//   fly() {}
// }

// const dog = new Dog();
// const cat = new Cat();
// const bird = new Bird();

// dog.sayWoof();
// cat.sayMeow();
// bird.fly();
//!=========================================
