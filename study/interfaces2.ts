abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
  ) {}

  abstract sayHi(name: string): string;
  abstract fullName(): string;
}

// new User() 는 불가능. (추상클래스는 인스턴스(객체)를 만들 수 없음.)

class Player extends User {
  fullName(): string {
    return `${this.firstName} ${this.lastName}`;
    // User 의 firstName, lastName이 protected 이기 때문에 접근 가능.
    // private 일 경우 접근 불가.
  }

  sayHi(name: string): string {
    return `Hi, ${name} My name is ${this.fullName()}`;
  }
}

interface U {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

class P implements U, Human {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number,
  ) {}
  // private, protected 를 사용할 수 없다.

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hi, ${name} My name is ${this.fullName()}`;
  }
}

function makeUser(user: U): U {
  return {
    firstName: 'nico',
    lastName: 'las',
    fullName: () => 'xx',
    sayHi: (name) => 'koko',
  };
}

makeUser({
  firstName: 'nico',
  lastName: 'las',
  fullName: () => 'xx',
  sayHi: (name) => 'koko',
});
