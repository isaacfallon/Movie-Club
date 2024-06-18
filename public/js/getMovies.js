const apiKey = `b7dc6b14`;

const url1 = `http://www.omdbapi.com/?t=star+wars&plot=full&apikey=b7dc6b14`;
const url2 = `http://www.omdbapi.com/?t=fight+club&plot=full&apikey=${apiKey}`;
const url3 = `http://www.omdbapi.com/?i=tt3896198&apikey=b7dc6b14`;

const getMovies = async () => {
  const response = await fetch(url3);

  if(response.ok) {
    console.log(response);
    // response.json(data);
  }
};

document.getElementById(`test-button`).addEventListener(`click`, getMovies);