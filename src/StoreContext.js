import React from 'react'

const StoreContext = React.createContext(null)

export const Provider = ({ children, store }) => {
    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    )
}

export const Consumer = ({ children }) => {
    return (
        <StoreContext.Consumer>
            {children}
        </StoreContext.Consumer>
    )
}