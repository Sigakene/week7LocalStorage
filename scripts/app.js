const container = document.querySelector('.container');
const movieTitle = document.querySelector ('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favoriteMovieTitle');
const movieYearToDisplay = document.querySelector('.favoriteMovieYear');



let titleInStorage = localStorage.getItem('title');
let imageUrlStorage = localStorage.getItem('imageUrl');
let yearInStorage = localStorage.getItem('year');                                                                      

if(titleInStorage && imageUrlStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    movieYearToDisplay.textContent = yearInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(120, 120, 158, 0.527), rgba(66, 64, 64, 0.472)),
    url('${imageUrlStorage}')`;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let movieYearInput = mmovieYear.value;
  

    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('year', movieYearInput);

    movieTitleToDisplay.textContent = movieTitleInput;
    movieYearToDisplay.textContent = movieYearInput;
    container.style.backgroundImage = `linear-gradient(rgba(120, 120, 158, 0.527), rgba(66, 64, 64, 0.472)),
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterUrl.value ='';
    movieYear.value = '';
    




});
