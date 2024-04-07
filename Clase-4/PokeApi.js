const API = 'https://pokeapi.co/api/v2/pokemon/'

const getPokemons = () => {
    const elButton = document.getElementById('getPokemons');

    elButton.addEventListener('click', () => {
        const elDiv = document.getElementById('container');
        elDiv.innerHTML = ''
        elDiv.style.border = '2px solid #000'
        fetch(API)
        .then((response) => response.json())
        .then((data) => {
            console.log("Información obtenida con fetch:", data)
            
            data.results.forEach((item) => {
                const element = document.createElement('div');
                const elImg = document.createElement('img');
                element.style.border = '1px solid #222';
                element.style.margin = '10px';
                element.style.padding = '10px';
                element.style.display = 'inline-block';
                element.style.textAlign = 'center';
    
                const elName = document.createElement('div');
                elName.textContent = item.name.toUpperCase();
                
                element.appendChild(elName);
                
                fetch(item.url)
                .then((response => response.json()))
                .then(data => {
                    
                    const img = data.sprites.front_default;
                    
                    elImg.src = img
                    
                    element.appendChild(elImg)
                }).catch((error) => {
                    console.log('Error al obtener el pokemon: ', error)
                })
                elDiv.appendChild(element);
            });    
        })
        .catch((error) => {
            console.log('Error al obtener los pokemons: ', error);
        })
    });

}

getPokemons()