import React from 'react'
import  styles from './Message.module.css'

type messageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: messageType) {
    return (
        <div className={styles.message}>
            <div className={styles.avatar} style={{backgroundImage:`url(${props.avatar})`}}>
                <img src={props.avatar}/>
            </div>
            <div className={styles.info}>
            {props.name} 
            <div className={styles.text}>{props.message}</div>
            <div className={styles.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
