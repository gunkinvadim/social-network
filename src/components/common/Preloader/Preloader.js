import React from 'react'
import s from './Preloader.module.css'
import spinnerImg from '../../../assets/images/spinner.gif'

const Preloader = () => {
    return (
        <img className={s.preloader} src={spinnerImg} alt='loading...' />
    )
}

export default Preloader