# Login React

Este proyecto tiene como objetivo desarrollar un login basico con react, implementando redireccionamientos, hooks y mas.

## Funcionalidades principales

El login contiene las siguientes funcionalidades principales:

**Login Basado en credenciales**
   - Usando un token JWT y las credenciales del usuario(name, password) podremos verificar síesta presente en nuestra base de datos para loguearse satisfactoriamente.

     
## Tecnologías utilizadas

El proyecto  utilizará las siguientes tecnologías:

- Lenguaje de programación: [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)
- Framework Backend: [Node.js](https://nodejs.org/)
- Framework Frontend: [React](https://es.react.dev)
- Base de datos: [MongoDB](https://www.mongodb.com/)
- Framework: [Express.js](https://expressjs.com/)


## Configuración

### Instalación

1. Clona este repositorio en tu máquina local:

   ```shell
   git clone https://github.com/tu-usuario/nombre-del-proyecto.git
   ```

2. Navega hasta el directorio del proyecto:

   ```shell
   cd nombre-del-proyecto
   ```

3. Instala las dependencias del proyecto:

   ```shell
   npm i
   ```
4. Inicia el servidor mediante el comando `npm run start`.
 
5. Inicia el servidor frontend mediante el comando `npm run dev`

6. Una vez ambos servidores esten en funcionamiento, la aplicacion funcionara en el puerto que vite especifique :)


### ENV

Antes de ejecutar la aplicación, asegúrate de crear y configurar el archivo de entorno (`.env`) con la siguiente estructura y reemplazar los valores por los adecuados:

```plaintext

# Servidor Express
SERVER = {"hostname": "127.25.32.125", "port": 9080}

# Conexión a la base de datos
USER_ATLAS = "angelvelasco"
PASSWORD = ""
DB = "login"

# Clave privada para JWT
PRIVATE_KEY = "ANGEL"
```

### Dependencias

El proyecto utiliza las siguientes dependencias:

Las siguientes dependencias se utilizan en este proyecto:

* **Dependencias:**
    * cors ^2.8.5
    * dotenv 16.3.1
    * express 4.18.2
    * express-rate-limit ^7.0.0
    * express-session ^1.17.3
    * jose 4.14.6
    * mongodb 6.0.0
    * passport 0.6.0
    * passport-http-bearer 1.0.1
    * react ^18.2.0
    * react-dom ^18.2.0
    * react-router-dom 6.16.0
* **Dependencias de desarrollo:**
    * @types/react ^18.2.15
    * @types/react-dom ^18.2.7
    * @vitejs/plugin-react-swc ^3.3.2
    * eslint ^8.45.0
    * eslint-plugin-react ^7.32.2
    * eslint-plugin-react-hooks ^4.6.0
    * eslint-plugin-react-refresh ^0.4.3
    * express-routes-versioning ^1.0.1
    * nodemon 3.0.1
    * vite ^4.4.5

## Ejemplo de Login

###  `login`

Usa estos datos de ejemplo para loguearte satisfactoriamente.

  ```json
  {
    "name": "John Doe",
    "password": "password123"
  }
  ```

> 🔔 **Listo:**
> Ya estas logueado, se te mostrara un alert dandote la bienvenida.

> 📌  **Nota:**
> En caso de ingresar con credenciales incorrectas, se te mostrara un mensaje avisandotelo y regresaras al home.


## Autor

**Angel David Velasco**

## Licencia

Este proyecto está bajo la Licencia MIT. Puedes consultar el archivo LICENSE para más detalles.