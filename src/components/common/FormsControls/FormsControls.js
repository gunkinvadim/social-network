import React from 'react'
import { formControl, error } from './FormControls.module.css'


export const Input = ({ input, meta, ...props }) => {

    const hasError = meta.touched && !meta.active && meta.error

    return (
        <div className={formControl + ' ' + (hasError && error)}>
            <input
                {...input}
                {...props}
            />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = ({ input, meta, ...props }) => {

    const hasError = meta.touched && !meta.active && meta.error

    return (
        <div className={formControl + ' ' + (hasError && error)}>
            <textarea
                {...input}
                {...props}
            />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}