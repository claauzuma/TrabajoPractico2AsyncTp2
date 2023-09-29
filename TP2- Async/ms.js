//Modo Sincronico 
const fs = require('fs');

console.log("Inicio del programa");


let tamanio = fs.statSync("./package.json").size + " bytes"
let datos = fs.readFileSync('package.json','utf-8');
let objetoDeDatos = JSON.parse(datos);
let info = {
contenidoStr : datos ,
contenidoObje: objetoDeDatos,
size: tamanio
}

console.log("Mostrando por consola el objeto luego de leer el archivo")
console.log(info)

//Parseamos el objeto a  String
let infoAarchivo = JSON.stringify(info);

try {
    console.log("----------Guardando el objeto en el archivo info.txt-------")
fs.writeFileSync('info.txt',infoAarchivo);
    
} catch (error) {
    console.log("Error de tipo : " + error)   
}
//Leemos el archivo INFO.txt
console.log("--------Leyendo archivo INFO.txt----------")
console.log(fs.readFileSync('info.txt','utf-8'))


