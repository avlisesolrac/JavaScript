function idadeCachorro(nomeCachorro, idade){
  var anos = idade * 7;
  console.log(nomeCachorro + " tem " + anos + " anos de idade");
}
var nameDog = "Fido";
idadeCachorro(nameDog, 4);

function makeTea(cups, tea){
  console.log("Brewing " + cups + " cups of " + tea);
}
var guests = 3;
makeTea(guests, "Earl Grey");

function secret(){
  console.log("The secret of life is 42");
}
secret();

function speak(kind){
  var defaultSound = " ";
  if (kind == "dog"){
    alert("Woof Woof");
  } else if (kind == "cat"){
       alert("Meow");
  } else {
       alert("Wtf!");
  }
}
var pet = prompt("Enter a type of pet:");
speak(pet);