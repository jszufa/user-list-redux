import "./Users.module.css"
import { UsersList } from "./UsersList"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { updateUsers } from "./usersSlice"

import { selectUsers } from "./usersSlice"

export function Users(): JSX.Element {

    const dispatch = useAppDispatch()
    const users = useAppSelector(selectUsers)

    let inputRef: HTMLInputElement | null

    console.log(users);

    return (
        <div className='users'>
            <h1>Users' List</h1>
            <p>{JSON.stringify(users)}</p>
            <input ref={(data) => { inputRef = data }} type="text" placeholder='Enter name' />

            <button onClick={() => {
                if (inputRef) {
                    dispatch(updateUsers(inputRef.value));
                    inputRef.value = '';
                }
            }}>Add user</button>

            <UsersList />
        </div>
    )
}
