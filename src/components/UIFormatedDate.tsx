import React, { ReactNode } from "react";
import moment from "moment";
import "moment/locale/es";
/** Fragment para renderizado condicional */
export const FormatedDate: React.FC<{
  /** En formato ISO String */
  date?: string;
  /** Texto a mostrar en caso de que no exista fecha */
  fallback?: string;
}> = ({ date, fallback }) => {
  const formatedDate = moment(date).locale("es-ES").calendar();
  return <strong>{date ? formatedDate : fallback}</strong>;
};
