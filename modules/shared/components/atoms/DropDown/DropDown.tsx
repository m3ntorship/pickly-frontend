import React, { useState } from 'react';

import type { FC, ReactElement } from 'react';
import type { IDropDown } from './IDropDown';
import VerticalThreeDotsIcon from '../../icons/verticalThreeDots.svg';
import styles from './DropDown.module.css';

const DropDown: FC<IDropDown.IProps> = ({
  options,
  onOptionMenuClick,
}): ReactElement => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const showMenuHandler = (): void => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex items-start relative">
      <div
        aria-hidden
        onClick={showMenuHandler}
        data-testid="menu-icon"
        className={styles['menu-icon-container']}
      >
        <VerticalThreeDotsIcon className={styles['menu-icon']} />
      </div>
      {showMenu && (
        <div role="menu" className={styles.menu} data-testid="menu">
          {options.map((option) => (
            <button
              className={styles['menu-item']}
              role="menuitem"
              type="button"
              name="option"
              id={option.id}
              key={option.id}
              onClick={(e): void => {
                onOptionMenuClick(e.currentTarget.id);
              }}
              data-testid="menu-button"
            >
              {option.body}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
