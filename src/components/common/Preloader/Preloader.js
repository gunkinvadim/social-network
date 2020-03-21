import React from 'react'
import { preloader } from './Preloader.module.css'
import spinnerImg from '../../../assets/images/spinner.gif'

const Preloader = () => {
    return (
        <img className={preloader} src={spinnerImg} alt='loading...' />
    )
}

export default Preloader