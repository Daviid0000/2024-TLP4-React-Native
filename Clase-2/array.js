let a = [1]
let b = [1]

a = b       // asignación
a == b      // evalúa el valor
a === b     // evalúa el valor y el tipo



let c = [1, 2, 3]

// El map recorre un array y a partir de este, crea uno nuevo sin modificar el original
// El map siempre se utiliza para retornar un nuevo array
c.map(d => {return d}) 


// For es una manera de recorrer un objeto
let objeto = {
    j:"1",
    k:"2",
    l:"3",
}


for ( let x in objeto ) {
    console.log(objeto[x])
}

// Manera de obtener el último elemento de un array
const users = [
    'Deelyn_ksks',
    'furanko-Sama',
    'bel_g',
    'ChurrascoViolento',
    'Blito',
    'Sofii',
    ];
    
   users.at(-1)