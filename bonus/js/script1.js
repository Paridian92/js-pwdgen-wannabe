var userName = prompt('Qual è il tuo nome?');
var userSurname = prompt('Qual è il tuo Cognome?');
var prefColor = prompt(' Qual è il tuo colore preferito?');
const random = Math.floor(Math.random() * 500);
var notSafePsw = userName + userSurname + prefColor + random;


document.getElementById('createdpsw').innerHTML = "Ciao! la tua non sicurissima nuova password e:" + notSafePsw;