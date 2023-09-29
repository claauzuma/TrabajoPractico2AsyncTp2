//Modo Asincrónico con promises, THEN/CATCH

//Modo Asincrónico con callbacks
const fs = require('fs');

console.log("Inicio del programa")

let tamanio = fs.statSync("./package.json").size + " bytes"
let datos = fs.readFileSync('package.json','utf-8');
let objetoDeDatos = JSON.parse(datos);

let info = {

}

 const leerArchivo = archivo =>{
    return new Promise((resolve,reject)=>{
     
     try{
        const json =  fs.readFileSync(archivo,"utf-8")
         let tamanio = fs.statSync("./package.json").size + " bytes"
        info.contenidoStr = json;
        info.size = tamanio;
        info.objetoDeDatos = JSON.parse(json)
        console.log(info);
        resolve(json);} catch(error) {
            reject("No se pudo leer el archivo")
        }


    })

}

const guardarArchivo = archivo =>{
    return new Promise((resolve,reject)=>{
     try{
        let infoAarchivo = JSON.stringify(info,null,"\t");
        fs.writeFileSync(archivo,infoAarchivo)
     
        resolve("Se guardo correctamente");
     }
     catch(error) {
     
        reject("No se pudo escribir el archivo " + error)
    }
     
    })
}


leerArchivo("./package.json").then(rta => { console.log(rta)
guardarArchivo("info.txt").then(mensaje =>{ console.log(mensaje + "" + info)})
}).catch( error => { console.log(error)});


 



