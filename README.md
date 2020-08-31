This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Readme
Versión de Node: 12.16.1
Versión de NPM: 6.13.4
Compatibilidad: ES6 Navegadores evergreen (Chrome, Firefox, Edge, Safari)

### `yarn install`
Para instalación de dependencias

### `yarn start`
Entorno de desarrollo en [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn build`
Compila para producción en la carpeta `build`

## Memoria de la prueba

### Librerías adicionales usadas 
- `Typescript`: Para mantener el código tipado. No está tipado absolutamente todo en esta prueba, lo he usado más bien como un sustituto de PropTypes y para tipar mis propias interfaces, no las de la librería.
- `Axios`: Para abstraer la captura de códigos de error del método `Fetch` nativo y soportar compatibilidad.
- `React Hook Form`: Abstrae el manejo del estado de los campos.
- `React Ripples`: Para implementar un ripple effect sin importar material ui.
- `Anime JS`: Para animación de SVG del logo.

### Características y funcionalidades implementadas adicionalmente
- **Mantengo la sesión en el `localStorage`** para evitar que se pierda por recargar o cerrar la pestaña. La idea es que el comportamiento con el login sea lo más user friendly posible.
- Aunque no se pedía expresamente, **he bloqueado la ruta `/login`** de tal forma que solo sea accesible sin sesión iniciada. De esta forma, fuerzo a que el usuario tenga que deslogar para regresar a esta vista.
- **He implementado `lazy loading`** para la descarga bajo demanda de los módulos de las vistas, divididas en diferentes `chunk`.

### Aclaraciones de funcionamiento y otras consideraciones

- **He manejado el front como si integrara contra un Backend funcional**. Al borrar (por ejemplo) el back no elimina el usuario de su base de datos. Por tanto en mi prueba al regresar a "/users" el usuario eliminado sigue apareciendo ya que el endpoint lo devuelve. Mismo con actualizar y todas las operaciones.

- **No se manda el token con las peticiones de listado y detalle** Esto es debido a que `reqres.in` no lo contempla en su API, es decir, el token sólo es usado para proteger las rutas en front. En un escenario real este token debería ser utilizado contra las APIs del back para verificar la autentificación correcta.

- El **token lo guardo en Redux** por unificarlo en el state manager y garantizar el flujo funcional puro que se pedía en la prueba, sin embargo para evitar un Render del Router adicional por norma general hubiera hecho una excepción con esta parte y lo hubiera manejado directamente desde el local/session Storage.

- **el 99% del CSS está generado a través de styled components** ya que entendí que os interesaba particularmente que estuviera maquetado con los sc, aunque algunos estilos globales los he dejado en SCSS para cumplir con el requisito de usar este precompilador.

### Implementaciones que no se han realizado como especifica la prueba
- En el PDF de la prueba se especifica que los credenciales van en query params, sin embargo en la documentación de `reqres.in` indica que los credenciales van por body. He supuesto que se trataba de algo erróneo en el PDF y lo he implementado tal y como especifica la documentación.