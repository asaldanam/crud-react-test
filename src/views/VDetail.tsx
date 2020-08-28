import { Button } from "components/UIButton";
import { If } from "components/UIIf";
import { User } from "components/UIUser";
import { ViewContainer } from "components/UIViewContainer";
import { RootState } from "core/redux";
import {
  getUserDetails,
  requestDeleteUser,
  requestUpdateUser,
} from "core/stores/user-details.store";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FormGroup, Input, Hint } from "components/UIFormElements";
import { Avatar } from "components/UIAvatar";
import styled from "styled-components";
import { tablet } from "core/theme";

const VDetail: React.FC = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const form = useForm();
  const user = useSelector((state: RootState) => state.userDetails);

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
    <ViewContainer>
      <If condition={!user.error}>
        <Header>
          <Avatar
            style={{ backgroundImage: `url(${user.avatar})` }}
            size="7rem"
          />
        </Header>
        <Form onSubmit={form.handleSubmit(onSubmit)} autoComplete="off">
          <FormGroup cols="6" sidePadding="1rem">
            <Input
              name="first_name"
              defaultValue={user.first_name}
              ref={form.register({ required: "El campo es requerido" })}
              type="text"
            />
            <Hint error={form.errors?.first_name?.message} />
          </FormGroup>
          <FormGroup cols="6" sidePadding="1rem">
            <Input
              name="last_name"
              defaultValue={user.last_name}
              ref={form.register({ required: "El campo es requerido" })}
              type="text"
            />
            <Hint error={form.errors?.last_name?.message} />
          </FormGroup>
          <FormGroup sidePadding="1rem">
            <Input
              name="email"
              defaultValue={user.email}
              ref={form.register({
                required: "El campo es requerido",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "asdf",
                },
              })}
              type="email"
            />
            <Hint error={form.errors?.email?.message} />
          </FormGroup>
          <Footer>
            <Button ghost onClick={() => dispatch(requestDeleteUser(id))}>
              Borrar
            </Button>
            <Button onClick={form.handleSubmit(onSubmit)}>Actualizar</Button>
          </Footer>
        </Form>
      </If>

      <If condition={user.error?.status === 404}>
        <p>Error: user {id} not found</p>
      </If>
    </ViewContainer>
  );
};

const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`;

const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  margin: 0 -1rem;
`;

const Footer = styled.footer`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  > *:not(:last-child) {
    margin-right: 1rem;
  }
  > * {
    width: 100%;
    ${tablet} {
      width: auto;
    }
  }

  ${tablet} {
    justify-content: flex-end;
  }
`;

export default VDetail;
