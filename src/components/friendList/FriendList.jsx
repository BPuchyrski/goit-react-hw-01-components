import FriendListItem from '../friendListItem/FriendListItem';
import css from './FriendList.module.css';
function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            isOnline={friend.isOnline}
            avatar={friend.avatar}
            name={friend.name}
          ></FriendListItem>
        );
      })}
    </ul>
  );
}

export default FriendList;
