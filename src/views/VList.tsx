import { User } from "components/UIUser";
import { ViewContainer } from "components/UIViewContainer";
import { RootState } from "core/redux";
import { getUsers } from "core/stores/users.store";
import theme, { desktop, tablet } from "core/theme";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Title } from "components/UITitle";
import { setUserDetails } from "core/stores/user-details.store";

const VList: React.FC = () => {
  const dispatch = useDispatch();

  const data = useSelector((state: RootState) => state.users.data);
  const literals = useSelector((state: RootState) => state.literals.VList);

  useEffect(() => {
    dispatch(getUsers(1));
    dispatch(setUserDetails({}));
  }, [dispatch]);

  return (
    <ViewContainer>
      <Title>{literals?.title}</Title>
      <List>
        {data.map((user) => (
          <Item key={user.id}>
            <User
              id={user.id}
              name={user.first_name}
              surname={user.last_name}
              avatar={user.avatar}
              email={user.email}
              to={`/users/${user.id}`}
            />
          </Item>
        ))}
      </List>
    </ViewContainer>
  );
};

export default VList;

const List = styled.ul`
  margin: 0 -1rem;
  ${tablet} {
    display: flex;
    margin: 0 -0.5rem;
    flex-flow: row wrap;
  }
`;

const Item = styled.li`
  width: 100%;
  padding: 0.5rem 1rem;
  :nth-child(odd) {
    background: ${theme.color.light}11;
    ${tablet} {
      background: unset;
    }
  }
  ${tablet} {
    background: unset;
    /* margin-bottom: 0.5rem; */
    padding: 0.5rem;
    width: 50%;
  }
  ${desktop} {
    width: 33.3334%;
  }
`;
