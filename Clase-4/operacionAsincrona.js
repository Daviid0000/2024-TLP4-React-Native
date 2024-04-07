const hacerOperacionAsincrona = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('1')
            resolve('Promesa resuelta.');
        }, 2000)
        
        console.log('2')
    })
}


module.exports = hacerOperacionAsincrona

// const hacerOperacionAsincrona = () => {
//     console.log("Inicio");

// function dos() {
//   setTimeout(function () {
//     console.log("Dos");
//   }, 1000);
// }

// function uno() {
//   setTimeout(function () {
//     console.log("Uno");
//   }, 0);
//   dos();
//   console.log("Tres");
// }

// uno();
// console.log("Fin");
// }

// hacerOperacionAsincrona()
// module.exports = hacerOperacionAsincrona

// // ////Síncrono
// // console.log("Inicio");

// // function dos() {
// //   console.log("Dos");
// // }

// // function uno() {
// //   console.log("Uno");
// //   dos();
// //   console.log("Tres");
// // }

// // uno();
// // console.log("Fin");

