import { createSlice } from "@reduxjs/toolkit";



const userSlice=createSlice({
    name:"user",
    initialState:[],
    reducers:{
        addUser(state,action){
             state.push(action.payload)
        },
        deleteUser(state,action){
        //    state= state.filter((name)=>name.id!=action.payload)
        state.splice(action.payload,1)

            
        },
    }
})

export default userSlice.reducer;
export const {addUser,deleteUser}=userSlice.actions;