import { configureStore } from "@reduxjs/toolkit";
import invoiceReducer from "../Features/invoice/invoiceSlice";

export const store = configureStore({
  reducer: {
    invoice: invoiceReducer,
  },
});

