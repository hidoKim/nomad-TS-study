type Nickname = string;
type Health = number;
type Friends = Array<string>; // string의 배열
//  string[] 이렇게 써도 됨.

type Player = {
  nickname: Nickname;
  healthBar: Health;
};
// propertyName: type

const nico: Player = {
  nickname: 'nico',
  healthBar: 10,
};

type Food = string;

const kimchi: Food = 'delicious';

type Team = 'red' | 'blue' | 'yellow'; // concrete 타입
type HealthBar = 1 | 5 | 10;

// Object 모양을 설명하는 방법 1: Type 지정
// Type은 원하는 모든 모양을 설정할 수 있음, (객체, 배열, 정해진 값 등)
type A = {
  nickname: string;
  team: Team;
  health: HealthBar;
};

const nicollas: A = {
  nickname: 'nico',
  team: 'red',
  health: 5,
};

// Object 모양을 설명하는 방법 2: interface(인터페이스)
// 인터페이스는 용도가 단 하나. Object 모양을 알려줄 때만 사용
interface B {
  nickname: string;
  team: Team;
  health: HealthBar;
}

const garnet: B = {
  nickname: 'garnet',
  team: 'red',
  health: 5,
};

// Object의 타입을 지정할때는 type을 쓰던, interface를 쓰던 똑같다.

// interface
interface User {
  readonly name: string;
}

interface P extends User {}

const nicoo: P = {
  name: 'nicoo',
};

// nicoo.name = 'cococo';

// type
type User2 = {
  name: string;
};

type Player2 = User2 & {};

const nicoco: Player2 = {
  name: 'nicoco',
};

interface U {
  name: string;
}

interface U {
  lastname: string;
}

interface U {
  health: number;
}

// interface를 각각 작성해도 하나로 합춰줌.
// (같은 인터페이스에 다른 이름을 가진 property들을 쌓을 수 있음)
const ni: U = {
  name: 'ni',
  lastname: 'dd',
  health: 90,
};

// 인터페이스는 객체 지향 프로그래밍의 개념을 활용해서 디자인 됨.
// 타입은 더 유연하다. 개방적.
