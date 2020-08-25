import { signIn } from "core/redux/auth.store";
import { RootState } from "core/redux/store";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const ViewSignIn: React.FC = () => {
  const dispatch = useDispatch();
  const literals = useSelector((state: RootState) => state.literals.VSignIn);
  const auth = useSelector((state: RootState) => state.auth);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: any) => {
    dispatch(signIn(data));
  };

  console.log(auth);

  const form = {
    email: "eve.holt@reqres.in",
    password: "cityslicka",
  };

  return (
    <React.Fragment>
      <div>Login</div>
      <div>
        <div>loading: {JSON.stringify(auth?.loading)}</div>
        <div>token: {auth?.token}</div>
        <div>error: {auth?.error}</div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}
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
        <p>
          {errors?.email?.type === "required" && literals?.errorRequired}
          {errors?.email?.type === "pattern" && errors.email.message}
        </p>

        {/* Password */}
        <input
          name="password"
          type="password"
          ref={register({
            required: "password",
          })}
        />
        <p>
          {errors?.password?.type === "required" && literals?.errorRequired}
        </p>

        {/* Submit */}
        <button type="submit">{literals?.submitButtonTxt}</button>
      </form>
      <p
        dangerouslySetInnerHTML={{ __html: auth?.error && literals?.errorAuth }}
      ></p>
    </React.Fragment>
  );
};

export default ViewSignIn;
