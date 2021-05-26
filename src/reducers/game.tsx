import { minesweeper } from '../utils/minesweeper';
import { GameStatus, IGameState } from '../types';
import { GameAction } from '../actions/game';

export function defaultGameState() {
  return {
    payload: minesweeper.create({
      mineCount: 0,
      width: 1,
      height: 1,
    }),
    error: ''
  };
}

export function gameReducer (state: IGameState = defaultGameState(), action: GameAction): IGameState {
  if (action.type === 'RESET_GAME') {
    return {
      ...state,
      payload: minesweeper.create(action.options)
    };
  } else if (state.payload.status !== GameStatus.Started) {
    return state;
  } else if (action.type === 'REVEAL_LOCATION') {
    return {
      ...state,
      payload: minesweeper.reveal(state.payload, action.xy)
    };
  } else if (action.type === 'FLAG_LOCATION') {
    return {
      ...state,
      payload: minesweeper.flag(state.payload, action.xy)
    };
  }
  return state;
}