import {
  defaultGameState,
  gameReducer,
} from './game';
import { AppState } from '../types';
import { GameAction } from '../actions/game';

export type RootAction = GameAction;

export function defaultState() {
  return {
    game: defaultGameState()
  };
}

export function rootReducer(state: AppState = defaultState(), action: RootAction) {
  return {
    game: gameReducer(state.game, action)
  };
}