import "./UsersList.module.css"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { selectUsers, removeUser } from "./usersSlice"

export function UsersList(): JSX.Element {

    const usersArray = useAppSelector(selectUsers);
    const dispatch = useAppDispatch();

    let usersArrayElements = usersArray.map((user) => {
        return <li key={user.id} onClick={() => {dispatch(removeUser(user.id))}}>{user.name}</li>
    });


    return (
        <ul id="list">
            {usersArrayElements}
        </ul>
    )
}
