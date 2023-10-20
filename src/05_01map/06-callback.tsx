import {ChangeEvent, MouseEvent, useState} from "react";

export const User = () => {

    let[userName, setUserName]=useState(['Alexeich'])

    const deleteUSerName = ( event:MouseEvent<HTMLButtonElement>) => {

        console.log('u have been deleted')
    }
    const ageChanged = (event:ChangeEvent<HTMLInputElement>) => {
        console.log(`Your age is ${event.currentTarget.value}`)
    }

    return <div>
        <input onChange={ageChanged} type="number"/>
        <span>{userName}</span>
        <button onClick={deleteUSerName}>delete</button>
    </div>
}