console.log('app.js loaded!');

function getSearchUrl(searchTerm) {
  const encodedTerm = encodeURIComponent(searchTerm);
  return `https://www.google.com/search?q=${encodedTerm}&udm=14`;
}

function handleSearch(event) {
  if (!navigator.onLine) {
    const searchTerm = document.getElementById('search').value;
    window.location.href = getSearchUrl(searchTerm);
  }
}

function getUdm14Info() {
  window.location.href = getSearchUrl('What is the udm 14 parameter');
}

document.addEventListener("DOMContentLoaded", event => {
  document.getElementById("search").focus();
});
