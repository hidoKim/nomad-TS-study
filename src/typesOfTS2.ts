type Age = number;

type Name = string;

type Player = {
  readonly name: Name;
  age?: Age;
};

const playerMaker = (name: string): Player => ({ name });
const nico = playerMaker('nico');

nico.age = 12;
// nico.name = 'las';

const numbers: readonly number[] = [12, 3, 4];

// numbers.push(1)

const names: readonly string[] = ['1', '2'];

// names.push('3');

const player2: readonly [string, number, boolean] = ['nico', 12, false];

// player2[0] = 2;

// player2[0] = 'ee';

let l: undefined = undefined;
let k: null = null;

let j: any = []; // any는 TS를 다시 JS로 빠져나오게 하는것. 사용을 안하는걸 추천
