var nombre = prompt("Esta es la Trivia de la primavera. Escribe tu nombre:");
var c = 0
var i = 0
var p1 = prompt("¿Cómo se llama al primer día de la Primaver?\nA: Primer Día de la Primavera\nB: Equinoccio de Primavera\nC: Equinoccio de Invierno")
if (p1=="B"){
    c = c + 1;
}else{
    i = i + 1
}
var p2 = prompt("¿Qué sucede en el Polo Norte cuando llega la Primavera?\nA: 6 meses de luz diurna ininterrumpida\nB: 6 meses de oscuridad inimterrumpida\nC: 6 meses de alternancia de luz y oscuridad")
if (p2=="A"){
    c = c + 1;
}else{
    i = i + 1
}
var p3 = prompt("¿En qué mes empieza la Primavera en el Hemisferio Norte?\nA: Setiembre\nB: Junio\nC. Marzo")
if (p3=="C"){
    c = c + 1;
}else{
    i = i + 1
}
var p4 = prompt("¿Qué es la Fiesta de la Primavera en China?\nA: La Navidad\nB: El Año Nuevo\nC. Fiestas Patrias de China")
if (p4=="B"){
    c = c + 1;
}else{
    i = i + 1
}
if( c > i){
    document.write(nombre +"; has superado la trivia:<br>")
    document.write("Respuestas correcta : "+c+"<br>")
    document.write("Respuestas incorrecta : "+i+"<br>")
}else{
    document.write(nombre +"; puedes hacerlo mejor:<br>")
    document.write("Respuestas correcta : "+c+"<br>")
    document.write("Respuestas incorrecta : "+i+"<br>")
}
