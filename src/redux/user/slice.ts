import { createSlice } from '@reduxjs/toolkit'
import User from '../../types/User'


const initialState: User = {
    id: '',
    first_name: '',
    last_name: '',
    email: 'rodrigo.plopesti@gmail.com'
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        create: (state, action) => {

            
            return { 
                ...state, 
                first_name: action.payload.first_name, 
                last_name: action.payload.last_name,
                email: action.payload.email
            }
        }

    }
})



export const { create } = userSlice.actions
export default userSlice.reducer