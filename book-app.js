const rowbook = document.querySelector(".book-section .row");

class Books {
    constructor(title, name, img, oldprice, newprice) {
        this.title = title;
        this.name = name;
        this.img = img;
        this.oldprice = oldprice;
        this.newprice = newprice;
    }
};

let bookPlus = [];

const bookList = [
    new Books("book-1", "novelist-1", "1.jpg", "15", "23"),
    new Books("book-2", "novelist-2", "2.jpg", "13", "16"),
    new Books("book-3", "novelist-3", "3.jpg", "11", "15"),
    new Books("book-4", "novelist-4", "4.jpg", "15", "23"),
    new Books("book-5", "novelist-5", "5.jpg", "15", "23"),
    new Books("book-6", "novelist-6", "6.jpg", "15", "23"),
    new Books("book-7", "novelist-7", "7.jpg", "15", "23"),
    new Books("book-7", "novelist-8", "8.jpg", "15", "23"),
    new Books("book-8", "novelist-9", "9.jpg", "15", "23"),
    new Books("book-9", "novelist-10", "10.jpg", "15", "23"),
    new Books("book-11", "novelist-11", "11.jpg", "15", "23"),
    new Books("book-12", "novelist-12", "12.jpg", "15", "23")
];


class BookCount {
    constructor(bookList) {
        this.bookList = bookList
        this.index = 0;
    }
    getBook() {
        return this.bookList[this.index]
    }
};

let count = -1
const books = new BookCount(bookList);

function plasButton(index) {
    bookPlus.push(bookList[index]);
    localStorage.setItem("bookPlus", JSON.stringify(bookPlus));
}


if (localStorage.getItem("bookPlus") !== null) {
    bookPlus = JSON.parse(localStorage.getItem("bookPlus"));
}

console.log(bookPlus);


listDisplay()

function listDisplay() {

    for (let a of bookList) {

        count++

        let list = ` <div class="col">
                     <div class="card">
                     <div class="card-surface w-100">
                     <div class="card-surface-item">
                     <a   class="m-2"><i onclick="tagsButton()" class="fa-solid fa-tags"></i></a>
                    <a   onclick="plasButton(${count})"  class="m-2"><i class="fa-solid fa-cart-plus"></i></a>
                    </div>
                    </div>
                    <img src="book/${a.img}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${a.title}</h5>
                    <p class="card-text">${a.name}</p>
                    <div class="card-price">
                    <div class=" d-flex justify-content-around">
                    <div class="d-flex card-current-price">
                        <h5>${a.newprice}.</h5><small>50</small><span> &nbsp;m</span>
                    </div>
                    <div>
                        <del class="card-invalid-price d-flex">
                            <h5>${a.oldprice}.</h5><small>50</small><span> &nbsp;m</span>
                        </del>
                    </div>
                    </div>
                    <div class="card-star">
                    <div>
                        <ul class="d-flex p-0 ">
                            <li><i class="fa-solid fa-star active-star"></i></li>
                            <li><i class="fa-solid fa-star active-star"></i></li>
                            <li><i class="fa-solid fa-star "></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                            <li><i class="fa-solid fa-star"></i></li>
                        </ul>
                    </div>
                    <div>
                        <ul class="d-flex ">
                            <li class="mx-1"><a href=""><i class="fa-solid fa-heart"></i></i></a>
                            </li>
                        </ul>
                    </div>
                   </div>
                   </div>
                   </div>
                   </div>
                   </div>`;

        rowbook.insertAdjacentHTML("beforeend", list);
    }
};