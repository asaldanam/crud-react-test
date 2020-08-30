import { keyframes } from "styled-components";

export const AFadeInOpacity = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

export const ARotate360 = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(-359deg)
  }
`;
