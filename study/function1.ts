// call signatures

function add(a: number, b: number) {
  return a + b;
}

type Add = (a: number, b: number) => number; // call signature

const add1: Add = (a, b) => a + b;

// overloading
type Add3 = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add5: Add3 = (a, b) => {
  if (typeof b === 'string') return a;
  return a + b;
};

type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config == 'string') console.log(config);
  else console.log(config.path, config.state);
};

type Add0 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add0: Add0 = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

add0(1, 2);

add0(1, 2, 3);

// polymorphism, Genetic
type SuperPrint = {
  <TypePlaceholder, M>(arr: TypePlaceholder[], b: M): TypePlaceholder;
};
// any를 넣지 않는 이유: 모든 case에서 any -> any가 됨.
// toUpperCase()를 사용하면 숫자나 boolean에서 에러가 남

const superPrint: SuperPrint = (arr) => arr[0];

// function superPrint<T>(a: T[]) {
//   return a[0];
// }

const o = superPrint([1, 2, 3, 4], 'x');
const p = superPrint([true, false, true, true], 1);
const i = superPrint(['1', '2'], true);

const u = superPrint([1, 2, true, false], []);

type Play<E> = {
  name: string;
  extraInfo: E;
};

type NicoExtra = {
  favFood: string;
};

type NicoPlay = Play<NicoExtra>;

const nicoo: NicoPlay = {
  name: 'nico',
  extraInfo: {
    favFood: 'km',
  },
};

const lynn: Play<null> = {
  name: 'lynn',
  extraInfo: null,
};

type A = Array<number>;

let a: A = [1, 2, 3, 4];

function printAllNumbers1(arr: number[]) {}
function printAllNumbers2(arr: Array<number>) {}
