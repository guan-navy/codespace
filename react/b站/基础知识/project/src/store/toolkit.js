import { createSlice ,configureStore, createAsyncThunk} from "@reduxjs/toolkit";
export let changeMsgThunk = createAsyncThunk('msg/changeMsg',async (payload,thunkAPI)=>{
 const res = await new Promise((resolve,reject)=>{
  setTimeout(()=>{
    console.log(payload,thunkAPI);

    
    resolve('异步修改结果')
  },1000)

 
})
return res
})
let msgReducer = createSlice({
  name: "msg",
  initialState: {
    msg: 'hello',
  },
  reducers: {
    changeMsg(state, action) {
      state.msg = action.payload;
    },
    
    resetMsg(state, action) {
      state.msg = 'hello';
    },
  },
//   extraReducers:(builder)=>{
//     builder.addCase(changeMsgThunk.pending,(state,action)=>{
//         console.log('pending...');
        
//       state.msg = 'pending'
//     })
//     builder.addCase(changeMsgThunk.fulfilled,(state,action)=>{
//         console.log('fulfilled...');
        
//         console.log(action.payload);
        
//       state.msg = action.payload
//     })
//     builder.addCase(changeMsgThunk.rejected,(state,action)=>{
//       console.log('rejected...');
      
//     })
//   }
//   对象形式 
  extraReducers:{
    [changeMsgThunk.pending]:(state,action)=>{
      state.msg = 'pending'
    },
    [changeMsgThunk.fulfilled]:(state,action)=>{
      state.msg = action.payload
    },
    [changeMsgThunk.rejected]:(state,action)=>{
      state.msg ='rejected'
    }
  }
}); 
let numSlice = createSlice({
  name: "num",
  initialState: {
    num: 0,
  },
  reducers: {
    addNum(state, action) {
      state.num = state.num + action.payload;
    },
    removeNum(state, action) {
      state.num = state.num - action.payload;
    },

  },
 
});

const store = configureStore({
  reducer: {
    msg: msgReducer.reducer,
    num: numSlice.reducer,
  },
});
export const { changeMsg, resetMsg ,asyncChangeMsg } = msgReducer.actions;
export default store;