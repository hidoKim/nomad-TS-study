type PlayerA = {
  firstname: string;
};

interface PlayerB {
  firstname: string;
}

class User1 implements PlayerA {
  constructor(public firstname: string) {}
}

class User2 implements PlayerB {
  constructor(public firstname: string) {}
}

// 클래스나 오브젝트의 타입정의 : interface
// 그 외 모든 경우 : type
