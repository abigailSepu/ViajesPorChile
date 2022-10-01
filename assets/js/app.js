
//Funcionamiento Tooltips
$(function () {
    $('[data-bs-toggle="tooltip"]').tooltip();  
  });

//Modificacion NAV cuando el scroll se mueve
$(document).scroll(function(){
const y=$('html').scrollTop();
y > 260 ? $('nav').addClass('nav-black') : $('nav').removeClass('nav-black');
})

//Validaciones del formulario
$(function () {
    'use strict'
    var forms = document.querySelectorAll('.needs-validation')
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }else{
            alert("Su mensaje ha sido enviado con exito.")
            $('#formulario')[0].reset();
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()