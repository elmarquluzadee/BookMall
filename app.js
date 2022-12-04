let row = document.querySelector(".book-section .row");


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
    new Books("book-5", "novelist-5", "5.jpg"),
    new Books("book-6", "novelist-6", "6.jpg"),
    new Books("book-7", "novelist-7", "7.jpg")
];

console.log(bookList[2]);

class BookCount {
    constructor(bookList) {
        this.bookList = bookList
        this.index = 0;
    }
    getBook() {
        return this.bookList[this.index]
    }
};



const books = new BookCount(bookList);


function listDisplay() {

    for (let a of bookList) {

        console.log(a)


        let list = ` <div class="col">
                     <div class="card">
                     <div class="card-surface w-100">
                     <div class="card-surface-item">
                     <a href="" class="m-2"><i class="fa-solid fa-tags"></i></a>
                    <a href="" class="m-2"><i class="fa-solid fa-cart-plus"></i></a>
                    </div>
                    </div>
                    <img src="book/images.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card </p>
                    <div class="card-price">
                    <div class=" d-flex justify-content-around">
                    <div class="d-flex card-current-price">
                        <h5>20.</h5><small>50</small><span> &nbsp;m</span>
                    </div>
                    <div>
                        <del class="card-invalid-price d-flex">
                            <h5>22.</h5><small>50</small><span> &nbsp;m</span>
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

        row.insertAdjacentHTML("beforeend", list);
    }

};
listDisplay();