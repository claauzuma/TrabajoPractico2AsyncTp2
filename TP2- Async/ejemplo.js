const fs = require('fs');

console.log("Inicio del programa")


function sumar(valor1,valor2) {
return new Promise((resolve,reject)=>{
 if(valor1 > 0 && valor2 > 0){
    resolve(valor1+valor2)
 }
 else{
    reject("Hubo un error en el resultado");
 }

})

}


const hacerAlgo = async (valor1,valor2)=>{ 
try{
    let resultado = await sumar(valor1,valor2);
    console.log("El resultado de la suma es "+resultado)

}
catch(error){
    console.log(error);
}
   
}

hacerAlgo(0,2)