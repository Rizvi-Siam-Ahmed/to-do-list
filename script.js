let movies = [];

const movieInput = document.getElementById('movieInput');
const addBtn = document.getElementById('addBtn');
const movieList = document.getElementById('movieList');

// Add button event
addBtn.addEventListener('click', function () {
  const movieName = movieInput.value.trim();
  if (movieName) {
    movies.push(movieName);
    movieInput.value = "";
    renderList();
  }
});

// Render the movie list
function renderList() {
  movieList.innerHTML = ""; // clear previous list

  movies.forEach((movie, index) => {
    const li = document.createElement('li');
    li.textContent = movie;

    const deleteBtn = document.createElement('span');
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener('click', function () {
      movies.splice(index, 1); // remove movie
      renderList(); // re-render
    });

    li.appendChild(deleteBtn);
    movieList.appendChild(li);
  });
}


["#D73F40", "#DC6551", "#F2B84F", "#BDE952", "#3ba62f"];