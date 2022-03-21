window.onload = function(e){ 
    fetchTypes();
}


const fetchTypes = () => {
    
    const url = `https://pokeapi.co/api/v2/type/`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            //pokeImage("assets/imgs/404.gif")
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
    let tipos='';
    let i = 1;
    data.results.forEach(tipo => {
        tipos += '<tr>';
        tipos += '<th scope="row">'+i+'</th>';
        tipos += '<td>'+ tipo.name +'</td>';
        tipos += '</tr>';
        i++;
    });
    
    Tabletypes.innerHTML = tipos;
}
