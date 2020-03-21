import { connect } from 'react-redux'
import Messages from './Messages'
import withLoginRedirect from '../HOC/withLoginRedirect'
import { compose } from 'redux'
import { getDialogs, getMessages } from '../../redux/selectors'


const mapStateToProps = (state) => {
    return {
        dialogsData: getDialogs(state),
        messagesData: getMessages(state)
    }
}

export default compose(
    connect(mapStateToProps),
    withLoginRedirect
)(Messages)