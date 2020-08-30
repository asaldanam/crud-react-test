import styled from "styled-components";
import theme from "core/theme";
import { AFadeInOpacity } from "animations/keyframes";
import React, { ReactNode } from "react";

export const FormGroup = styled<any>("div")`
  width: ${({ cols }) => (cols * 100) / 12 || 100}%;
  padding: ${({ sidePadding }) => `0 ${sidePadding}`};
`;

export const Input = styled.input`
  background: ${theme.color.lighter + "11"};
  width: 100%;
  color: white;
  outline: none;
  display: block;
  padding: 0.9375rem 1.125rem;
  font-size: 1rem;
  border-radius: 3px;
  box-shadow: 0px 0px 0px 2px ${theme.color.sky + "00"};
  transition: box-shadow 0.3s linear;
  ::placeholder {
    color: ${theme.color.light};
  }
  :focus {
    box-shadow: 0px 0px 0px 2px ${theme.color.sky + "99"};
  }
`;

const HintMessageBox = styled.div`
  color: ${theme.color.light};
  font-size: 0.875rem;
  margin: 0.25rem 0 0.75rem 0;
  min-height: 1.25rem;
  animation: ${AFadeInOpacity} 1s linear;
`;

const HintText = styled<any>("p")`
  margin: 0;
  animation: ${AFadeInOpacity} 0.15s linear;
  text-align: ${(props) => props.center && "center"};
`;

/** Mensajes de error e indicaciones */
export const Hint: React.FC<{
  error: string;
  center?: boolean;
} | null> = ({ error, center }) => {
  return (
    <HintMessageBox role={error ? "alert" : "presentation"}>
      {error && <HintText center={center}>{error}</HintText>}
    </HintMessageBox>
  );
};

interface ILabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children?: ReactNode;
  hidden?: boolean;
}

const StyledLabel = styled<any>("label")`
  position: ${(props) => props.hidden && "absolute"};
  width: ${(props) => props.hidden && "0%"};
  height: ${(props) => props.hidden && "0%"};
`;

/** Mensajes de error e indicaciones */
export const Label: React.FC<ILabelProps> = ({
  hidden,
  children,
  ...labelAttrs
}) => {
  return (
    <StyledLabel hidden={hidden} {...labelAttrs}>
      {children}
    </StyledLabel>
  );
};
