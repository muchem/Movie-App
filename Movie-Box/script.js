let input = document.getElementById('searchBox');


const getMovie = async () => {
    const res = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=6d569566&Home');
    const data = await res.json();
    console.log(data);
}