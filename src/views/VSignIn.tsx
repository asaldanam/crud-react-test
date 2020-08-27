import { signIn } from "core/stores/auth.store";
import { RootState } from "core/redux";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import If from "components/If";
const ViewSignIn: React.FC = () => {
  const dispatch = useDispatch();
  const literals = useSelector((state: RootState) => state.literals.VSignIn);
  const auth = useSelector((state: RootState) => state.auth);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: any) => {
    dispatch(signIn(data));
  };

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="email"
          type="text"
          ref={register({
            required: "Required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: literals?.errorEmail,
            },
          })}
        />
        <If condition={errors?.email?.type === "required"}>
          <p>{literals?.errorRequired}</p>
        </If>
        <If condition={errors?.email?.type === "pattern"}>
          <p>{literals?.errorEmail}</p>
        </If>
        <input
          name="password"
          type="password"
          ref={register({
            required: "password",
          })}
        />
        <If condition={errors?.password?.type === "required"}>
          <p>{literals?.errorRequired}</p>
        </If>
        <button type="submit">{literals?.submitButtonTxt}</button>
      </form>

      <If condition={auth?.error?.status && auth?.error?.status === 400}>
        <p>
          {auth?.error?.status === 400
            ? literals?.errorAuth
            : literals?.errorServer}
        </p>
      </If>
    </React.Fragment>
  );
};

export default ViewSignIn;
