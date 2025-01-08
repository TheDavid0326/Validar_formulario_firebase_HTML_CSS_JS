const firebaseConfig = {
    apiKey: "AIzaSyDZL4McVsg1j1apIO0XQwe-UwYyDkiUC-g",
    authDomain: "datos-de-formulario-a6da7.firebaseapp.com",
    projectId: "datos-de-formulario-a6da7",
    storageBucket: "datos-de-formulario-a6da7.firebasestorage.app",
    messagingSenderId: "794080891571",
    appId: "1:794080891571:web:f24de33d605ca2677856c6",
    measurementId: "G-E0CV2EMQ6N"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();


//Enlazamos con el DOM
const form=document.getElementById('form');

//Escuchamos el evento submit del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault(); //Evitamos que se recargue la página y se reseteen los campos

    //Validamos el campo nombre
    const name=document.getElementById('name');
    const nameError=document.getElementById('nameError');

    if (name.value.trim() == "") {
        nameError.textContent= "El campo nombre es obligatorio";
        nameError.classList.add('error-message');//Agregamos la clase para que se ponga en rojo según CSS
    } else {
        nameError.textContent="";
        nameError.classList.remove('error-message');
    }

    //Validamos el campo email
    const email=document.getElementById('email');
    const emailError=document.getElementById('emailError');
    const pattern= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/            
    // /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/

    if (pattern.test(email.value)) {
        emailError.textContent="";
        emailError.classList.remove('error-message');
        
    } else {
        emailError.textContent= "El email no es válido";
        emailError.classList.add('error-message');//Agregamos la clase para que se ponga en rojo según CSS
    }

    //Validamos el campo contraseña

    const password=document.getElementById('password');
    const passwordError=document.getElementById('passwordError');
    //const patternPassword= /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    /* Explicación del patrón:
        At least one upper case, (?=.*?[A-Z])
        At least one lower case, (?=.*?[a-z])
        At least one digit, (?=.*?[0-9])
        At least one special character, (?=.*?[#?!@$%^&*-])
        Minimum eight in length .{8,} (with the anchors)
    */

    if (password.value.length < 8) {
        passwordError.textContent= "La contraseña debe tener al menos 8 caracteres";
        passwordError.classList.add('error-message');//Agregamos la clase para que se ponga en rojo según CSS
                
    } else {
        passwordError.textContent="";
        passwordError.classList.remove('error-message');
    }

    //Si todos los campos son válidos, enviamos el formulario

    if (!nameError.textContent && !emailError.textContent && !passwordError.textContent) {
        
        //Guardar los datos en firebase
        db.collection("users").add({
            name: name.value,
            email: email.value,
            password: password.value
        })
        .then((docRef) => {
            alert('El formulario se ha enviado con éxito', docRef.id);
            form.reset();
        })
        .catch((error) => {
            alert(error);
        });
             
    }
    
})