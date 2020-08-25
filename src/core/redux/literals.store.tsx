type literals = { [key: string]: string };
export interface SLiterals {
  VSignIn: literals;
}

/** STATE */
const initialState: SLiterals = {
  VSignIn: {
    errorRequired: "El campo es requerido",
    errorEmail: "No es un email válido",
    errorAuth:
      "Usuario no encontrado. Prueba con <strong>janet.weaver@reqres.in<strong>",
    submitButtonTxt: "Acceso",
  },
};

/** REDUCERS */
const literals = function (state = initialState, action: any) {
  return state;
};

export default literals;
