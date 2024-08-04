console.log('app.js loaded!');

function getSearchUrl(searchTerm) {
  const encodedTerm = encodeURIComponent(searchTerm);
  return `https://www.google.com/search?q=${encodedTerm}&udm=14`;
}

function handleSearch(event) {
  if (!navigator.onLine) {
    event.preventDefault();
    const searchTerm = document.getElementById('search').value;
    window.location.href = getSearchUrl(searchTerm);
  }
}

function getUdm14Info(event) {
  event.preventDefault();
  window.location.href = getSearchUrl('What is the udm 14 parameter');
}

function showAboutText(event) {
  event.preventDefault();
  const aboutTextElement = document.getElementById('about');
  const aboutChevronElement = document.getElementById('aboutTextChevron');
  if (aboutTextElement.style.display === 'none') {
    aboutTextElement.style.display = 'block';
    aboutChevronElement.style.transform = 'rotate(180deg)';
  } else {
    aboutTextElement.style.display = 'none';
    aboutChevronElement.style.transform = 'rotate(0deg)';
  }

  return false;
}

document.addEventListener("DOMContentLoaded", event => {
  document.getElementById("search").focus();
});
