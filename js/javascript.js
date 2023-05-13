//Declaração das variaveis
var matriz1 = new Array();
var matriz2 = new Array();
var matriz3 = new Array();
var matriz4 = new Array();


//Declaração dos valores da matriz 1 e 2
matriz1.push([parseInt(Math.random() * 100),parseInt(Math.random() * 100),parseInt(Math.random() * 100)]);
matriz1.push([parseInt(Math.random() * 100),parseInt(Math.random() * 100),parseInt(Math.random() * 100)]);

console.table(matriz1);

matriz2.push([parseInt(Math.random() * 100),parseInt(Math.random() * 100),parseInt(Math.random() * 100)]);
matriz2.push([parseInt(Math.random() * 100),parseInt(Math.random() * 100),parseInt(Math.random() * 100)]);

console.table(matriz2);


//Tabela 1
document.write("<br>")
document.write("<p>Tabela A: </p>")
document.write("<br>")

document.write( "<table border=1>");
for (i = 0; i < matriz1.length; i++) {
var linha = '<tr>';
for (x = 0; x < matriz1[i].length; x++) {
linha = linha + "<td>" + matriz1[i][x] + "</td>";
}
linha=linha+"</tr>"
document.write(linha);
}
document.write( "</table>");

document.write("<br>") 


//Tabela 2
document.write("<p>Tabela B: </p>")
document.write("<br>")

document.write( "<table border=1>");
for (i = 0; i < matriz2.length; i++) {
var linha = '<tr>';
for (x = 0; x < matriz2[i].length; x++) {
linha = linha + "<td>" + matriz2[i][x] + "</td>";
}
linha=linha+"</tr>"
document.write(linha);
}
document.write( "</table>");
document.write("<br>");


//Soma - Tabela 3:
document.write("<p>Tabela A + Tabela B: </p>")
document.write("<br>")

document.write( "<table border=1>");
for (i = 0; i < matriz1.length; i++) {
var linha = '<tr>';
for (x = 0; x < matriz1[i].length; x++) {
linha = linha + "<td>" + (matriz1[i][x] + matriz2[i][x]) + "</td>";
}
linha=linha+"</tr>"
document.write(linha);
}
document.write( "</table>");

document.write("<br>");


//Subtração - Tabela 4:
document.write("<p>Tabela A - Tabela B: </p>")
document.write("<br>")

document.write( "<table border=1>");
for (i = 0; i < matriz1.length; i++) {
var linha = '<tr>';
for (x = 0; x < matriz1[i].length; x++) {
linha = linha + "<td>" + (matriz1[i][x] - matriz2[i][x]) + "</td>";
}
linha=linha+"</tr>"
document.write(linha);
}
document.write( "</table>");