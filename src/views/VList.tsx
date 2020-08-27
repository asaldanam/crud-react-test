import { signOut } from "core/stores/auth.store";
import { RootState } from "core/redux";
import { IUser } from "core/stores/user-details.store";
import { getUsers } from "core/stores/users.store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VList: React.FC = () => {
  const dispatch = useDispatch();

  const { data }: { data: IUser[] } = useSelector(
    (state: RootState) => state.users
  );

  useEffect(() => {
    dispatch(getUsers(1));
  }, [dispatch]);

  return (
    <React.Fragment>
      <header>
        <button onClick={() => dispatch(signOut())}>Logout </button>
      </header>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.first_name}</Link>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default VList;
