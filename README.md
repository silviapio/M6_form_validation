# M6_form_validation
## Objetivo
Validar formularios con JavaScript, sin usar la etiqueta 'required'
## Formularios
### Sign In (index.html)
Modal para el Sign In con 2 campos: Email + Password. Aquí solo se valida que los campos no estén vacíos cuando el usuario clica en el botón SIGN IN.  Cada vez que se abre el modal, los mensajes de error son eliminados y los campos se limpian.  Contiene un enlace a register.html (Register here).  El código JS se encuentra en src/js/validation.js .
### Registration Form (register.html)
Form para registro con campos: First name, Family name, Email, Password, Repeat password, City, Country (select), Zip, check para Terms and Conditions. Los campos tienen diferentes criterios de validación:
- First name, Family name: deben ser de al menos 3 caracteres.
- Email: no puede ser vacío y tiene que tener un formato email ((letras minúsculas, mayusculas, números, -, _, .)@(letras minúsculas, mayusculas, números, -).(entre 2 y 4 letras minúsculas, mayusculas, números).
- Password: debe ser de al menos 8 caracteres y coincidir con Repeat password.
- Country: debe tener un País seleccionado.
- Terms and Conditions: tiene que estar marcado.  
City y Zip no son obligatorios.  La validación se ejecuta cada vez que el usuario apreta el botón Register.  Si hay un error, el submit se interrumpe y cuando el usuario se posiciona en un campo y sale (blur), el mensaje de error desaparece.  El formulario se limpia cuando el usuario apreta el botón Clear.  El código JS se encuentra en src/js/validationRegister.js .
## Deploy
El deployment se encuentra en este enlace: 
