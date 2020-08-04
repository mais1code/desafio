
function enviar(){
 
var nome = document.getElementById("txtyounome").value;
var email = document.getElementById("txtemail").value;
var mensagem = document.getElementById("txtemail"),value;
 

var texto = "Nome" +nome + "; Email: "+ email + "; Mensagem: "+mensagem; // como quiser formatar
 
return true;
 
}