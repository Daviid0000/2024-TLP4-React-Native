 
    const promise = new Promise(function(resolve, reject) {
        setTimeout(() => resolve("hecho!"), 5000);
    })
   
    .then((response) => response)
    .then((data) => console.log(data))
  

    new Promise((resolve, reject) => {
        setTimeout(() => resolve(2), 1000);
      })
      
      .then((result) => {
      
        console.log(result);
        return result * 2;

      })
      
      .then((result) => {
      
        console.log(result);
        return result * 3;
      
      })
      
      .then((result) => {
      
        console.log(result);
        return result * 2
      })

      