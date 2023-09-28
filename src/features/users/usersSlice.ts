import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface User {
    id: number,
    name: string
}

export interface UsersList {
    value: User[],
}

const initialState: UsersList = {
    value: [],
}

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        updateUsers: (state, action) => {
            let index: number = Date.now();
            state.value = state.value.concat({ id: index, name: action.payload });
        },
        removeUser: (state, action) => {
            let userID: number = Number(action.payload);
            state.value = state.value.filter(user => user.id !== userID);
        }
    }
})

export const { updateUsers, removeUser } = usersSlice.actions

export const selectUsers = (state: RootState) => state.users.value

export default usersSlice.reducer;