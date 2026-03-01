// Words 타입 정의: 키(단어)와 값(정의)이 모두 문자열인 객체 형태를 정의 | 정의는 문자열 배열도 가능하게 추가
type Words = {
  [key: string]: string | string[];
};

// 단어 삭제, 업데이트 메소드 추가
class Dict {
  private words: Words;

  constructor() {
    // 인스턴스 생성 시 빈 객체로 초기화
    this.words = {};
  }

  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }

  def(term: string) {
    return this.words[term];
  }

  delete(term: string) {
    if (this.words[term] !== undefined) {
      delete this.words[term];
      console.log(`${term}이(가) 삭제되었습니다.`);
    }
  }

  update(word: Word) {
    if (this.words[word.term] !== undefined) {
      this.words[word.term] = word.def;
      console.log(`${word.term}의 정의가 수정되었습니다.`);
    } else {
      console.log(`${word.term}이 사전에 없습니다.`);
    }
  }

  size() {
    return Object.keys(this.words).length;
  }

  all() {
    for (let [key, value] of Object.entries(this.words)) {
      console.log(`${key} : ${value}`);
    }
  }
}

// 단어 정의 추가, 수정 메소드
// 단어 출력 메소드
class Word {
  constructor(
    public term: string,
    public def: string | string[],
  ) {}

  toString() {
    console.log(`${this.term}: [뜻] ${this.def}`);
  }

  addDef(newDef: string) {
    if (typeof this.def === 'string') {
      this.def = [this.def, newDef];
    } else {
      this.def = [...this.def, newDef];
    }
  }

  updateDef(oldDef: string, newDef: string) {
    if (typeof this.def === 'string') {
      if (oldDef === this.def) this.def = newDef;
    } else {
      this.def = this.def.filter((val) => val !== oldDef);
      this.def.push(newDef);
    }
  }
}

const kimchi = new Word('kimchi', '한국의 음식');
const sushi = new Word('sushi', '일본의 음식');
const pizza = new Word('pizza', '이탈리아의 음식');

const dict = new Dict();

dict.add(kimchi);
dict.add(sushi);
dict.add(pizza);

dict.all();
