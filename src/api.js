const accessKey = 'VbgIYaCcPRutHW1zGCt5YWyK83o9VMNaDUJN52S5vPo';

async function searchImages() {
  inputData = inputEl.value;

  if (inputData <= 0) {
    searchResults.innerHTML = `<h3 class='msg'>Please write something...</h3>`;
    showMore.style.display = 'none';
    return;
  }

  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const data = await response.json();
    const results = data.results;

    if (page === 1) {
      searchResults.innerHTML = '';
    }

    if (results.length === 0) {
    searchResults.innerHTML = `<h3 class='msg'>No relevant images found.</h3>`;
    showMore.style.display = 'none';
    return;
    }
    
    results.map((result) => {
      const imageWrapper = document.createElement('div');
      imageWrapper.classList.add('search-result');
      const image = document.createElement('img');
      image.src = result.urls.small;
      image.alt = result.alt_description;
      const imageLink = document.createElement('a');
      imageLink.href = result.links.html;
      imageLink.target = '_blank';
      imageLink.textContent = result.alt_description;

      imageWrapper.appendChild(image);
      imageWrapper.appendChild(imageLink);
      searchResults.appendChild(imageWrapper);
    });

    page++;
    if (page > 1) {
      showMore.style.display = 'block';
    }
  } catch (error) {
    searchResults.innerHTML = `<h3 class='msg'>Error Occurred, Please try again later</h3>`;
    showMore.style.display = 'none';
    console.error('Error:', error);
  }
}
