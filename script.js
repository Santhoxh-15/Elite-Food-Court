/* ================= CART ================= */

let cart = [];
let total = 0;


/* ================= ADD TO CART ================= */

function addToCart(name, price){

    cart.push({
        name:name,
        price:price
    });

    total = total + price;

    let count = document.getElementById("cartCount");

    if(count){
        count.innerText = cart.length;
    }

    showMessage(name + " added to cart 🛒");
}


/* ================= SHOW CART ================= */

function showCart(){

    let popup = document.getElementById("cartPopup");

    if(!popup){
        return;
    }

    let items = document.getElementById("cartItems");

    if(cart.length === 0){

        items.innerHTML =
            "<p>Your cart is empty.</p>";

    }
    else{

        items.innerHTML = "";

        cart.forEach(function(item){

            items.innerHTML += `

                <div class="cart-row">

                    <span>
                        ${item.name}
                    </span>

                    <b>
                        ₹${item.price}
                    </b>

                </div>

            `;

        });

    }


    let cartTotal =
        document.getElementById("cartTotal");

    if(cartTotal){

        cartTotal.innerText =
            "Total: ₹" + total;

    }


    popup.classList.add("show");
}


/* ================= CLOSE POPUP ================= */

function closePopup(id){

    let popup =
        document.getElementById(id);

    if(popup){

        popup.classList.remove("show");

    }

}


/* ================= CHECKOUT ================= */

function checkout(){

    if(cart.length === 0){

        showMessage("Cart is empty 🛒");

        return;

    }


    cart = [];

    total = 0;


    let count =
        document.getElementById("cartCount");

    if(count){

        count.innerText = "0";

    }


    closePopup("cartPopup");

    showMessage(
        "Order placed successfully! 🎉"
    );

}


/* ================= SEARCH ================= */

function searchFood(){

    let searchBox =
        document.getElementById("search");

    if(!searchBox){
        return;
    }


    let search =
        searchBox.value.toLowerCase();

    let cards =
        document.querySelectorAll(".food-card");


    cards.forEach(function(card){

        let name =
            card.dataset.name.toLowerCase();


        if(name.includes(search)){

            card.style.display = "block";

        }
        else{

            card.style.display = "none";

        }

    });

}


/* ================= LIKE FOOD ================= */

function likeFood(button){

    button.classList.toggle("liked");


    if(button.classList.contains("liked")){

        button.innerText = "♥";

        showMessage(
            "Added to favourites ❤️"
        );

    }
    else{

        button.innerText = "♡";

        showMessage(
            "Removed from favourites"
        );

    }

}


/* ================= OFFER ================= */

function offerMessage(){

    showMessage(
        "Offer applied successfully! 🎁"
    );

}


/* ================= LOGIN ================= */

function loginUser(event){

    event.preventDefault();


    let name =
        document.getElementById("loginName").value;

    let email =
        document.getElementById("loginEmail").value;


    localStorage.setItem(
        "userName",
        name
    );

    localStorage.setItem(
        "userEmail",
        email
    );


    showMessage(
        "Welcome " + name + " ❤️"
    );


    setTimeout(function(){

        window.location.href =
            "profile.html";

    },1000);

}


/* ================= PROFILE ================= */

function loadProfile(){

    let name =
        localStorage.getItem("userName");

    let email =
        localStorage.getItem("userEmail");


    let profileName =
        document.getElementById("profileName");

    let profileEmail =
        document.getElementById("profileEmail");


    if(profileName && name){

        profileName.innerText = name;

    }


    if(profileEmail && email){

        profileEmail.innerText = email;

    }

}


loadProfile();


/* ================= SETTINGS ================= */

function saveSetting(name){

    showMessage(
        name + " setting updated ✓"
    );

}


/* ================= MESSAGE ================= */

function showMessage(text){

    let message =
        document.getElementById("message");


    if(!message){
        return;
    }


    message.innerText = text;

    message.classList.add("show");


    setTimeout(function(){

        message.classList.remove("show");

    },2000);

}