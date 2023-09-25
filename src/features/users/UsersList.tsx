import "./Users.module.css"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { updateUsers } from "./usersSlice"

import { selectUsers } from "./usersSlice"

export function UsersList(): JSX.Element {

    const usersArray = useAppSelector(selectUsers);
    console.log (usersArray);
    let usersArrayElements = usersArray.map((user) => {
        return <li key={user.id}>{user.name}</li>
    });


    return (
        <ul id="list">
            {usersArrayElements}
        </ul>
    )
}
