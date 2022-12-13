const rowPlus = document.querySelector(".plus-section .row");


console.log(bookPlus);
depoDisplay();

function depoDisplay() {
    for (let a of bookPlus) {

        let list = `<div class="col">
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

        rowPlus.insertAdjacentHTML("beforeend", list)

    }
}