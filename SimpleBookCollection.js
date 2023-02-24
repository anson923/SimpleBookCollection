const myForm = document.querySelector('.bookForm');

  myForm.addEventListener('submit', function(event) {
    // Prevent the form from submitting and refreshing the page
    event.preventDefault();
  });


let bookLibrary = [];

function Book(title,author,pages,read, id){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

function addBookToLibrary(){
  const title = document.querySelector('#bookName').value;
  const author = document.querySelector('#bookAuthor').value;
  const pages = document.querySelector('#bookPages').value;
  const read = document.querySelector('#bookRead');

  if(!title | !author | !pages) return;

  const template = document.querySelector('#bookCard');
  let clone = template.content.cloneNode(true);

  if(clone){
    let bookTitle = clone.querySelector('#bookCardTitle');
    bookTitle.textContent = title;

    let bookAuthor = clone.querySelector('#bookCardAuthor');
    bookAuthor.textContent = author;

    let bookPages = clone.querySelector('#bookCardPages');
    bookPages.textContent = `This book has ${pages} pages`;

    let bookRead = clone.querySelector('#bookCardRead');
    bookRead.textContent = read.checked ? 'This book is read.' : 'Book is not read yet.';

    let bookId = clone.querySelector('#bookId');
    bookId.textContent = bookLibrary.length;
  }

  const content = document.body.querySelector('.content');
  if(content){
    content.appendChild(clone);
    let book = new Book(title,author,pages,read,bookLibrary.length);
    bookLibrary.push(book);
    console.log('Added a book!');
  }
}

function removeBookFromLibrary(parent) {
  const bookCard = parent;
  const bookId = +bookCard.querySelector('#bookId').textContent;
  const indexToRemove = bookLibrary.findIndex(book => book.id === bookId);
  const content = document.body.querySelector('.content');

  if(content && indexToRemove >= 0){
    bookLibrary.splice(indexToRemove, 1);
    content.removeChild(bookCard);
    console.log('Card Remvoed');
  }

}
