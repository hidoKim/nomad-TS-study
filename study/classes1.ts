abstract class User {
  constructor(
    private firstName: string,
    private lastName: string,
    protected nickname: string,
  ) {}

  abstract getNickName(): void;

  private getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player extends User {
  getNickName() {
    console.log(this.nickname);
  }
}

const nico = new Player('nico', 'last', 'nicko');

// nico.nickname;

// nico.firstName;

// nico.getFullName();
