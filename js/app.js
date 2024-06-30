// Esto agrega a la pantalla el valor del boton de la calculadora que toquemos

function agregar(valor) {
    document.getElementById('pantalla').value += valor // al value le sumamos el valor que pasamos por parametro.
}

// Esta accion vacia la pantalla

function borrar() {
    document.getElementById('pantalla').value = ''; // al igualar el valor a vacio, elimina todo de la pantalla
}

// Esta accion toma el valor de la pantalla y ejecuta los calculos

function calcular() {
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla) // eval es un metodo que evalua una accion matematica de JS, agarra un string y lo calcula matematicamente
    document.getElementById('pantalla').value = resultado;
}