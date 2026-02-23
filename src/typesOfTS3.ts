let a: unknown;

// let b = a + 1;

if (typeof a === 'number') {
  let b = a + 1;
}

if (typeof a === 'string') a.toUpperCase();

function hello() {
  console.log('x');
}

const b = hello();
// b.toUpperCase();

function hi(): never {
  // never: 함수가 절대 return 하지 않을 때 (exception)
  throw new Error();
}

function he(name: string | number) {
  if (typeof name === 'string') {
    name;
  } else if (typeof name === 'number') {
    name;
  } else {
    name;
  }
}
