function agregar(valor) {
    document.getElementById("resultado").value += valor;
}

function calcular() {
    let res = document.getElementById("resultado").value;
    try {
        document.getElementById("resultado").value = eval(res);
    } catch {
        document.getElementById("resultado").value = "Error";
    }
}

function limpiar() {
    document.getElementById("resultado").value = "";
}