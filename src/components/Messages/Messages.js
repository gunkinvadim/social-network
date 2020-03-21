import React from 'react'
import { dialogs, dialogsItems, messages } from './Messages.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import NewMessageContainer from './NewMessage/NewMessageContainer'


const Messages = ({ dialogsData, messagesData }) => {

    return (
        <div className={dialogs}>
            <ul className={dialogsItems}>
                {dialogsData.map(({ id, name }) => <DialogItem key={id} name={name}/>)}
            </ul>
            <ul className={messages}>
                {messagesData.map(({ id, text }) => <Message key={id} text={text}/>)}
            </ul>
            <NewMessageContainer />
        </div>
    )
}

export default Messages