function calcularArea(raio){
  var area;
  if(raio <= 0){
    return 0;
  } else {
    area = Math.PI * raio * raio;
    return area;
  }
}

var raio = 5.2;
var resultadoArea = calcularArea(raio);
console.log("A área é: " + resultadoArea);