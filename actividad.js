// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
})()

const expresiones = {
	celular: /^9[0-9]{8}$/, // inicia en 9 con 9 cifras
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,20}$/, // texto normal hasta 20 digitos
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //usuario texto normas mas simbolo @ 
}

formulario.addEventListener('submit', (e) => {
	e.preventDefault();   //No limpiar secciones
});

//validar email y numero
document.getElementById('formulario').addEventListener('submit', (e) => {
    e.preventDefault(); 

    let gmail = document.getElementById('emails').value
    let numeros = document.getElementById('numeros').value


     if(gmail == null || gmail.length == 0 || expresiones.correo.test(gmail)){
        alertify.error('ingrese su email')
        document.getElementById('correo').style.boxShadow = "0, 0, 5px, red"

    }else if(numeros == null || celular.length == 0 || expresiones.celular.test(gmail)){
        alertify.error('su numero de 9 digitos')
        document.getElementById('correo').style.boxShadow = "0, 0, 5px, red"
    }
})