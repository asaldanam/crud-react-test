import React from "react";
import { useDispatch } from "react-redux";
import { getAuth } from "core/redux/auth.store";

const ViewSignIn: React.FC = () => {
  const dispatch = useDispatch();

  const form = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };

  return (
    <React.Fragment>
      <button onClick={() => dispatch(getAuth(form))}>SET_TOKEN</button>
      <div>Login</div>
    </React.Fragment>
  );
};

export default ViewSignIn;
