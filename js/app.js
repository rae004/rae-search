console.log('app.js loaded!');

function handleSearch(event) {
  if (!navigator.onLine) {
    const searchTerm = document.getElementById('search').value;
    const encodedTerm = encodeURIComponent(searchTerm);
    window.location.href = `https://www.google.com/search?q=${encodedTerm}&udm=14`;
  }
}

document.addEventListener("DOMContentLoaded", event => {
  document.getElementById("search").focus();
});
