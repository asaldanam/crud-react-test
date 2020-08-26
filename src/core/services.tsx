import axios from "axios";

const URL_PATH = "https://reqres.in/api";

/** Body para /login */
export interface IAuthTokenBody {
  email: string;
  password: string;
}

/** Devuelve el token de inicio de sesión */
export async function fetchAuthToken(body: IAuthTokenBody) {
  const response = await axios.post(URL_PATH + "/login", body);
  return response;
}
