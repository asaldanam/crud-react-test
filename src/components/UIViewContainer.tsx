import styled from "styled-components";
import theme from "core/theme";

export const AppContainer = styled.main`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  max-width: ${theme.wrapper.main};
  padding: 0 ${theme.padding.mobile};
`;
