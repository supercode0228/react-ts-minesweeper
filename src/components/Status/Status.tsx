import React from 'react';

import { Options, GameStatus } from '../../types';

type StatusProps = Options & {
  status: GameStatus,
  moveCount: number,
};

const Status: React.FunctionComponent<StatusProps> = props => {
  let resolution = <span>In progress</span>;
  if (props.status === GameStatus.Won) {
    resolution = <code>Victory!</code>;
  } else if (props.status === GameStatus.Lost) {
    resolution = <code>Disaster!</code>;
  }

  const facts: { [k: string]: any } = {
    status: resolution,
    moveCount: props.moveCount,
    mineCount: props.mineCount,
    grid: `${props.width} x ${props.height}`,
  };

  return (
    <table>
      <tbody>
        {Object.keys(facts).map(key => (
          <tr key={key}>
            <td><code>{key}</code></td>
            <td><code>{facts[key]}</code></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Status;