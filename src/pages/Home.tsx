import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Status from '../components/Status';
import Cell from '../components/Cell';
import { resetGame, revealLocation, flagLocation } from '../actions/game';
import { Game, AppState } from '../types';
import './Home.css';

const DEFAULT_OPTIONS = {
  mineCount: 10,
  width: 10,
  height: 10,
};

type StateProps = Game & {
  grid: string[][]
}

const Home: React.FunctionComponent<StateProps> = () => {
  const dispatch = useDispatch();

  const gameState = useSelector((state: AppState) => {
    const { width, height } = state.game.payload;
    const grid: string[][] = [];
    for (let y = 0; y < height; y++) {
      grid[y] = [];
      for (let x = 0; x < width; x++) {
        grid[y][x] = [x, y].toString();
      }
    }

    return { ...state.game.payload, grid };
  });

  useEffect(() => {
    dispatch(resetGame(DEFAULT_OPTIONS));
  }, []);

  const renderBoard = () => {
    const { grid, cellsByXy } = gameState;
    return (
      <div className="board">
        {grid.map((row, y) => (
          <div key={y} className="row">
            {row.map(xy => (
              <Cell
                {...cellsByXy[xy]}
                key={xy}
                onClick={() => dispatch(revealLocation(xy))}
                onCtrlClick={() => dispatch(flagLocation(xy))}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="root">
      <h1>Minesweeper</h1>
      <p>
        <code>click</code>: reveal; &nbsp;
        <code>ctrl + click</code>: flag / reveal
        <button onClick={() => dispatch(resetGame(DEFAULT_OPTIONS))}>
          <i className="fa fa-refresh"></i> restart
        </button>
      </p>
      {renderBoard()}
      <Status {...gameState} />
    </div>
  )
};

export default Home;