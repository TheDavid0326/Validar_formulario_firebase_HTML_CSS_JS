## Formulario de registro con Firebase

Este proyecto es un formulario web que permite a los usuarios registrarse e ingresar sus datos. La información se almacena en Firebase, una base de datos en la nube de Google.

**Características:**

* **Registro de usuarios:** Los usuarios pueden crear una cuenta completando un formulario con su nombre, correo electrónico y contraseña.
* **Validación de formulario:** El formulario valida la entrada del usuario para garantizar que el nombre esté completo, el correo electrónico tenga un formato válido y la contraseña tenga una longitud mínima.
* **Mensajes de error:** Se muestran mensajes de error claros para guiar al usuario en caso de que introduzca datos no válidos.
* **Almacenamiento en Firebase:** Los datos del usuario se guardan de forma segura en Firebase Firestore.

**Tecnologías utilizadas:**

* **HTML:** Estructura el formulario y los elementos de la página web.
* **CSS:** Estiliza la apariencia del formulario y los mensajes de error.
* **JavaScript:** Maneja la interacción del usuario con el formulario, realiza la validación de datos y guarda la información en Firebase.
* **Firebase:** Plataforma de Google que proporciona servicios para el desarrollo de aplicaciones móviles y web. En este caso, se utiliza Firebase Firestore, una base de datos NoSQL en la nube.

**Funcionamiento:**

1. El usuario completa el formulario con su nombre, correo electrónico y contraseña.
2. Al hacer clic en el botón "Enviar", se activa el evento `submit` del formulario.
3. El código JavaScript valida los datos ingresados:
    * El nombre no debe estar vacío.
    * El correo electrónico debe tener un formato válido (ej. usuario@ejemplo.com).
    * La contraseña debe tener una longitud mínima (se puede ajustar la complejidad según sea necesario).
4. Si la validación es exitosa, se guarda la información del usuario en una colección llamada "users" dentro de la base de datos Firebase Firestore.
5. Se muestra un mensaje de confirmación al usuario y se limpia el formulario.
6. En caso de errores de validación, se muestran mensajes específicos para cada campo indicando el problema.

**Aprendizajes clave:**

* **Validación de formularios:** Implementar lógica para garantizar que los usuarios ingresen datos correctos en el formulario.
* **Firebase Firestore:** Conocer los conceptos básicos para almacenar y recuperar datos de una base de datos NoSQL en la nube.
* **Evento submit:** Manejar el envío del formulario para procesar los datos del usuario.

**Consideraciones:**

* Este ejemplo utiliza una validación básica del correo electrónico. Se pueden implementar expresiones regulares más estrictas para garantizar un formato correcto.
* La complejidad de la contraseña también se puede ajustar según los requisitos de seguridad de la aplicación.
* Recuerda reemplazar los valores de `firebaseConfig` con tus propias credenciales de Firebase.

**Cómo utilizar:**

1. Clona este repositorio.
2. Crea un proyecto en Firebase y configura la base de datos Firestore.
3. Genera un archivo de configuración de Firebase y reemplaza los valores de `firebaseConfig` en el código con tus credenciales.
4. Abre el archivo `index.html` en tu navegador.
5. Completa el formulario y haz clic en "Enviar".

**Licencia:**

[Especifica la licencia que utilizas, por ejemplo, MIT]

Este README describe el propósito del formulario, las funcionalidades que ofrece, las tecnologías utilizadas y cómo implementarlo en tu proyecto. También incluye información importante sobre la validación de datos y el uso de Firebase.