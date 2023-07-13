document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formulario'); 
    const contenedorInputs = document.getElementById('inputText'); 
    const agregarInput = document.getElementById('agregar'); 
    const eliminarInput = document.getElementById('eliminar');

    let contadorInputs = 0;

    function crearInput() {
        const input = document.createElement('input'); 
        input.type = 'text'; 
        input.name = `input${contadorInputs}`;
        input.placeholder = 'Ingrese un dato'; 
  
        contenedorInputs.appendChild(input); 
  
        contadorInputs++; 
    }

});
agregarInput.addEventListener('click', () => {
    crearInput();
});

eliminarInput.addEventListener('click', () => {
    if (contadorInputs > 0) {
        contenedorInputs.removeChild(contenedorInputs.lastChild); 
        
        contadorInputs--; 
    }
});

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); 

    let esValido = true; 

    if (contadorInputs === 0) {
        esValido = false; 
    }

    const inputs = Array.from(contenedorInputs.getElementsByTagName('input')); 
        inputs.forEach((input) => {
            if (input.value.trim() === '') {
                esValido = false; 
                input.style.border = '4px solid red'; 
            } else {
                input.style.border = '';
            }
});
if (esValido) {
    
    alert('ENVIO EXITOSO');
    formulario.reset(); 
} else {
    alert('Agregue un Input primero y Luego verifique que todos los campos esten llenos.'); 
}
});
