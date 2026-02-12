function somar() {

    const nu1 = parseFloat (document.getElementById('nu1').value);
    const nu2 = parseFloat (document.getElementById('nu2').value);
    const resultado = nu1 + nu2;
    document.getElementById('resultado').innerText = 'resultado: ' + resultado;
}

function multiplicar() {

    const nu1 = parseFloat (document.getElementById('nu1').value);
    const nu2 = parseFloat (document.getElementById('nu2').value);
    const resultado = nu1 * nu2;
    document.getElementById('resultado').innerText = 'resultado: ' + resultado;
}

function subtrair() {

    const nu1 = parseFloat (document.getElementById('nu1').value);
    const nu2 = parseFloat (document.getElementById('nu2').value);
    const resultado = nu1 - nu2;
    document.getElementById('resultado').innerText = 'resultado: ' + resultado;
}

function dividir() {

    const nu1 = parseFloat (document.getElementById('nu1').value);
    const nu2 = parseFloat (document.getElementById('nu2').value);
    const resultado = nu1 / nu2;
    document.getElementById('resultado').innerText = 'resultado: ' + resultado;
}




