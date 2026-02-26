type Words = {
  [key: string]: string | string[];
};

class Word {
  constructor(
    public term: string,
    public def: string | string[],
  ) {}

  // 단어 출력하기
  toString() {
    console.log(`${this.term} : [뜻] ${this.def}`);
  }

  // 단어 정의 추가하기
  addDef(newDef: string) {
    if (typeof this.def === 'string') {
      this.def = [this.def, newDef];
    } else {
      this.def = [...this.def, newDef];
    }
  }

  // 단어 정의 업데이트하기
  updateDef(oldDef: string, newDef: string) {
    if (typeof this.def === 'string') {
      if (oldDef === this.def) this.def = newDef;
    } else {
      this.def = this.def.filter((val) => val !== oldDef);
      this.def.push(newDef);
    }
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
}

const kimchi = new Word('kimchi', '한국의 음식');
const pizza = new Word('pizza', '이탈리아의 음식');
const sushi = new Word('sushi', '일본의 음식');

const dict = new Dict();

dict.add(kimchi);
dict.add(pizza);
dict.add(sushi);

dict.size();
dict.all();

dict.def('pizza');

dict.delete('sushi');
dict.all();

const newPizza = new Word('pizza', '밀가루와 토마토소스, 치즈로 만든다.');
dict.update(newPizza);

dict.all();

kimchi.toString();
kimchi.addDef('고춧가루, 배추, 액젓으로 만든다');
kimchi.toString();

newPizza.updateDef('밀가루와 토마토소스, 치즈로 만든다.', '이탈리아의 음식');
newPizza.toString();
dict.update(newPizza);
dict.all();
