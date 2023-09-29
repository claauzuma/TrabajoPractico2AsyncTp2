//Modo Asincrónico con callbacks
const fs = require('fs');

console.log("Inicio del programa")


fs.readFile('package.json','utf-8',(error,datos)=>{ 
if (error) 
    throw Error("Error en operacion asincronica de lectura ")
    console.log("Se leyo correctamente correctamente " , datos);

    let tamanio = fs.statSync("./package.json").size + " bytes";
    let objetoDeDatos = JSON.parse(datos);
    
    let info = {
    contenidoStr : datos ,
    contenidoObje: objetoDeDatos,
    size: tamanio
    }

    console.log("Mostramos todo")
    console.log(info)

    let infoAarchivo = JSON.stringify(info);

    console.log("ASYNCCC ----------Guardando el objeto en el archivo info.txt-------")
     fs.writeFile('info.txt',infoAarchivo, (error, datos)=> {
        if(error) throw Error("Error en operacion asincronica de lectura")
        console.log("Primer lectura OK ", datos)





     });  
});


