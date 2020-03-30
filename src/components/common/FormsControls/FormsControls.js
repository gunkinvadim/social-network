import React from 'react'
import s from './FormControls.module.css'
import cn from 'classnames'


export const Input = ({ input, meta, ...props }) => {

    const hasError = meta.touched && !meta.active && meta.error

    return (
        <div className={cn(s.formControl, (hasError && s.error))}>
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
        <div className={cn(s.formControl, (hasError && s.error))}>
            <textarea
                {...input}
                {...props}
            />
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}