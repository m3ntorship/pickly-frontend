import React from 'react';
import type { ReactElement, FC } from 'react';
import Divider from '../../atoms/Divider/Divider';
import type { IPostViewHeader } from './IPostViewHeader';
import * as EDivider from '../../atoms/Divider/types/EDivider';
import UserInfo from '../UserInfo/UserInfo';
import DropDown from '../../atoms/DropDown/DropDown';
import { options } from '../../atoms/DropDown/mockedOptions';

const getPostMenuOptions = (
  updatedOptions: { id: string; body: string }[],
  userId: string,
): { id: string; body: string }[] => {
  if (process.browser) {
    const loggedInUser = localStorage.getItem('user');
    if (userId !== loggedInUser) {
      return updatedOptions.filter((option) => option.id !== 'delete');
    }
    return updatedOptions;
  }
  return updatedOptions;
};

const PostViewHeader: FC<IPostViewHeader.IProps> = ({
  profilePic,
  name,
  userId,
  date,
  deletePostHandler,
  postId,
  isHidden,
}): ReactElement => {
  const onMenuOptionClickHandler = (id: string): void => {
    switch (id) {
      case 'delete':
        deletePostHandler(postId);
        break;
      case 'report':
        console.log('reported');
        break;
      case 'save':
        console.log('saved');
        break;
      default:
        console.log('default');
    }
  };

  return (
    <div>
      <div className="flex justify-between items-start pb-s">
        <UserInfo
          isHidden={isHidden}
          profilePic={profilePic}
          name={name}
          date={date}
        />
        <DropDown
          onOptionMenuClick={onMenuOptionClickHandler}
          options={getPostMenuOptions(options, userId)}
          variant="post"
          size="sm"
        />
      </div>
      <Divider type={EDivider.DividerType.Horizontal} length="100%" />
    </div>
  );
};

export default PostViewHeader;
