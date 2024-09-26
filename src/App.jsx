import Profile from "./components/profile/Profile";
import userData from "./data/userData.json";
import FriendList from "./components/friendList/FriendList";
import friends from "./data/friends.json";
import TransactionHistory from "./components/transactionHistory/TransactionHistory";
import transactions from "./data/transactions.json";

import "./App.css";

const App = () => {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

export default App;
