import FriendListItem from "../friendListItem/FriendListItem";
import styles from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends.map((FriendItem) => {
        return (
          <li className={styles.item} key={FriendItem.id}>
            <FriendListItem
              name={FriendItem.name}
              avatar={FriendItem.avatar}
              isOnline={FriendItem.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
