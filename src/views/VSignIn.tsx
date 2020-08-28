import decorationImg from "assets/decoration.svg";
import logo from "assets/logo.svg";
import { Button } from "components/UIButton";
import { FormGroup, Hint, Input, Label } from "components/UIFormElements";
import { ViewContainer } from "components/UIViewContainer";
import { RootState } from "core/redux";
import { signIn } from "core/stores/auth.store";
import theme, { tablet } from "core/theme";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const ViewSignIn: React.FC = () => {
  const dispatch = useDispatch();
  const literals = useSelector((state: RootState) => state.literals.VSignIn);
  const errorMessages = useSelector(
    (state: RootState) => state.literals.errorMessages
  );
  const auth = useSelector((state: RootState) => state.auth);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data: any) => {
    dispatch(signIn(data));
  };

  console.log(errorMessages);

  return (
    <ViewContainer
      background={`linear-gradient(180deg, ${theme.color.darker} 0%, ${theme.color.medium} 100%)`}
    >
      <Form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Logo src={logo} alt="logo" />
        <FormGroup>
          <Label htmlFor="email" hidden>
            {literals.emailLabel}
          </Label>
          <Input
            name="email"
            type="text"
            placeholder={literals.emailLabel}
            ref={register({
              required: errorMessages?.required,
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: errorMessages?.email,
              },
            })}
          />
          <Hint error={errors?.email?.message} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password" hidden>
            {literals.passwordLabel}
          </Label>
          <Input
            name="password"
            type="password"
            placeholder={literals.passwordLabel}
            ref={register({
              required: errorMessages?.required,
            })}
          />
          <Hint error={errors?.password?.message} />
        </FormGroup>
        <Hint
          center
          error={
            auth?.error?.status &&
            (auth?.error?.status === 400
              ? literals?.errorAuth
              : literals?.errorServer)
          }
        />
        <Button
          type="submit"
          loading={auth.loading}
          disabled={auth.loading}
          minwidth
        >
          {literals?.submitButtonTxt}
        </Button>
      </Form>
      <Decoration src={decorationImg} alt="decoration" role="presentation" />
    </ViewContainer>
  );
};

export default ViewSignIn;

const Logo = styled.img`
  width: 14rem;
  display: block;
  margin: 0 auto 3rem auto;
`;

const Form = styled.form`
  display: flex;
  flex-flow: column;
  place-items: center center;
  margin: 0 auto;
  width: 100%;
  max-width: 24rem;
  padding: 3rem 1rem 0 1rem;
  padding-top: 15vh;
  ${tablet} {
    padding-top: 20vh;
    /* margin-top: 20vh; */
  }
`;

const Decoration = styled.img`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  opacity: 0.1;
`;
