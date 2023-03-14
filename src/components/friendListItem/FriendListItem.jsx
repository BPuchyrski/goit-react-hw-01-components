import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';
function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li key={id} className={css.item}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
}
export default FriendListItem;
