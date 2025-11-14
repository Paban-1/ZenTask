import React, { useEffect } from "react";
import { Logo, FiChevronDown } from "../../constants/index.js";
import { motion } from "framer-motion";
// Import UseSelector & useDispatch
import { useDispatch, useSelector } from "react-redux";
import { fetchCurrentUserThunk } from "../../constants";
// Import getCurrentUser
// import { fetchCurrentUser } from "../../store/authSlice.js";

const TitleSection = ({ open }) => {
  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchCurrentUserThunk());
  }, [dispatch]);

  // if (status === "loading") return <p>Loading user...</p>;
  // if (!user) return <p>No active session. Please log in.</p>;

  return (
    <div className="mb-3 border-b border-slate-300 pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
        <div className="flex items-center gap-2">
          <Logo />
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
            >
              <span className="block text-xs font-semibold">
                {!user ? "Plese Login" : `${user.name}`}
              </span>
              <span className="block text-xs text-slate-500"></span>
            </motion.div>
          )}
        </div>
        {/* {open && <FiChevronDown className="mr-2" />} */}
      </div>
    </div>
  );
};

export default TitleSection;
