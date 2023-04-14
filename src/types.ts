export type CharacterType = {
  costumes: number;
  name: string;
  slug: string;
};

export type PlayerType = {
  character: string;
  costume?: number;
  tag: string;
};

export type SetType = {
  id?: number;
  name: string;
  playerA: PlayerType;
  playerB: PlayerType;
};
