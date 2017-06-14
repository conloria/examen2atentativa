$(document).ready(function () {

    function buscaDatos(numeroDePagina) {
        var urlAPI = 'https://api.themoviedb.org/3/discover/movie?api_key=e8c6d35a6bd555573d4b93aff5b6743b';
        urlAPI += '&page=' + numeroDePagina;
        console.log(urlAPI);


        


    };
    buscaDatos(1);
});