import PropTypes from 'prop-types';
import css from './FriendList.module.css'


export default function FriendList({friends}) {
    return <ul  className={css['friend-list']}>
                {friends.map(friend => {
                    return <li key={friend.id} className={css.item}>
                                {friend.isOnline ? (<span className={`${css.status} ${css.online}`}>{friend.isOnline}</span>) : (<span className={`${css.status} ${css.ofline}`}>{friend.isOnline}</span>)}
                                
                                <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                                <p className={css.name}>{friend.name}</p>
                            </li>
                }) }

            </ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({ avatar: PropTypes.string.isRequired, name: PropTypes.string.isRequired, isOnline: PropTypes.bool.isRequired, id: PropTypes.number.isRequired })).isRequired
}