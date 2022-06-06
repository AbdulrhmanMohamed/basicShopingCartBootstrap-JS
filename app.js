// global variables
var row = document.querySelector("#main-section .row");

// self invoke function to gets called once the js file load

(function() {
    for (var i = 0; i < 12; i++) {
        var column = document.createElement("div");
        column.classList.add("col-lg-4", "col-md-6", "column");
        column.innerHTML = `
            <div class="card mt-3" id=${i}>
                            
                                <div class="card-body">
                                    <h1 class="card-title h3">
                                        This is the Title ${i + 1}
                                    </h1>
                                    <p class="lead card-text">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe autem aut culpa, quia veniam eligendi consequatur quibusdam voluptas maiores porro repudiandae dolor delectus cupiditate hic numquam, nemo velit laborum atque?
                                    </p>
                                    <div class="d-flex ">
                                        <div class="align-slef-start p-4 h5">
                                            <span>price :</span>
                                            <span> ${(i + 1) * 20}</span>
                                        </div>
                                        <button class="btn btn-lg btn-dark d-inline-block ml-auto btn-eve" 
                                        parent_id="${i}">Add To Cart</button>
                                    </div>
                                </div>
                           
                        </div>
            `;
        row.append(column);

        // console.log(btn);
    }
})();

// array of purchased items
var purchased_items = [];

// catch the all the buttons
var btns = document.querySelectorAll(".btn-eve");
var columns = document.querySelectorAll(".card-body");
console.log(columns.length);
btns.forEach(function(ele, inde) {
    ele.addEventListener("click", function() {
        // add the list of items

        var parent = columns[parseInt(this.getAttribute("parent_id"))];
        renderPurchasedItems(parent);
    });
});

// catch the cart button
var purchases = document.querySelector(".purchases");
purchases.style.setProperty("display", "none", "important");

var price = document.querySelector(".price");
price.style.setProperty("display", "none", "important");

var cart_btn = document.querySelector(".cart-btn");
cart_btn.addEventListener("click", function() {
    // show the element that is been purchased

    console.log(purchases.style.display);
    if (purchases.style.display == "none") {
        purchases.style.setProperty("display", "block", "important");
        price.style.setProperty("display", "flex", "important");
    } else {
        purchases.style.setProperty("display", "none", "important");
        price.style.setProperty("display", "none", "important");
    }
});

// render Cart Purchases items
var totPrice = 0;
var priceEle = document.querySelector(".totPrice");

function renderPurchasedItems(card) {
    // <li class="list-item py-3 bg-primary">totoalPrice:</li>
    var cart = document.querySelector(".cart");
    console.log(card.children[2].children[0].children[1].innerText);
    totPrice += parseInt(card.children[2].children[0].children[1].innerText);

    purchases.innerHTML += `
    <li class="list-item  my-2 h6 p-3 text-white  rounded bg-primary w-md-25  ml-auto" >
    
    ${card.children[0].innerText} &nbsp;  ${card.children[2].children[0].innerText}

    </li>
    `;
    priceEle.innerHTML = totPrice;
}