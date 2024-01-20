import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

interface counterState{
  count:number
}

const initialState : counterState = {
    count : 0,
}
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment:(state) => {
        state.count +=1
    },
    decrement : (state) => {
        state.count -=1
    },
    incrementByAmount : (state,actions :PayloadAction<number>) => {
            state.count +=actions.payload
    }
  },
});

export const {decrement,increment,incrementByAmount  } =counterSlice.actions
export default counterSlice.reducer;