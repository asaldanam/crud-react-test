type literals = { [key: string]: string };
export interface ILiteralsState {
  errorMessages: literals;
  topbar: literals;
  VSignIn: literals;
  VList: literals;
}

/** STATE */
const initialState: ILiteralsState = {
  errorMessages: {
    required: "El campo es requerido",
    email: "No es un email válido",
  },
  topbar: {
    goBack: "Volver",
    signOut: "Salir",
  },
  VSignIn: {
    errorServer: "Error crítico del sistema. Inténtelo más tarde",
    errorAuth: "Usuario no encontrado. Usa janet.weaver@reqres.in",
    submitButtonTxt: "Acceso",
    emailLabel: "Correo electrónico",
    passwordLabel: "Contraseña",
  },
  VList: {
    title: "Listado de usuarios",
  },
};

/** REDUCERS */
const literals = function (state = initialState, action: any) {
  return state;
};

export default literals;
