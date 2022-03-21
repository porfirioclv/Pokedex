const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("assets/imgs/404.gif")

            const datos = document.getElementById('datos');
            datos.style.display = 'none';
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            
            let pokeImg = data.sprites.front_default;
            fetchDescription(data.id);
            pokeImage(pokeImg);
            pokeDatos(data);
            const datos = document.getElementById('datos');
            datos.style.display = 'block';
        }
    });
}

const fetchDescription = ( id ) => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/ability/${id}/`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            
            console.log(data)
            const description = document.getElementById('description');
            description.innerHTML = data.effect_entries[1].effect;

        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("PokeImg");
    pokePhoto.src = url;
}

const pokeDatos = (data) => {
    const pokeName = document.getElementById("PokeNameL");    
    pokeName.innerHTML = data.name;

    //Tipos
    let type ='';
    data.types.forEach( t  => {
        
        type += '<button type="button" class="btn btn-secondary me-1 mb-1 white" data-bs-toggle="tooltip" data-bs-html="true">'
        type += t.type.name
        type += '</button>';
    });
    const pokeType = document.getElementById("pokeType");    
    pokeType.innerHTML = type;

    //Estadísticas
    let stats ='';
    data.stats.forEach( stat  => {
        stats += '<button type="button" class="btn btn-secondary me-1 mb-1 white" data-bs-toggle="tooltip" data-bs-html="true">'
        stats += stat.stat.name +' - ' + stat.base_stat;
        stats += '</button>';
    });
    const pokeStats = document.getElementById("pokeStats");    
    pokeStats.innerHTML = stats;

    //Movimientos
    let movs ='';
    data.moves.forEach( mov  => {
        movs += '<button type="button" class="btn btn-secondary me-1 mb-1 white" data-bs-toggle="tooltip" data-bs-html="true">'
        movs += mov.move.name;
        movs += '</button>';
    });
    const pokeMovs = document.getElementById("pokeMovs");    
    pokeMovs.innerHTML = movs; 
}
