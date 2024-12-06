const container = document.querySelector('.container');
const movieTitle = document.querySelector ('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');

let titleInStorage = localStorage.getItem('title');
let imageUrlStorage = localStorage.getItem('imageUrl');

if(titleInStorage && imageUrlStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(120, 120, 158, 0.527), rgba(66, 64, 64, 0.472)),
    url('${imageUrlStorage}')`;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    container.style.backgroundImage = `linear-gradient(rgba(120, 120, 158, 0.527), rgba(66, 64, 64, 0.472)),
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterUrl.value ='';




});
