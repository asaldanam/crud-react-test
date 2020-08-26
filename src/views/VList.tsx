import { signOut } from "core/redux/auth.store";
import React from "react";
import { useDispatch } from "react-redux";

const VList: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <React.Fragment>
      <div>
        <button onClick={() => dispatch(signOut())}>Logout </button>
      </div>
    </React.Fragment>
  );
};

export default VList;
