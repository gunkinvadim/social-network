import React, { useState } from 'react'
import s from './Paginator.module.css'

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged,
    portionSize = 3 }) => {


    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const currentPortionnumber = Math.ceil(currentPage / portionSize)
    const [ portionNumber, setPortionNumber ] = useState(currentPortionnumber)
    const firstPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const lastPortionPageNumber = portionNumber * portionSize

    return (
        <div className={s.paginator}>
            {portionNumber > 1 && <button
                className={s.paginatorBtn}
                onClick={() => {
                    setPortionNumber(1)
                    onPageChanged(1)
                }}
            >First</button>}

            {portionNumber > 1 && <button
                className={s.paginatorBtn}
                onClick={() => {
                    setPortionNumber(portionNumber - 1)
                    onPageChanged(Math.max(1, (lastPortionPageNumber
                        - (portionSize + Math.floor(portionSize / 2)))))
                }}
            >...</button>}

            {pages
                .filter(p => p >= firstPortionPageNumber && p <= lastPortionPageNumber)
                .map(p => (
                    <button
                        key={p}
                        className={s.paginatorBtn + ' ' + (p === currentPage && s.selected)}
                        onClick={p !== currentPage ? (() => onPageChanged(p)) : null}
                    >
                        {p}
                    </button>
                ))}

            {portionNumber < portionCount && <button 
                className={s.paginatorBtn}
                onClick={() => {
                    setPortionNumber(portionNumber + 1)
                    onPageChanged(Math.min(pages.length + 1,
                        (firstPortionPageNumber +
                            (portionSize + Math.floor(portionSize / 2)))))
                }}
            >...</button>}

            {portionNumber < portionCount && <button 
                className={s.paginatorBtn}
                onClick={() => {
                    setPortionNumber(portionCount)
                    onPageChanged(pages.length)
                }}
            >Last</button>}
        </div>
    )
}

export default Paginator