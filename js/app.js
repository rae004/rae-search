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
}

async function getAutoCompleteSuggestions(searchTerm) {
  const response = await fetch(
    `https://rae-dev.com/api/getGoogleSearchAutocomplete?search=${searchTerm}`,
  );
  const data = await response.json();
  return data[1];
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('search').focus();
});

document.addEventListener('keyup', (event) => {
  if (event.target.id === 'search' && event.target.value) {
    console.log('search changed', event.target.value);
    getAutoCompleteSuggestions(event.target.value).then((suggestions) => {
      console.log('suggestions', suggestions);
      // const suggestionList = document.getElementById('suggestions');
      // suggestionList.innerHTML = '';
      // suggestions.forEach(suggestion => {
      //   const suggestionElement = document.createElement('li');
      //   suggestionElement.textContent = suggestion;
      //   suggestionList.appendChild(suggestionElement);
      // });
    });
  }
});
