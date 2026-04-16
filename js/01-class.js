/**
 * Классы
 *  - ООП, Клас, екземпляр
 *  - Оголошення класу
 *  - Конструктор класу
 *  - Методи класу
 *  - Прототип екземпляру
 *  - Приватні властивості
 *  - Геттери і сеттери
 *  - Статичні властивості
 */

// const x = 10;
// x.toString();

// const str = 'Hello world';

// str.slice();
// str.includes();
// str.includes();

//!=========================================

// const x = 10;
// const y = 20;

// function showX() {
//   console.log(x);
// }

// function showY() {
//   console.log(y);
// }

//!=========================================

// const user1 = {
//   name: 'Vasya',
//   age: 25,
//   city: 'Dnipro',
//   country: 'Ukraine',

//   showName() {
//     console.log(this.name);
//   },
//   showAge() {
//     console.log(this.age);
//   },
//   showCity() {
//     console.log(this.city);
//   },
//   showCountry() {
//     console.log(this.country);
//   },
//   showInfo() {
//     this.showName();
//     this.showAge();
//     this.showCity();
//     this.showCountry();
//   },
// };

// const user2 = {
//   name: 'Vasya',
//   age: 25,
//   city: 'Dnipro',
//   country: 'Ukraine',

//   showName() {
//     console.log(this.name);
//   },
//   showAge() {
//     console.log(this.age);
//   },
//   showCity() {
//     console.log(this.city);
//   },
//   showCountry() {
//     console.log(this.country);
//   },
//   showInfo() {
//     this.showName();
//     this.showAge();
//     this.showCity();
//     this.showCountry();
//   },
// };

// const user3 = {
//   name: 'Vasya',
//   age: 25,
//   city: 'Dnipro',
//   country: 'Ukraine',

//   showName() {
//     console.log(this.name);
//   },
//   showAge() {
//     console.log(this.age);
//   },
//   showCity() {
//     console.log(this.city);
//   },
//   showCountry() {
//     console.log(this.country);
//   },
//   showInfo() {
//     this.showName();
//     this.showAge();
//     this.showCity();
//     this.showCountry();
//   },
// };

// const user4 = {
//   name: 'Vasya',
//   age: 25,
//   city: 'Dnipro',
//   country: 'Ukraine',

//   showName() {
//     console.log(this.name);
//   },
//   showAge() {
//     console.log(this.age);
//   },
//   showCity() {
//     console.log(this.city);
//   },
//   showCountry() {
//     console.log(this.country);
//   },
//   showInfo() {
//     this.showName();
//     this.showAge();
//     this.showCity();
//     this.showCountry();
//   },
// };

//!=========================================
// const arr = new Array(1, 2, 3);
// console.log(arr);

//!=========================================
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//     this.country = 'Ukraine';
//   }

//   showName() {
//     console.log(this.name);
//   }

//   showAge() {
//     console.log(this.age);
//   }

//   showCountry() {
//     console.log(this.country);
//   }

//   showInfo() {
//     this.showName();
//     this.showAge();
//     this.showCountry();
//   }
// }

// const user1 = new User('Vasya', 25);
// const user2 = new User('Roman', 25);
// const user3 = new User('Anton', 25);
// const user4 = new User('Borys', 25);

// user1.showName();
//!=========================================

// function createUser() {
//   // this = {}
//   this.name = 'Vasya';
//   console.log(this);
// }

// // createUser.call({});
// new createUser();

//!=========================================

// class User {
//   #discount = 10;
//   #balance;
//   #age;

//   constructor(username, age) {
//     this.username = username;
//     this.#balance = 0;
//     this.#age = age;
//   }

//   get balance() {
//     return this.#balance;
//   }

//   set balance(newBalance) {
//     this.#balance = newBalance;
//   }

//   get age() {
//     return this.#age;
//   }

//   set age(newAge) {
//     if (newAge > 0 && newAge < 99) {
//       this.#age = newAge;
//     }
//   }

//   get discount() {
//     return this.#discount;
//   }

//   get #test() {}

//   #showInfo() {}
// }

// const user = new User('Vasya', 25);

// user.age = 25;
// user.age = 55;
// user.age = 105;

// console.log(user);

//!=========================================

// user.setBalance(10);

// user.balance = 10;

//!=========================================
// console.log(user.balance);

// user.balance = 25;

// console.log(user);

// console.log(user.discount);

// user.discount = 100;

// console.log(user);

//!=========================================

// class Dog {
//   static counter = 0;
//   static brandName = 'DogoMaxy';

//   constructor(breed, color) {
//     this.breed = breed;
//     this.color = color;
//     Dog.counter += 1;
//   }

//   static showDogsAmount() {
//     console.log(Dog.counter);
//   }
// }

// const dog1 = new Dog('Spaniel', 'gold');
// const dog2 = new Dog('Spaniel', 'white');

// console.log(dog1);
// console.log(dog2);

// Dog.showDogsAmount();

//!=========================================

class Product {
  static discount = 0.9;

  constructor(title, quantity, price) {
    this.title = title;
    this.quantity = quantity;
    this.price = price;
  }

  showTotalPrice() {
    const res = this.quantity * this.price * Product.discount;
    console.log(res);
  }
}

const product1 = new Product('Iphone14', 10, 1000);
const product2 = new Product('Iphone15', 15, 1200);
const product3 = new Product('Iphone16', 20, 1300);

product1.showTotalPrice();
product2.showTotalPrice();
product3.showTotalPrice();

Product.discount = 1;

product1.showTotalPrice();
product2.showTotalPrice();
product3.showTotalPrice();
