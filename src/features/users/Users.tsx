import { useState } from "react"

import "./Users.module.css"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { updateUsers } from "./usersSlice"

export function Users(): JSX.Element {

    const dispatch = useAppDispatch()
    const [text, setText] = useState("")

    return (
        <div className='users'>
            <h1>Users' List</h1>
            <input type="text" placeholder='Enter name' onChange={(e) => setText(e.target.value)}/>
            <button onClick={() => dispatch(updateUsers(text))}  >Add user</button>


            {/*  {  <input ref={(data) => { inputRef = data }} type="text" placeholder='Enter name' />

            <button onClick={() => { if (inputRef) { updateUsers(inputRef.value) } }}>Add user</button>

            <UsersList usersList={users} removeUMethod={removeUser} /> */}
        </div>
    )
}
