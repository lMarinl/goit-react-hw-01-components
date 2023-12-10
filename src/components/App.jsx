import AppCss from './App.module.css';

import { Profile } from './Profile/Profile';
import user from '../UserData/user.json';

import { Statistics } from './Statistics/Statistics';
import data from '../UserData/data.json';

import { FriendList, FriendListItem } from './FriendList/FriendList';
import friends from '../UserData/friends.json';

import { TransactionHistory } from './Transactions/Transactions';
import transactions from '../UserData/transactions.json';

export function App() {
  return (
    <div className={AppCss.container}>
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList>
        <FriendListItem friends={friends} />
      </FriendList>
      <TransactionHistory item={transactions} />;
    </div>
  );
}
