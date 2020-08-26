import React, { ReactNode } from "react";

/** Fragment para renderizado condicional */
const If: React.FC<{
  children?: ReactNode;
  condition: boolean;
}> = ({ condition, children }) => {
  return <React.Fragment>{condition && children}</React.Fragment>;
};

export default If;
