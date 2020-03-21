import React from 'react'
import Status from './Status'
import { connect } from 'react-redux'
import { updateStatus } from '../../../../redux/profile-reducer'
import { getIsMyProfile, getProfileStatus,
    getIsStatusLoading } from '../../../../redux/selectors'

class StatusContainer extends React.Component {

    state = {
        editMode: false,
        statusText: this.props.status
    }

    componentDidUpdate(prevProps) {
        if (this.props.status !== prevProps.status) {
            this.setState({
                statusText: this.props.status
            })
        }
    }

    toggleEditMode = (editMode) => {
        this.setState({
            editMode
        })
    }

    changeStatusText = (statusText) => {
        this.setState({
            statusText
        })
    }

    onUpdateStatus = () => {
        const { updateStatus } = this.props

        updateStatus(this.state.statusText)
        this.toggleEditMode(false)
    }


    render() {
        const { status, isMyProfile, isStatusLoading } = this.props
        const { editMode, statusText } = this.state

        return <Status
            isMyProfile={isMyProfile}
            status={status}
            isStatusLoading={isStatusLoading}
            editMode={editMode}
            statusText={statusText}
            toggleEditMode={this.toggleEditMode}
            changeStatusText={this.changeStatusText}
            onUpdateStatus={this.onUpdateStatus} />
    }
}

const mapStateToProps = (state) => ({
    isMyProfile: getIsMyProfile(state),
    status: getProfileStatus(state),
    isStatusLoading: getIsStatusLoading(state)
})

const mapDispatchToProps = {
    updateStatus
}

export default connect(mapStateToProps, mapDispatchToProps)(StatusContainer)