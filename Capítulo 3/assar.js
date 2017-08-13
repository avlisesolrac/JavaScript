function assar(graus){
  var mensagem;
  if (graus > 500){
    mensagem = "Eu não sou um reator nuclear!";
  } else if (graus < 100){
       mensagem = "Eu não sou uma geladeira!";
  } else {
       mensagem = "Esta temperatura está muito confortável para mim!";
  }
  return mensagem;
}

var status = assar(380);
console.log(status);