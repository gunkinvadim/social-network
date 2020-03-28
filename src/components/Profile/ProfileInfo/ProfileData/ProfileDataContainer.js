import ProfileData from './ProfileData'
import { getProfileData } from '../../../../redux/selectors'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    profileData: getProfileData(state)
})

export default connect(mapStateToProps)(ProfileData)