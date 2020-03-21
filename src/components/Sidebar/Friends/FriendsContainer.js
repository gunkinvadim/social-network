import { connect } from 'react-redux'
import Friends from './Friends'
import { getFriendsList } from '../../../redux/selectors'


const mapStateToProps = (state) => ({
    friends: getFriendsList(state)
})

const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer