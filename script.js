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
        contenedorInputs.removeChild(contenedorInputs.lastChild); // Eliminar el último input del contenedor
        
        contadorInputs--; 
    }
});