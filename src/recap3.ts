type Words = {
  [key: string]: string | string[];
};

class Word {
  constructor(
    public readonly term: string,
    public readonly def: string | string[],
  ) {}
  // 보통 데이터 덮어쓰기를 막기 위해 private, protected property를 사용,
  // 이 예제에선 public + readonly를 사용해 데이터를 보호

  // 단어 출력하기
  toString() {
    console.log(`${this.term} : [뜻] ${this.def}`);
  }
}

class Dict {
  private words: Words;

  constructor() {
    this.words = {};
  }

  // 새로운 단어 추가하기
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }

  // 단어 정의 출력하기
  def(term: string) {
    return this.words[term];
  }

  // 단어 삭제하기
  delete(term: string) {
    if (this.words[term] !== undefined) {
      delete this.words[term];
      console.log(`${term}이(가) 삭제되었습니다.`);
    }
  }

  // 단어 정의 업데이트 하기
  update(word: Word) {
    if (this.words[word.term] !== undefined) {
      this.words[word.term] = word.def;
      console.log(`${word.term}의 정의가 수정되었습니다.`);
    } else {
      console.log(`${word.term}이 사전에 없습니다.`);
    }
  }

  // 사전의 총 단어 개수 출력하기
  size() {
    console.log(Object.keys(this.words).length);
  }

  // 사전의 전체 단어 출력하기
  all() {
    for (let [key, value] of Object.entries(this.words)) {
      console.log(`${key} : [뜻] ${value}`);
    }
  }

  static hello() {
    return 'hello';
  }
}

const kimchi = new Word('kimchi', '한국의 음식');
const pizza = new Word('pizza', '이탈리아의 음식');
const sushi = new Word('sushi', '일본의 음식');

const dict = new Dict();

dict.add(kimchi);
dict.add(pizza);
dict.add(sushi);

// kimchi.def = 'ffff'; // public def: string | string[] 일때 접근 가능. readonly 로 예방.

Dict.hello();
