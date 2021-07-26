import React, {useState,ChangeEvent,KeyboardEvent} from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType> 
    addUserCallback: (name:string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (event: ChangeEvent<HTMLInputElement>) => { 
        const trimmedName = event.currentTarget.value.trim()
        if(trimmedName) {
            setName(trimmedName)
            error && setError('')
        } else {
            name && setName('')
            setError('name is required')
        }
         
    }
    
    const addUser = () => {
        alert(`Hello ${name} !`)
        addUserCallback(name) // need to fix   
    }

    const onEnter = (event:KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter' && name){
            addUser()
        }
    }
    const totalUsers = users.length // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            onEnter={onEnter}
        />
    )
}

export default GreetingContainer
