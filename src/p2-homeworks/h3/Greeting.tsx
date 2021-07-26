import React, {ChangeEventHandler,KeyboardEvent,ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (event:ChangeEvent<HTMLInputElement>) => void
    onEnter: (event:KeyboardEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string // need to fix any
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : s.input// need to fix with (?:)

    return (
        <div>
            <input value={name} onChange={setNameCallback} 
            onKeyDown={onEnter} onBlur={setNameCallback} className={inputClass}/>
            <span>{error}</span>
            <button onClick={addUser} className={s.button} disabled={!name}>add</button>
            <div className={s.count}>{totalUsers}</div>
        </div>
    )
}

export default Greeting
