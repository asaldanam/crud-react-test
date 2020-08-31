import styled from "styled-components";
import theme from "core/theme";

export const Avatar = styled<any>("div")`
  width: ${({ size }) => size || "4rem"};
  height: ${({ size }) => size || "4rem"};
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-color: ${theme.color.medium};
  /* bacl: ${({ loading }) => loading} */
`;