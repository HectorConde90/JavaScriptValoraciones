let articles = {
    movies: [   { name: 'Pulp Fiction', score: 1 },
                { name: 'Armageddon', score: 2 },
                { name: 'Master and commander', score: 4 },
                { name: 'Gladiator', score: 5 },
    ],
    
    'series': [   { name: 'Breaking Bad', score: 5 },
                { name: 'House of Cards', score: 1 },
                { name: 'Sons of Anarchy', score: 4 },
                { name: 'Peaky Blinders', score: 4 },
    ],
};

const series = articles.series;
const movies = articles.movies;


//Imprimir el array resultante en la consola.



function imprimirArray(array) {
    console.log(array);
}

console.log(imprimirArray(articles));



// Imprimir en pantalla un título “Séries” y una lista con losnombres y valoraciones de las series

function listaSeries(pSeries) {
    document.write('<h2>Series</h2>')
    let seriesDocument = '<div">' 
    
    //Sacamos cada nombre
    for (let serie of pSeries) {
        seriesDocument += `Nombre:  ${serie.name}  Puntuación: ${serie.score} </br></br>`
       // console.log(serie.name);
    }
    seriesDocument += '</div>'
    return seriesDocument;
    
}




document.write(listaSeries(series));





// Imprimir en pantalla un titulo Pelicula y una lista con los nombre y las valoraciones si la valoracion de la pelicula es 5 debe aparecer en negrita y verde
function listaMovies(pMovies) {
    document.write('<h2>Peliculas</h2>')
    let moviesDocument = '<div">'

    //Sacamos cada nombre
    for (let movie of pMovies) {
        if (movie.score === 5) {
            moviesDocument += `<strong style="color: green;">Nombre:  ${movie.name}  Puntuación: ${movie.score}</strong> </br></br>`
        } else if (movie.score === 1) {
            moviesDocument += `<strong style="color: red;">Nombre:  ${movie.name}  Puntuación: ${movie.score}</strong> </br></br>`
        } else {
        
            moviesDocument += `Nombre:  ${movie.name}  Puntuación: ${movie.score} </br></br>`
            //console.log(movie.name);
        }
    }
    moviesDocument += '</div>'
    return moviesDocument;

}


document.write(listaMovies(movies));
// console.log(imprimirGeneroPantalla(articles));
//console.log(articles.movies[0].score);


// IMPRIMIR POR PANTALLA MEJOR PELICULA Y MEJOR SERIE

function mejorPelicula(pPelicula) {
    let masValor = 0;
    let pelicula = '';
    document.write('<div><h2 class="" style="color: blue;">Mejor pelicula:</h2></div>')
    for (let movie of pPelicula) {
        
        if (movie.score > masValor) {
            pelicula = movie.name;
        }
    }
    let imprimir = `<div style="font-size: 20px; color: tomato; "> ${pelicula} </div>`
    return imprimir;
}




document.write(mejorPelicula(movies));


function mejorSerie(pSerie) {
    let masValor = 0;
    let serie = '';
    document.write('<div><h2 class="" style="color: blue;">Mejor serie:</h2></div>')
    for (let serieCount of pSerie) {

        if (serieCount.score > masValor) {
            serie = serieCount.name;
        }
    }
    let imprimir = `<div style="font-size: 20px; color: tomato; "> ${serie} </div>`
    return imprimir;
}

document.write(mejorSerie(series));



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






// pedir al principio una pelicula una serie y su valoracion

function introducirMaterial() {
    let nuevaPelicula = { nombre: '', score: 0 };
    let nuevaSerie = { nombre: '', score: 0 };
    
    
    //Introduccion y valoracion de pelucula
    nuevaPelicula.nombre = prompt('Introduce una nueva pelicula: '); 
    nuevaPelicula.score = parseInt(prompt(`Valora ${nuevaPelicula.nombre}`));
    
    while (nuevaPelicula.score < 0 || nuevaPelicula.score > 5 || isNaN(nuevaPelicula.score)) {
        nuevaPelicula.score = parseInt(prompt(`El valor debe estar entra 0 y 5`));
    }
    
    
    
    // Introduccion y valoracion de series
    nuevaSerie.nombre = prompt('Introduce una nueva serie: '); 
    nuevaSerie.score = parseInt(prompt(`Valora ${nuevaSerie.nombre}`));

    while (nuevaSerie.score < 0 || nuevaSerie.score > 5 || isNaN(nuevaSerie.score)) {
        nuevaSerie.score = parseInt(prompt(`El valor debe estar entra 0 y 5`));
   }
    
    
    
    
    movies.push(nuevaPelicula);
    series.push(nuevaSerie);


    console.log(articles);
  

    


    
}

introducirMaterial();