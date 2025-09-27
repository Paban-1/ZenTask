import React, { useState } from "react";
import Input from "../ReuseCompo/Input";
import { useSelector, useDispatch } from "react-redux";
import { setPassword, setUsername } from "../Features/invoice/invoiceSlice";

const Test = () => {
  const dispatch = useDispatch();
  const { userName, password } = useSelector((state) => state.invoice);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h1 className="text-xl font-bold mb-4">Reuseable Input Demo</h1>

      <Input
        label="userName"
        value={userName}
        onChange={(val) => dispatch(setUsername(val))}
        placeholder="Enter UserName"
      />

      <Input
        label="Password"
        value={password}
        onChange={(val) => dispatch(setPassword
          (val))}
        placeholder="Enter Password"
      />

      <div className="mt-4">
        <p>
          <strong>UserName:</strong> {userName}
        </p>
        <p>
          <strong>Password:</strong> {password}
        </p>
      </div>
    </div>
  );
};

export default Test;
