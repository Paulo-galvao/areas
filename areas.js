const areas = {
    areaDoCirculo,
    areaDoTriangulo,
    areaDoRetangulo
}

function areaDoCirculo(raio) {
    let pi = Math.PI;
    let area = pi * (Math.pow(raio, 2));
    return area;
}

function areaDoTriangulo(base, altura) {
    let area = (base * altura) / 2;
    return area;
}

function areaDoRetangulo(base, altura) {
    let area = base * altura;
    return area;
}

module.exports = areas;