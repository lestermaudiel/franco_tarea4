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