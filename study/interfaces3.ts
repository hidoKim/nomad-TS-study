abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
  ) {}

  abstract sayHi(name: string): string;
  abstract fullName(): string;
}

class Player extends User {
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  sayHi(name: string): string {
    return `Hi, ${name}! My name is ${this.fullName()}`;
  }
}

interface User2 {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

class Person implements User2, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number,
  ) {}

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string): string {
    return `Hi, ${name}! My name is ${this.fullName()}`;
  }
}

function makeUser(user: User2): User2 {
  return {
    firstName: 'nico',
    lastName: 'las',
    fullName: () => 'xx',
    sayHi: (name) => 'koko',
  };
}
// 입력받은 user는 무시하고, 무조건 'nico', 'las'라는 새로운 객체를 만들어서 리턴(return)

makeUser({
  firstName: 'nico',
  lastName: 'las',
  fullName: () => 'xx',
  sayHi: (name) => 'koko',
});

// 테스트

const player = new Player('garnet', 'kim');
console.log(player.fullName());
console.log(player.sayHi('dodo'));

const person = new Person('hido', 'kim', 100);
console.log(person.health);
console.log(person.fullName());
console.log(person.sayHi('dodo'));

const kim = makeUser(person); // '덕 타이핑(Duck Typing)' : 필요한 것만 다 가지고 있으면, 나머지는 더 가지고 있어도 상관없다

console.log(kim);
console.log(kim.fullName());
console.log(kim.sayHi('yoyo'));
