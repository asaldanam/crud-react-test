type literals = { [key: string]: string };
export interface ILiteralsState {
  VSignIn: literals;
}

/** STATE */
const initialState: ILiteralsState = {
  VSignIn: {
    errorRequired: "El campo es requerido",
    errorEmail: "No es un email válido",
    errorServer: "Error crítico del sistema. Inténtelo más tarde",
    errorAuth: "Usuario no encontrado. Prueba con janet.weaver@reqres.in",
    submitButtonTxt: "Acceso",
  },
};

/** REDUCERS */
const literals = function (state = initialState, action: any) {
  return state;
};

export default literals;