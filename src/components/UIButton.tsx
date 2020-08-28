import styled from "styled-components";
import theme from "core/theme";
import React, { ReactNode } from "react";
import Ripples from "react-ripples";
import spinnerImg from "assets/spinner.svg";
import { ARotate360 } from "animations/keyframes";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  loading?: boolean;
  ghost?: boolean;
  minwidth?: boolean;
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

const StyledRippleEffect = styled<any>(Ripples)`
  border-radius: ${theme.borderRadius.main};
`;

const StyledButton = styled<any>("button")`
  cursor: ${({ disabled }) => disabled && "not-allowed"};
  display: flex;
  padding: 1rem 1.25rem;
  justify-content: center;
  align-items: center;
  line-height: 1.4;
  padding: 1rem 1.25rem;
  text-transform: uppercase;
  font-weight: 700;
  width: 100%;
  outline: none;
  min-width: ${({ minwidth }) => (minwidth ? "16rem" : "unset")};
  background: ${({ ghost }) => (ghost ? "transparent" : theme.color.gold)};
  color: ${({ ghost }) => (ghost ? theme.color.gold : theme.color.dark)};
`;
