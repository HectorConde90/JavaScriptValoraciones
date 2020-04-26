

let articles = {
    movies: [   { name: 'Pulp Fiction', score: 1 },
                { name: 'Armageddon', score: 2 },
                { name: 'Master and commander', score: 5},
                { name: 'Gladiator', score: 5 },
    ],
    
    'series': [ { name: 'Breaking Bad', score: 5 },
                { name: 'House of Cards', score: 1 },
                { name: 'Sons of Anarchy', score: 5 },
                { name: 'Peaky Blinders', score: 4 },
    ],
};

const series = articles.series;
const movies = articles.movies;



// pedir al principio una pelicula una serie y su valoracion

// function introducirMaterial() {
//     let nuevaPelicula = { name: '', score: 0 };
//     let nuevaSerie = { name: '', score: 0 };


//     //Introduccion y valoracion de pelucula
//     nuevaPelicula.name = prompt('Introduce una nueva pelicula: ');
//     nuevaPelicula.score = parseInt(prompt(`Valora ${nuevaPelicula.name}`));

//     while (nuevaPelicula.score < 0 || nuevaPelicula.score > 5 || isNaN(nuevaPelicula.score)) {
//         nuevaPelicula.score = parseInt(prompt(`El valor debe estar entra 0 y 5`));
//     }

//      // Introduccion y valoracion de series
//     nuevaSerie.name = prompt('Introduce una nueva serie: ');
//     nuevaSerie.score = parseInt(prompt(`Valora ${nuevaSerie.name}`));

//     while (nuevaSerie.score < 0 || nuevaSerie.score > 5 || isNaN(nuevaSerie.score)) {
//         nuevaSerie.score = parseInt(prompt(`El valor debe estar entra 0 y 5`));
//     }

//     movies.push(nuevaPelicula);
//     series.push(nuevaSerie);


// }

// introducirMaterial();




// Imprimir el array resultante en la consola.



function imprimirArray(array) {
    console.log(array);
}

console.log(imprimirArray(articles));



// Imprimir en pantalla un título “Séries” y una lista con losnombres y valoraciones de las series
// Crear la lista de las series
function listaSeries(pSeries) {
    // document.write('')
    let seriesDocument = '<div class="lista"><h2>Series</h2><ol>' 
    
    //Sacamos cada nombre
    for (let serie of pSeries) {
        seriesDocument += `<li><span class="">${serie.name},    ${serie.score}</span> estrellas. </li>`
       // console.log(serie.name);
    }
    seriesDocument += '</ol></div>'
    return seriesDocument;
    
}

// Imprimir en pantalla un titulo Pelicula y una lista con los nombre y las valoraciones si la valoracion de la pelicula es 5 debe aparecer en negrita y verde
function listaMovies(pMovies) {
    // document.write('<div class="lista">')
    // document.write('<h2>Peliculas</h2>')
    let moviesDocument = '<div class="lista"><h2>Peliculas</h2><ol>';

    //Sacamos cada nombre
    for (let movie of pMovies) {
        if (movie.score === 5) {
            moviesDocument += `<li><strong style="color: green;"> ${movie.name},   ${movie.score} estrellas.</strong> </li>`;
        } else if (movie.score === 1) {
            moviesDocument += `<li><strong style="color: red;">  ${movie.name},   ${movie.score} estrellas.</strong> </li>`;
        } else {
        
            moviesDocument += `<li> ${movie.name},   ${movie.score} estrellas.</li>`;
            //console.log(movie.name);
        }
    }
    moviesDocument += '</ol></div>';
    // document.write('</div>')
    return moviesDocument;

}


// IMPRIME LAS LISTAS 
document.write(`<div class="container cont-princ"><div class="row"><div class="col-12 col-md-6">${listaSeries(series)}</div><div class="col-12 col-md-6">${listaMovies(movies)}</div></div></div>`);
// IMPRIMIR POR PANTALLA MEJOR PELICULA Y MEJOR SERIE

// Imprime mejor pelicula

function mejorPelicula(pPelicula) {
    let masValor = 0;
    let imprimirPelicula = '<div class="mejores" ><h2 class="" style="color: blue;">Mejor pelicula:</h2>';

    for (let movie of pPelicula) {
        
        if (movie.score > masValor) {
            masValor = movie.score;
            pelicula = movie.name;
        }
    }
    imprimirPelicula += ` <p>${pelicula}</p> </div>`;
    return imprimirPelicula;
}





// Imprime mejor serie
function mejorSerie(pSerie) {
    let masValor = 0;
    let imprimirSerie = '<div class="mejores"><h2 class="" style="color: blue;">Mejor serie:</h2>';
    for (let serieCount of pSerie) {

        if (serieCount.score > masValor) {
            masValor = serieCount.score
            serie = serieCount.name;
        }
    }
    imprimirSerie += ` <p>${serie}</p> </div>`
    return imprimirSerie;
}


document.write(`<div class="container"><div class="row"><div class="col-12 col-md-6">${mejorSerie(series)}</div><div class="col-12 col-md-6">${mejorPelicula(movies)}</div></div></div>`);




// Pedir nombre de pelicula y sistema muestra valor

function mostrarValorPedido() {
    
    let buscarValoracion = prompt('Escribe el titulo de la pelicula o serie para ver su valoración');
    
    for (let peliculas of movies) {
        if (buscarValoracion.toLowerCase() === peliculas.name.toLowerCase()) {
            alert(`La valoración de la película ${peliculas.name} es ---> ${peliculas.score}`);
        }
    }
    for (let serie of series) {
        if (buscarValoracion.toLocaleLowerCase() === serie.name.toLocaleLowerCase()) {
            alert(`La valoración de la serie ${serie.name} es ---> ${serie.score}`);
        }
    }
        
   
}






