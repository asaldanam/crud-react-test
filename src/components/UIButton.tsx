import styled from "styled-components";
import theme from "core/theme";
import React, { ReactNode } from "react";
import Ripples from "react-ripples";
import spinnerImg from "assets/spinner.svg";
import { ARotate360 } from "animations/keyframes";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  loading?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
  children,
  loading,
  ...buttonAttr
}) => {
  return (
    <StyledRippleEffect>
      <Spinner
        src={spinnerImg}
        alt="loading"
        style={{ display: loading ? "block" : "none" }}
      />
      <StyledButton {...buttonAttr}>
        <span style={{ opacity: loading ? 0 : 1 }}>{children}</span>
      </StyledButton>
    </StyledRippleEffect>
  );
};

const Spinner = styled.img`
  position: absolute;
  top: calc(50% - 18px);
  left: calc(50% - 18px);
  width: 36px;
  opacity: 0.3;
  animation: ${ARotate360} 2s linear infinite;
`;

const StyledRippleEffect = styled(Ripples)`
  border-radius: ${theme.borderRadius.main};
  box-shadow: ${theme.boxShadow.main};
  width: 100%;
  max-width: 16rem;
`;

const StyledButton = styled<any>("button")`
  text-transform: uppercase;
  background: ${theme.color.gold};
  color: ${theme.color.dark};
  cursor: ${({ disabled }) => disabled && "not-allowed"};
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.25rem;
  line-height: 1;
  width: 100%;
`;
