const prompt = require("prompt-sync")({sigint:true});
const areas = require("./areas");

console.log(`Qual operação você deseja realizar?
1 - área do circulo
2 - área do triângulo
3 - área do retângulo`);
const opcao = prompt();

if(opcao == 1) {

    let raio = prompt("Qual a medida do raio? ");
    console.log(areas.areaDoCirculo(raio).toFixed(2) + "m²"); 

} else if (opcao == 2) {
    
    let base = prompt("Qual a medida da base? ");
    let altura = prompt("Qual a medida da altura? ");
    console.log(areas.areaDoTriangulo(base, altura) + "m²");

} else if(opcao == 3) {

    let base = prompt("Qual a medida da base? ");
    let altura = prompt("Qual a medida da altura? ");
    console.log(areas.areaDoRetangulo(base, altura) + "m²");

} else {
    console.log("Opção inválida!");
}

