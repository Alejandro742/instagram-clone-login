//seleccionamos todos los inputs
const inputs = document.querySelectorAll('input');
const login_boton = document.getElementById('login_boton');
//recorremos el arreglo de inputs
inputs.forEach(input=>{
    //le asignamos un evento a cada input
    //el evento está atento a los cambios del input
    input.addEventListener('input',(e) => {
        login_boton.classList.remove('btn-disabled');
        login_boton.classList.add('btn-primary');
        //le agregamos una clase al hermano anterior del input, o sea al span
        input.previousElementSibling.classList.add('move-span');
        //si el input queda vacío entonces el span regresa a su lugar
            if(e.target.value===''){
                input.previousElementSibling.classList.remove('move-span');
                login_boton.classList.remove('btn-primary');
                login_boton.classList.add('btn-disabled');
                
            }
    });
});