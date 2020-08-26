This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Scripts
Versión de Node: 12.16.1
Versión de NPM: 6.13.4

### `yarn start`
Entorno de desarrollo en [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`
Compila para producción en la carpeta `build`

## Memoria de la prueba

### Librerías adicionales usadas 
- `Typescript`: Para mantener el código tipado. No he aprovechado todas las características en esta prueba, pero quería mantener tipadas al menos interfaces de entrada y salida propias como las `Props` de los componentes pero sin usar JS + PropTypes.
- `Axios`: Para abstraer la captura de códigos de error del método `Fetch` nativo y soportar compatibilidad.
- `React Hook Form`: Abstrae el manejo del estado de los campos.

### Características y funcionalidades implementadas adicionalmente
- Mantengo la sesión en el `localStorage` para evitar que se pierda por recargar o cerrar la pestaña. La idea es que el comportamiento con el login sea lo más user friendly posible.
- Aunque no se pedía expresamente, he bloqueado la ruta `/login` de tal forma que solo sea accesible sin sesión iniciada. De esta forma, fuerzo a que el usuario tenga que deslogar para regresar a esta vista.
- Implementado feedback al usuario de cuándo la aplicación está en un estado de loading (spinners en botones, skeletons en listados...)

### Aclaraciones de funcionamiento y otras consideraciones
- He manejado el front como si integrara contra un Backend funcional. Al borrar (por ejemplo) el back no elimina el usuario de su base de datos. Por tanto en mi prueba al regresar a "/users" el usuario eliminado sigue apareciendo ya que el endpoint lo devuelve. Mismo con actualizar y todas las operaciones.
- Dado que en `reqres.in` el token consumido para validar la sesión en las peticiones, yo no lo mando. A la práctica, solo lo uso para proteger rutas en el front. En un escenario habitual esto sería una violación de seguridad ya que desde las DevTools se podría desactivar este guard.
- He preferido pecar de comentar en exceso que por carencia, aunque en algunos casos creo que el código se entendía bien por sí mismo.
- El Split de código está pensado para una aplicación más grande, separando los fetch, las sagas y los stores. Para el caso de redux he preferido separar los stores por ámbito pero mantener juntos actions types/creators/reducers/states. En una aplicación más grande quizá dividiría cada store en múltiples ficheros.
- Al ser la lógica de los endpoints muy simple se podrían haber reutilizado funciones de sagas, action creators incluso reducers. Sin embargo, he preferido mantenerlos aislados para que se vea una posible arquitectura real donde la complejidad de las APIs pida mantener cada store/saga/servicio aislado.
- En general, he usado en Redux los mismos modelos que me devuelve la API sin mucha transformación por su simplicidad. En otras circustancias, habría creado mis propios states de redux y habría mapeado la data de las API a mi store.
- El token lo guardo en Redux por unificarlo en el state manager y garantizar el flujo funcional puro que se pedía en la prueba, sin embargo para evitar un Render del Router adicional por norma general hubiera hecho una excepción con esta parte y lo hubiera manejado directamente desde el local/session Storage.
- La configuración de prettier y eslint es la de por defecto.

### Implementaciones que no se han realizado como especifica la prueba
- En el PDF de la prueba se especifica que los credenciales van en query params, sin embargo en la documentación de `reqres.in` se especifica que los credenciales van por body. He supuesto que se trataba de algo erróneo en el PDF y lo he implementado tal y como especifica la documentación. 

## To DO
- Captura de error en el listado y el detalle
- Lazy loading con react suspense en las vistas