import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCurrentUserThunk, BlocakInTextCard } from "../../constants";
import Test from "../ReuseItems/CartItems/Test"

const DashboardIndexPage = () => {
  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchCurrentUserThunk());
  }, [dispatch]);

  return (
    <div className="border border-black text-black">
      <div className="border border-black">
        <h2 className="md:text-4xl text-xl font-extralight tracking-tighter">{`Welcome ${user.name} 🔅`}</h2>
        <p>Your workspace is ready.</p>

        {/* <BlocakInTextCard tag="This is Tag " examples="Example This is lala" text="This is text...." /> */}

       <h2>Let’s help you organize your work with clarity and speed.</h2>

       <h2>Quick Feature Overview</h2>
       <h2>Create Tasks</h2>
       <p>Add tasks, deadlines, and priorities effortlessly.</p>

       <h2>Collaborate in Real Time</h2>
       <p>Invite teammates and work together instantly.</p>

       <h2>Track Progress</h2>
       <p>Stay updated with clean progress insights.</p>

       <h2>Sync Everywhere</h2>
       <p>Your tasks stay updated across all devices.</p>
      </div>
    </div>
  );
};

export default DashboardIndexPage;
