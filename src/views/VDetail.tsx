import If from "components/If";
import { signOut } from "core/redux/auth.store";
import { RootState } from "core/redux/store";
import {
  getUserDetails,
  requestUpdateUser,
  requestDeleteUser,
} from "core/redux/user-details.store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const VDetail: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const { email, first_name, last_name, avatar, error } = useSelector(
    (state: RootState) => state.userDetails
  );

  useEffect(() => {
    dispatch(getUserDetails(id));
  }, [dispatch, id]);

  return (
    <React.Fragment>
      <header>
        <button onClick={() => history.push("/users")}>GoBack</button>
        <button onClick={() => dispatch(signOut())}>Logout</button>
        <div>Detail</div>
      </header>

      <If condition={!error}>
        <img src={avatar} alt={"avatar"} />
        <p>
          <span>{last_name}</span> <span>{first_name}</span>
        </p>
        <p>{email}</p>
      </If>

      <If condition={error?.status === 404}>
        <p>Error: user {id} not found</p>
      </If>

      <footer>
        <button onClick={() => dispatch(requestDeleteUser(id))}>Borrar</button>
        <button
          onClick={() =>
            dispatch(
              requestUpdateUser({
                userId: id,
                job: "Prueba",
                name: "Nuevo nombre",
              })
            )
          }
        >
          Actualizar
        </button>
      </footer>
    </React.Fragment>
  );
};

export default VDetail;
