This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Librerías adicionales usadas 
- Typescript: Para mantener el código tipado. (Al menos interfaces de entrada y salida propias como las `Props` y las API)
- Axios: Para abstraer la captura de códigos de error de `Fetch`.
- React Hook Form: Abstrae el manejo del estado de los campos.

## Características y funcionalidades implementadas
- Mantengo la sesión en el `localStorage` para evitar que se pierda por recargar o cerrar la pestaña. La idea es que el comportamiento con el login sea lo más user friendly posible.
- Aunque no se pedía expresamente, he bloqueado la ruta `/login` de tal forma que solo sea accesible sin sesión iniciada. De esta forma, evito que el usuario entre aquí sin desloguear primero.

## Scripts

Versión de Node: 12.16.1
Versión de NPM: 6.13.4

### `yarn start`
Entorno de desarrollo en [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`
Compila para producción en la carpeta `build`