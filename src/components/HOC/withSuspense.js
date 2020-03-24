import React from 'react'
import Preloader from '../common/Preloader/Preloader'
import { deletePost } from '../../redux/profile-reducer'

const withSuspense = (Component) => {

    return (props) => {
        return (
            <React.Suspense fallback={<Preloader/>}>
                <Component {...props}/>
            </React.Suspense>
        )
    }

}

export default withSuspense