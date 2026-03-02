const nico = {
  nickname: 'niko',
};

//nico.hello();

//[1, 2, 3, 4] + false;

function divide(a, b) {
  return a / b;
}

//divide('hello');

const player = {
  age: 12,
  name: 'string',
};

//player.age = false;
//player.name = 2;

let a = 'string';

// let b: boolean = 'sf';

a = 'kim';

// a = 12;

let c: number[] = [];
//c.push('2');

type Name = string;
type Age = number;
type Player = {
  name: Name;
  age?: Age;
};

const A: Player = {
  age: 12,
  name: 'A',
};

const B: Player = {
  name: 'B',
};

// function playerMaker(name: string): Player {
//   return {
//     name: name,
//   };
// }

const playerMaker = (name: string): Player => ({ name });

const nico1 = playerMaker('nico');

nico1.age = 12;

let kim: C = false;
type C = boolean;
