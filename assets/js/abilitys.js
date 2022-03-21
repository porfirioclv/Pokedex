window.onload = function(e){ 
    fetchAbilitys();
}


const fetchAbilitys = () => {
    
    const url = `https://pokeapi.co/api/v2/ability/`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);            
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {                        
            pokeDatos(data);
        }
    });
}


const pokeDatos = (data) => {    
    const Tabletypes  = document.getElementById("body-t");    
    let abilitys='';
    let i = 1;
    data.results.forEach(ability => {
        abilitys += '<tr>';
        abilitys += '<th scope="row">'+i+'</th>';
        abilitys += '<td>'+ ability.name +'</td>';
        abilitys += '</tr>';
        i++;
    });
    
    Tabletypes.innerHTML = abilitys;
}
