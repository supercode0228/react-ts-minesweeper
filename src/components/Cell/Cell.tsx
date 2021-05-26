import React from 'react';

import { Cell, CellStatus } from '../../types';

import './Cell.css';

type CellProps = Cell & {
  onClick(): void
  onCtrlClick(): void
};

const Field: React.FunctionComponent<CellProps> = props => {
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (e.ctrlKey || e.metaKey) {
      props.onCtrlClick();
    } else {
      props.onClick();
    }
  }
  const {
    status,
    revealedCount,
  } = props;

  let icon = <i>.</i>;
  let className = 'cell';
  if (status === CellStatus.Exploded) {
    icon = <i className="fa fa-bomb" />;
    className += ' cell--exploded';
  } else if (status === CellStatus.Revealed) {
    icon = <i>{revealedCount > 0 ? revealedCount.toString() : '.'}</i>;
    className += ` cell--revealed cell--revealed-${revealedCount}`;
  } else if (status === CellStatus.Flagged) {
    icon = <i className="fa fa-flag" />;
    className += ' cell--flagged';
  }

  return (
    <button
      className={className}
      onClick={onClick}
    >
      {icon}
    </button>
  );
};

export default Field;