const container = document.querySelector(".container");

class Album {
    constructor(title, text, img, img2) {
        this.title = title;
        this.text = text;
        this.img = img;
        this.img2 = img2;
    }
}

albumList = [

    new Album("title-1", "text-1", "i-1.jpg", "1.jpg"),
    new Album("title-2", "text-2", "i-2.jpg", "2.jpg"),
    new Album("title-3", "text-3", "i-3.jpg", "3.jpg"),
    new Album("title-4", "text-4", "i-4.jpg", "4.jpg"),
    new Album("title-5", "text-5", "i-5.jpg", "5.jpg"),
    new Album("title-6", "text-6", "i-6.jpg", "6.jpg"),
    new Album("title-7", "text-7", "i-7.jpg", "7.jpg"),
    new Album("title-8", "text-8", "i-8.jpg", "8.jpg"),
    new Album("title-9", "text-9", "i-9.jpg", "9.jpg"),

];

displayAlbum()

function displayAlbum() {

    for (let a of albumList) {

        let text = ` <div class="card m-3 " style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="Photos-001/${a.img}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${a.title}</h5>
                    <p class="card-text">${a.text}</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>

    <div class="card m-3 " style="max-width: 540px;">
        <div class="row g-0">

            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${a.title}</h5>
                    <p class="card-text">${a.text}</p>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
            <div class="col-md-4">
                <img src="Photos-001/${a.img2}" class="img-fluid rounded-start" alt="...">
            </div>
        </div>
    </div>`
        container.insertAdjacentHTML("beforeend", text);
    }
}