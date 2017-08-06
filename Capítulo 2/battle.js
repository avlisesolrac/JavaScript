var palpite;
var totalPalpites = 0;
var totalAcertos = 0;
var afundou = false;
var local1 = Math.floor(Math.random() * 5);
var local2 = local1 + 1;
var local3 = local2 + 1;

while(afundou == false) {
   palpite = prompt("Digite a posicao do navio 0-5:");
   if(palpite < 0 || palpite > 5) {
      alert("Digite um valor valido!");
   } else {
      totalPalpites = totalPalpites + 1;
      if(palpite == local1 || palpite == local2 || palpite == local3) {
         totalAcertos = totalAcertos + 1;
         document.write("Você acertou!<br>");
         if(totalAcertos == 3){
            afundou = true;
         }
      } else {
         document.write("Você errou!<br>");
      }
   }
}