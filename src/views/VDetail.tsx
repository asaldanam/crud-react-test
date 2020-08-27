import If from "components/If";
import { signOut } from "core/stores/auth.store";
import { RootState } from "core/redux";
import {
  getUserDetails,
  requestUpdateUser,
  requestDeleteUser,
} from "core/stores/user-details.store";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

const VDetail: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();
  const form = useForm();
  const {
    email,
    first_name,
    last_name,
    avatar,
    error,
    name,
    updatedAt,
  } = useSelector((state: RootState) => state.userDetails);

  const onSubmit = (data: { [key: string]: string }) => {
    dispatch(
      requestUpdateUser({
        userId: id,
        ...data,
      })
    );
  };

  useEffect(() => {
    dispatch(getUserDetails(id));
  }, [dispatch, id]);

  return (
    <React.Fragment>
      <header>
        <button onClick={() => history.push("/users")}>GoBack</button>
        <button onClick={() => dispatch(signOut())}>Logout</button>
        <h1>Detail</h1>
      </header>

      <If condition={updatedAt}>
        <p>{updatedAt}</p>
      </If>
      <p>{name || `${first_name} ${last_name}`}</p>

      <If condition={!error}>
        <img src={avatar} alt={"avatar"} />
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <input
            name="first_name"
            defaultValue={first_name}
            ref={form.register({ required: "El campo es requerido" })}
            type="text"
          />
          <input
            name="last_name"
            defaultValue={last_name}
            ref={form.register({ required: "El campo es requerido" })}
            type="text"
          />
          <input
            name="email"
            defaultValue={email}
            ref={form.register({
              required: "El campo es requerido",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "asdf",
              },
            })}
            type="email"
          />
          <footer>
            <button onClick={() => dispatch(requestDeleteUser(id))}>
              Borrar
            </button>
            <button onClick={form.handleSubmit(onSubmit)}>Actualizar</button>
          </footer>
        </form>
      </If>

      <If condition={error?.status === 404}>
        <p>Error: user {id} not found</p>
      </If>
    </React.Fragment>
  );
};

export default VDetail;
