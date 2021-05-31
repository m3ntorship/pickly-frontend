import React from 'react';
import type { ReactElement, FC } from 'react';
import type { IUserInfo } from './IUserInfo';
import Avatar from '../../atoms/avatar/Avatar';
import styles from './UserInfo.module.css';

const UserInfo: FC<IUserInfo.IProps> = ({
  size,
  variant,
  profile_pic,
  name,
  date,
}): ReactElement => {
  return (
    <div className={styles['outer-wrapper']}>
      <Avatar size={size} variant={variant} profile_pic={profile_pic} />
      <div className={styles['user-wrapper']}>
        <span className={styles.name} data-testid="name">
          {variant === 'anonymous' ? 'Anonymous' : name}
        </span>
        <span className={styles.date}>{date} ago</span>
      </div>
    </div>
  );
};

export default UserInfo;
