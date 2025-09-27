import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  password: "",
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.userName = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    resetInvoice: () => initialState,
  },
});

export const { setUsername, setPassword, resetInvoice } = invoiceSlice.actions;
export default invoiceSlice.reducer;
