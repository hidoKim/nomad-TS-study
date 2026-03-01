type PlayerA = {
  name: string;
};

type PlayerAA = PlayerA & {
  lastName: string;
};

// 불가능
// type PlayerAA = {
//   health: number;
// };

const playerA: PlayerAA = {
  name: 'hido',
  lastName: 'kim',
};

//************************************* */

interface PlayerB {
  name: string;
}

interface PlayerBB extends PlayerB {
  lastName: string;
}

// 가능
interface PlayerBB {
  health: number;
}

const playerB: PlayerBB = {
  name: 'garnet',
  lastName: 'kim',
  health: 50,
};
