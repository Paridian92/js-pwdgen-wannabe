var userName = prompt('Qual è il tuo nome?');
var userSurname = prompt('Qual è il tuo Cognome?');
var prefColor = prompt(' Qual è il tuo colore preferito?');
var notSafePsw = userName + userSurname + prefColor + "21";


document.getElementById('createdpsw').innerHTML = "Ciao! la tua non sicurissima nuova password e:" + notSafePsw;