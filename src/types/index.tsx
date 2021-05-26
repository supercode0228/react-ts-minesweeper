export enum CellStatus {
  Unknown = 0,
  Revealed,
  Flagged,
  Exploded,
}

export type Cell = {
  status: CellStatus
  revealedCount: number
};

export type Options = {
  mineCount: number
  width: number
  height: number
};

export type Board = {
  cellsByXy: { [xy: string]: Cell }
  neighborsByXy: { [xy: string]: string[] }
  minesByXy: { [xy: string]: true }
};

export enum GameStatus {
  Started = 0,
  Won,
  Lost,
}

export type Game = Options & Board & {
  status: GameStatus
  moveCount: number
};

export interface IGameState {
  payload: Game,
  error?: string
}

export interface AppState {
  game: IGameState
}