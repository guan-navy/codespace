import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRoute = createAsyncThunk("getRoute",async(id)=>{
    const res=await axios
    .get("http://localhost:8000/getRoute?id="+id, {
     })
     localStorage.setItem('userRoute',JSON.stringify(res.data.data) )

    return res.data.data
})



let _localuserRoute=JSON.parse(localStorage.getItem('userRoute') || '[]')
const userSlice = createSlice({
    name:'userinfo',
    initialState:{
        userRoute:_localuserRoute
    },
    reducers:{
        changeRoute(state,action){
            state.userRoute=action.payload
        }
    },
    // 回调函数写法
    extraReducers:(builder)=>{
        builder.addCase(getRoute.fulfilled,(state,action)=>{
            console.log('fulfilled');

            
            state.userRoute=action.payload
            console.log(state.userRoute);
            
        })
    }


})
export const {changeRoute}=userSlice.actions
export default userSlice.reducer