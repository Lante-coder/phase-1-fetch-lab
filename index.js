// fetchBooks function implementation
function fetchBooks() {
  // Make fetch request to the Game of Thrones API
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(books => {
      // Call renderBooks with the JSON data
      renderBooks(books);
      return books; // Return the data for further chaining if needed
    })
    .catch(error => {
      console.error('Error fetching books:', error);
      throw error; // Re-throw to allow test to handle errors
    });
}

// If renderBooks doesn't exist yet, here's a basic implementation
function renderBooks(books) {
  // This function should render the books to the DOM
  // Implementation depends on your HTML structure
  
  // Example implementation:
  const container = document.getElementById('books-container') || document.body;
  
  books.forEach(book => {
    const bookElement = document.createElement('div');
    bookElement.innerHTML = `<h3>${book.name}</h3>`;
    container.appendChild(bookElement);
  });
}

// Alternative more complete renderBooks implementation
function renderBooks(books) {
  const container = document.getElementById('books-container');
  
  if (!container) {
    console.error('Books container not found');
    return;
  }
  
  // Clear existing content
  container.innerHTML = '';
  
  books.forEach(book => {
    const bookDiv = document.createElement('div');
    bookDiv.className = 'book';
    bookDiv.innerHTML = `
      <h3>${book.name}</h3>
      <p>Author: ${book.authors.join(', ')}</p>
      <p>Pages: ${book.numberOfPages}</p>
      <p>Released: ${book.released}</p>
    `;
    container.appendChild(bookDiv);
  });
}