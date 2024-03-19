var botao = document.getElementById("botao");
botao.addEventListener("click", alertar,false);
var nome = document.getElementById ("nome");

var saida= document.getElementById( "saida-de dados");
var email = document .getElementById("email");
function alertar (event) {
    //alert("Voce clicou no botao!!!"+ nome. value );
    saida.Innertext= "Nome" + nome.value+
    var email = document .getElementById("email");
    "/n Email:"+ email.value;
}