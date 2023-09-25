import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface User {
    id: number,
    name: string
}

const initialState: User[] = [];

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        updateUsers: (state, action) => {
            let index: number = Date.now();

            //zebrać dane z inputa i przekazać do imienia??
            console.log(action);
            state.concat({ id: index, name: action.payload})
        }
    }
})

export const { updateUsers } = usersSlice.actions

/* export const selectText = (state: RootState) => state.users */

export default usersSlice.reducer;