"use strict";
const book = {
    name: "Title",
    isbn: "123"
};
const $container = document.getElementById('info');
if ($container) {
    $container.innerHTML = `Книга: ${book.name}, ${book.isbn}`;
}
