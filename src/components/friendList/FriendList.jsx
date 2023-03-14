import FriendListItem from '../friendListItem/FriendListItem';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';
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
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      key: PropTypes.number
    })
  ),
};
export default FriendList;
