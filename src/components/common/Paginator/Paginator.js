import React from 'react'
import { paginatorBtn, selected } from './Paginator.module.css'

const Paginator = ({ pagesCount, currentPage, onPageChanged }) => {
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((p, i, arr) => {
                if (((p <= currentPage + 3) && (p >= currentPage - 3))
                    || (p === 1) || (p === arr.length)) {
                    return (
                        <button
                            key={p}
                            className={paginatorBtn + ' ' + (p === currentPage && selected)}
                            onClick={p !== currentPage && (() => onPageChanged(p))}
                        >{
                            (((p === currentPage - 3) && (p !== 1))
                            || ((p === currentPage + 3) && (p !== arr.length))) ? '...' : p
                        }
                        </button>
                    )
                }
            })}
        </div>
    )
}

export default Paginator