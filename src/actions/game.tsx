import { Action } from 'redux';
import { Options } from '../types';

export const RESET_GAME = 'RESET_GAME';
export const REVEAL_LOCATION = 'REVEAL_LOCATION';
export const FLAG_LOCATION = 'FLAG_LOCATION';

export interface IAction extends Action {
  type: 'FLAG_LOCATION' | 'REVEAL_LOCATION',
  xy: string
};

export interface IResetGameAction extends Action {
  type: 'RESET_GAME',
  options: Options
};

export type GameAction = IAction | IResetGameAction;

function flagLocation(xy: string): IAction {
  return ({ type: 'FLAG_LOCATION', xy });
};

function revealLocation(xy: string): IAction {
  return ({ type: 'REVEAL_LOCATION', xy }); 
};

function resetGame(options: Options): IResetGameAction {
  return ({ type: 'RESET_GAME', options });
};

export {
  flagLocation,
  revealLocation,
  resetGame
};