import Sidebar from './Sidebar'
import { getIsMyProfile } from "../../redux/selectors"
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    isMyProfile: getIsMyProfile(state)
})

export default connect(mapStateToProps)(Sidebar)