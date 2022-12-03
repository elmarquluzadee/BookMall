class Books {
    constructor(title, name, img) {
        this.title = title;
        this.name = name;
        this.img = img;

    }
}

const bookList = [
    new Books("book-1", "novelist-1", "1.jpg"),
    new Books("book-2", "novelist-2", "2.jpg"),
    new Books("book-3", "novelist-3", "3.jpg"),
    new Books("book-4", "novelist-4", "4.jpg"),
    new Books("book-5", "novelist-5", "5.jpg")
];

class BookCount {
    constructor(bookList) {
        this.bookList = bookList
        this.index = 0;
    }
    getBook() {
        return this
    }
};


const books = new BookCount(bookList);


function listDisplay() {};
listDisplay();