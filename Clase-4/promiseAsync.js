const hacerOperacionAsincrona = require("./operacionAsincrona");


new Promise((resolve, reject) => {
    const resultado = hacerOperacionAsincrona();

    if(resultado){
        resolve(resultado);
    } else {
        reject(new Error('No se cumplió la promesa.'))
    }
})

.then(resultado => {
    console.log('Resultado:', resultado);
})
.catch(reject => {
    console.error(reject);
});