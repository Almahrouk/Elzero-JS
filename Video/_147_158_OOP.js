/*
  Constructor Function
*/

function User(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary + 1000;
  }
  
  let user_One = new User(100, "Elzero", 5000);
  let user_Two = new User(101, "Hassan", 6000);
  let user_Three = new User(102, "Sayed", 7000);
  
  console.log(user_One.i);
  console.log(user_One.u);
  console.log(user_One.s);
  
  console.log(user_Two.i);
  console.log(user_Two.u);
  console.log(user_Two.s);
  
  console.log(user_Three.i);
  console.log(user_Three.u);
  console.log(user_Three.s);
  
  // const user_One = {
  //   id: 100,
  //   username: "Elzero",
  //   salary: 5000,
  // };
  
  // const user_Two = {
  //   id: 101,
  //   username: "Hassan",
  //   salary: 6000,
  // };
  
  // const user_Three = {
  //   id: 102,
  //   username: "Sayed",
  //   salary: 7000,
  // };


















// *******************************************************

/*
  Constructor Function
  - New Syntax
*/

class User {
    constructor(id, username, salary) {
      this.i = id;
      this.u = username;
      this.s = salary + 1000;
    }
  }
  
  let UserOne = new User(100, "Elzero", 5000);
  
  console.log(UserOne.i);
  console.log(UserOne.u);
  console.log(UserOne.s);
  
  console.log(UserOne instanceof User);
  console.log(UserOne.constructor === User);

















// *******************************************************

/*
  Constructor Function
  - Deal With Properties And Methods
*/

class User {
    constructor(id, username, salary) {
      // Properties
      this.i = id;
      this.u = username || "Unknown";
      this.s = salary < 6000 ? salary + 500 : salary;
      this.msg = function () {
        return `Hello ${this.u} Your Salary Is ${this.s}`;
      };
    }
    // Methods
    writeMsg() {
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    }
  }
  
  let userOne_1 = new User(100, "Elzero", 5000);
  let userTwo_1 = new User(101, "", 6000);
  
  console.log(userOne_1.u);
  console.log(userOne_1.s);
  console.log(userOne_1.msg());
  console.log(userOne_1.writeMsg());
  
  console.log(userTwo_1.u);
  console.log(userTwo_1.s);
  console.log(userTwo_1.msg); // Native Code
  console.log(userTwo_1.writeMsg); // Native Code




















// *******************************************************

/*
  Constructor Function
  - Update Properties
  - Built In Constructors
*/

class User {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
  }
  updateName(newName) {
    this.u = newName;
  }
}

let One = new User(100, "Elzero", 5000);

console.log(One.u);
One.updateName("Osama");
console.log(One.u);

let StrOne = "Elzero";
let StrTwo = new String("Elzero");

console.log(typeof StrOne);
console.log(typeof StrTwo);

console.log(StrOne instanceof String);
console.log(StrTwo instanceof String);

console.log(StrOne.constructor === String);
console.log(StrTwo.constructor === String);















// *******************************************************

/*
  Class
  - Static Properties And Methods
*/

class User {
    // Static Property
    static count = 0;
  
    constructor(id, username, salary) {
      this.i = id;
      this.u = username;
      this.s = salary;
      User.count++;
    }
  
    // Static Methods
    static sayHello() {
      return `Hello From Class`;
    }
    static countMembers() {
      return `${this.count} Members Created`;
    }
  }
  
  let userOne_2 = new User(100, "Elzero", 5000);
  let userTwo_2 = new User(101, "Ahmed", 5000);
  let userThree = new User(102, "Sayed", 5000);
  
  console.log(userOne_2.u);
  console.log(userTwo_2.u);
  console.log(userOne_2.count);
  console.log(User.count);
  console.log(User.sayHello());
  console.log(User.countMembers());















// *******************************************************

/*
  Class
  - Inheritance
*/

// Parent Class
class User {
    constructor(id, username) {
      this.i = id;
      this.u = username;
    }
    sayHello() {
      return `Hello ${this.u}`;
    }
  }
  
  // Derived Class
  class Admin extends User {
    constructor(id, username, permissions) {
      super(id, username);
      this.p = permissions;
    }
  }
  
  class Superman extends Admin {
    constructor(id, username, permissions, ability) {
      super(id, username, permissions);
      this.a = ability;
    }
  }
  
  let Ones = new User(100, "Elzero");
  let adminOne = new Admin(110, "Mahmoud", 1);
  
  console.log(Ones.u);
  console.log(Ones.sayHello());
  console.log("####");
  console.log(adminOne.i);
  console.log(adminOne.u);
  console.log(adminOne.p);
  console.log(adminOne.sayHello());















// *******************************************************

/*
  Encapsulation
  - Class Fields Are Public By Default
  - Guards The Data Against Illegal Access.
  - Helps To Achieve The Target Without Revealing Its Complex Details.
  - Will Reduce Human Errors.
  - Make The App More Flexible And Manageable.
  - Simplifies The App.
*/

class User {
    // Private Property
    #e;
    constructor(id, username, eSalary) {
      this.i = id;
      this.u = username;
      this.#e = eSalary;
    }
    getSalary() {
      return parseInt(this.#e);
    }
  }
  
  let userOne_3 = new User(100, "Elzero", "5000 Gneh");
  
  console.log(userOne_3.u);
  console.log(userOne_3.getSalary() * 0.3);


















// *******************************************************

/*
  Prototype
  - Introduction
  - Prototypes are the mechanism by which JavaScript objects
    inherit features from one another.
*/

class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOne_4 = new User(100, "Elzero");
console.log(userOne_4.u);

console.log(User.prototype);

let strOne = "Elzero";

console.log(String.prototype);















// *******************************************************


/*
  Prototype
  - Add To Prototype Chain
  - Extend Built In Constructors Features
*/

class User {
    constructor(id, username) {
      this.i = id;
      this.u = username;
    }
    sayHello() {
      return `Hello ${this.u}`;
    }
  }
  
  let userOne = new User(100, "Elzero");
  console.log(userOne.u);
  console.log(User.prototype);
  console.log(userOne);
  
  User.prototype.sayWelcome = function () {
    return `Welcome ${this.u}`;
  };
  
  Object.prototype.love = "Elzero Web School";
  
  String.prototype.addDotBeforeAndAfter = function (val) {
    return `.${this}.`;
  };
  
  let myString = "Elzero";














// *******************************************************

/*
  Object Meta Data And Descriptor
  - writable
  - enumerable
  - configurable [Cannot Delete Or Reconfigure]
*/

const myObject = {
    a: 1,
    b: 2,
  };
  
  Object.defineProperty(myObject, "c", {
    writable: false,
    enumerable: true,
    configurable: false,
    value: 3,
  });
  
  // Object.defineProperty(myObject, "c", {
  //   writable: false,
  //   enumerable: true,
  //   configurable: true, <= Cannot redefine property
  //   value: 3,
  // });
  
  myObject.c = 100;
  
  console.log(delete myObject.c);
  
  for (let prop in myObject) {
    console.log(prop, myObject[prop]);
  }
  
  console.log(myObject);















// *******************************************************

/*
  Object Meta Data And Descriptor
  - Define Multiple Properties
  - Check Descriptors
*/

const myObject = {
    a: 1,
    b: 2,
  };
  
  Object.defineProperties(myObject, {
    c: {
      configurable: true,
      value: 3,
    },
    d: {
      configurable: true,
      value: 4,
    },
    e: {
      configurable: true,
      value: 5,
    },
  });
  
  console.log(myObject);
  
  console.log(Object.getOwnPropertyDescriptor(myObject, "d"));
  console.log(Object.getOwnPropertyDescriptors(myObject));















// *******************************************************

