//Modo Asincrónico con promises (ULTIMA)
const fs = require('fs');
console.log("Inicio del programa");


function creandoObjeto(archivo,datos){
return new Promise((resolve)=>{
    let tamanio = fs.statSync(archivo).size + " bytes"
    let objetoDeDatos = JSON.parse(datos)

    let info = {
    contenidoStr : datos ,
    contenidoObje: objetoDeDatos,
    size: tamanio
    }
    /// No sabia que ponerle en el reject, solo le puse el resolve
    resolve(info)

})

}


const leerGuardarArchivo = async (archivo) => {
try{
    console.log("Arranca funcion ascincronica con manejo de errores")

    let datos = await fs.promises.readFile(archivo,'utf-8');
    console.log("PASO 1 : Leemos los primeros datos : " + datos)

    console.log("-----------------------------------------------------")

    console.log("PASO 2 : Declaramos el objeto info")
    let info = await creandoObjeto(archivo,datos);

    console.log("----------------------------------------------------")

    let infoAarchivo = JSON.stringify(info)
    console.log("PASO 3 : Mostrando el objeto info " + infoAarchivo)

    console.log("PASO 4: Guardamos el objeto info (ya parseado) en el archivo txt")
    await fs.promises.writeFile(archivo, infoAarchivo)
}

catch(error){
    console.log(error)
}
}

leerGuardarArchivo("./package.json");
