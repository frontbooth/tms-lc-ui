import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";


interface MessageState {
  message: string;
}

const initialState: MessageState = {
  message: "",
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    setMessage: (state, action: PayloadAction<string>) => {
      state.message = action.payload; 
    },
    clearMessage: (state) => {
      state.message = ""; 
    },
  },
});

export const getMessage = (state: { message: MessageState }) => state.message.message;

export const { setMessage, clearMessage } = messageSlice.actions;
export default messageSlice.reducer;
