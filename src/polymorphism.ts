// 다형성 : 다른 모양의 코드를 가질 수 있게 해 주는것
// genetic으로 이를 가능하게 함
// placeholder

interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

// genetic (<T>)을 클래스로 보내고, 클래스는 genetic을 인터페이스로 보낸 뒤,
// 인터페이스는 제네틱을 이용한다.

const stringsStorage = new LocalStorage<string>();

stringsStorage.set('key', 'hello');
let keyA = stringsStorage.get('key');

const booleansStorage = new LocalStorage<boolean>();

booleansStorage.set('string', true);
let stringA = booleansStorage.get('string');

console.log(keyA);
console.log(stringA);
