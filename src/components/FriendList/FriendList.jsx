import React from 'react';
import friendsCss from './FriendList.module.css';

export const FriendList = ({ children }) => (
  <ul className={friendsCss.list}>{children}</ul>
);

export const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={friendsCss.item} key={id}>
          <span
            className={`${friendsCss.status} ${
              isOnline ? friendsCss.online : friendsCss.offline
            }`}
          >
            {isOnline}
          </span>
          <img
            className={friendsCss.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={friendsCss.name}>{name}</p>
        </li>
      ))}
    </>
  );
};
