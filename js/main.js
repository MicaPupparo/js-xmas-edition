const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;

function validarFormulario(event) {
    const ciudad = document.querySelector("[name=ciudad]").value;
    const descripcionRegalo = document.querySelector("[name=descripcion-regalo]").value;

    validarCiudad(ciudad);
    validarDescripcionRegalo(descripcionRegalo);

    event.preventDefault();
}


function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return "Debes seleccionar una ciudad.";
    }

    return "";
}


function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return "Debes escribir el regalo que te gustaría recibir.";
    }

    return "";
}