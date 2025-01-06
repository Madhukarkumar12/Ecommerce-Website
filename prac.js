let sectionIndex=0;
// let index=-1;

let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");
// let blog = document.querySelector(".trends");
let mainPage = document.querySelector(".main");
let letter=document.querySelector(".letter");
let footer=document.querySelector(".footer")


function homes(){

    // display section of home.....
    mainPage.style.display="flex";
    card.style.display="block";
    card2.style.display="block";
    contact.style.display='none'
    // blog.style.display="block";
    about.style.display="none";
    letter.style.display='flex'
    footer.style.display='flex'
     sectionIndex=0;
    document.getElementById("more-sections").innerHTML = ""; // Clear previous sections
    document.getElementById("more-sections").style.display = "block";
    document.getElementById("show-more").disabled = false;
    document.getElementById("show-more").style.display = "block"

    // document.getElementById("show-more").disabled = false; 
    document.getElementById("loginModal").style.display='none'
    document.getElementById("signupModal").style.display='none'
    document.getElementById("cart-modal").style.display='none'

    // time to iconing them..... 

    // document.getElementById("blog").style.color="black";
    // underline section should be aqu in color and rest are black just to gloify them......
    
  
    document.getElementById("home").style.color="rgb(2, 173, 173)";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black"
    // document.getElementById("show-more").style.display="block"
    document.getElementById("go-home").style.display="none";
    

}





function shops(){
    mainPage.style.display="none";
    card.style.display="block";
    card2.style.display="block";
    contact.style.display='none'
    about.style.display="none";
    footer.style.display="none";
    letter.style.display="none";
    // blog.style.display="none";
    // blog.style.display="none"
    
    sectionIndex=0;
    // document.getElementById("blog").style.color="black";
    // Reset "Show More" section
    document.getElementById("more-sections").innerHTML = ""; // Clear any existing content
    document.getElementById("more-sections").style.display = "block";
    document.getElementById("show-more").disabled = false;
    document.getElementById("show-more").style.display = "block";

    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="rgb(2, 173, 173)";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black"
    // document.getElementById("show-more").style.display="block"
    // document.getElementById("more-sections").style.display="block"
    document.getElementById("loginModal").style.display='none'
    document.getElementById("signupModal").style.display='none'
    document.getElementById("cart-modal").style.display='none'
    
}



function abouts(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    // blog.style.display="none";
    about.style.display="block"
    contact.style.display="none"
    sectionIndex=0;
    // document.getElementById("blog").style.color="black";
    document.getElementById("more-sections").innerHTML = ""; // Clear any existing content
    document.getElementById("more-sections").style.display = "none";
    document.getElementById("show-more").style.display = "none";
    document.getElementById("go-home").style.display = "none";

    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="rgb(2, 173, 173)"
    // document.getElementById("show-more").style.display="none"
    // document.getElementById("more-sections").style.display="none"
    // document.getElementById("go-home").style.display="none"
    document.getElementById("loginModal").style.display='none'
    document.getElementById("signupModal").style.display='none'
    document.getElementById("cart-modal").style.display='none'
}

function contacts(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    // blog.style.display="none";
    about.style.display="none";
    contact.style.display="block"

    // document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black"
    document.getElementById("contact").style.color="rgb(2, 173, 173)"
    document.getElementById("show-more").style.display="none"
    document.getElementById("more-sections").style.display="none"
    document.getElementById("go-home").style.display="none"
    document.getElementById("loginModal").style.display='none'
    document.getElementById("signupModal").style.display='none'
    document.getElementById("cart-modal").style.display='none'
}
// cart ki baari hai ab....

function show(img){

    if(! isLoggedIn()){
        alert("Please Login to Access");
        return;
    }

    let newImg = document.getElementById("newImg");
    // console.log(img);
    newImg.src=img.src;
    newImg.style.width='200px'
    newImg.style.height='300px'
    newImg.style.objectFit='cover'
    newImg.style.margin='40px auto 30px auto'
    // newImg.style.marginBottom='30px'
    newImg.style.borderRadius='10px'
    newImg.style.boxShadow=' 0 4px 8px rgba(0, 0, 0, 0.2)'
    letter.style.display='none'
    footer.style.display='none'


    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    // blog.style.display="none";
    about.style.display="none";
    contact.style.display="none";
    document.querySelector(".cart").style.display="flex"; 
    document.getElementById('show-more').style.display='none';
    document.getElementById("more-sections").style.display="none"
}



let popupTimeout; 
function moreInfo(button){
    
    if(! isLoggedIn()){
        alert("Please Login for moreInfo!");
        return;
    }
    
    // Clear the previous timeout if it exists
    if (popupTimeout) {
        clearTimeout(popupTimeout);
    }

    const imageUrl=button.getAttribute("data-image");
    const popImage=document.getElementById("new-Img");
    const title=button.getAttribute("data-title");
    const description=button.getAttribute("data-description");
    const popheader=document.querySelector('.popup-header')
    const pop_docu=document.querySelector('.popup-body')
    popheader.textContent=title;
    pop_docu.textContent=description;
    
    // title.style.color='aqua'
    // popheader.style.color='red'
    // pop_docu.style.color='blue'
    // popImage.style.width="150px"
    // popImage.style.height="150px"
    // popImage.style.objectFit="cover"
    // popImage.style.marginLeft='60px'
    popheader.style.color = '#ff4500'; // Vibrant red
    popheader.style.fontSize = '24px';
    popheader.style.fontWeight = 'bold';
    popheader.style.textAlign = 'center';
    popheader.style.textShadow = '0px 2px 5px rgba(0,0,0,0.5)'; // Subtle shadow for depth

    pop_docu.style.color = '#000000'; // Pure Black for strong contrast

    pop_docu.style.fontSize = '16px';
    pop_docu.style.lineHeight = '1.8';
    pop_docu.style.textAlign = 'justify';
    pop_docu.style.marginTop = '10px';

    popImage.style.width = "180px";
    popImage.style.height = "180px";
    popImage.style.objectFit = "cover";
    popImage.style.margin = '20px auto';
    popImage.style.display = 'block'; // Center image
    popImage.style.borderRadius = '10px';
    popImage.style.boxShadow = '0px 4px 15px rgba(0,0,0,0.3)'; // Add depth to the image

    popImage.src=imageUrl;
    document.getElementById("popupOverlay").style.display = "block";
    document.getElementById("popupContent").style.display = "block";

    
    



    

    popupTimeout=setTimeout(() => {
       
        document.getElementById("popupOverlay").style.display = "none";
        document.getElementById("popupContent").style.display = "none";
        
    }, 5000);
}

function closeButton(){
    document.querySelector(".cart").style.display="none";
    mainPage.style.display="flex";
    card.style.display="block";
    card2.style.display="block";
    document.getElementById('show-more').style.display='block';
    // blog.style.display="block";
    // about.style.display="block";
    // contact.style.display="block";

}

document.getElementById("popup_Close").onclick = function() {
   
    document.getElementById('carto').style.display='none'
    homes();

};



// Assuming there's a main container in the HTML with id "main-container"
const mainContainer = document.getElementById("more-sections");

function createProductSection(titleText, products) {
    const section = document.createElement('div');
    section.className = 'trend';
    section.id='hello'
    const headDiv = document.createElement('div');
    headDiv.className = 'head';

    const h1 = document.createElement('h1');
    h1.innerHTML = `Trends <span>${titleText}</span>`;
    headDiv.appendChild(h1);
    section.appendChild(headDiv);

    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';

    products.forEach(product => {
        const crdDiv = document.createElement('div');
        crdDiv.className = 'crd';
        // crdDiv.setAttribute('data-id', product.id);
        crdDiv.id=product.id;

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.alt;
        img.onclick = function() { show(this); };
        crdDiv.appendChild(img);

        const crdTextDiv = document.createElement('div');
        crdTextDiv.className = 'crdText';

        const h2 = document.createElement('h2');
        h2.textContent = product.name;
        crdTextDiv.appendChild(h2);

        for (let i = 0; i < 4; i++) {
            const starIcon = document.createElement('i');
            starIcon.className = 'fa-solid fa-star';
            crdTextDiv.appendChild(starIcon);
        }
        const halfStarIcon = document.createElement('i');
        halfStarIcon.className = 'fa-solid fa-star-half-stroke';
        crdTextDiv.appendChild(halfStarIcon);
        crdTextDiv.appendChild(document.createElement('br'));

        // Price element
        const priceParagraph = document.createElement('p');
        priceParagraph.className = 'price';
        priceParagraph.innerHTML = `<span>$:</span>${product.price}`;
        crdTextDiv.appendChild(priceParagraph);

         // Add to Cart button
         const addToCartButton = document.createElement('button');
         addToCartButton.className = 'cart-button';
         addToCartButton.textContent = 'Add to Cart';
         addToCartButton.onclick = function () {
             addCart(product.id, product.name, product.price, product.image,this,product.maxCnt);
            //  updateCartButton();
         };
         crdTextDiv.appendChild(addToCartButton);
 

        const moreInfoButton = document.createElement('button');
        moreInfoButton.className = 'more-Info';
        moreInfoButton.onclick = function(){moreInfo(this);};
        // killer approach....
        moreInfoButton.setAttribute('data-image', img.src);
        moreInfoButton.setAttribute('data-title',product.name);
        moreInfoButton.setAttribute('data-description',product.descr);

        moreInfoButton.textContent = 'more';
        crdTextDiv.appendChild(moreInfoButton);

        crdDiv.appendChild(crdTextDiv);
        cardDiv.appendChild(crdDiv);
    });

    section.appendChild(cardDiv);
    mainContainer.appendChild(section);
}

// Define the sections and products
const sectionsData = [
    {
        title: 'Foot Wear',
        products: [
            { name: 'Trending Slipper', image: './assets/images/slipper.jpg', alt: 'Slipper',
                descr:'A slipper is a comfortable, lightweight footwear designed for indoor use. Typically made from soft materials like fabric or foam',
                price:'20',id:7,maxCnt:5
             },
            { name: 'Trending Shoes', image: './assets/images/shoes.jpg', alt: 'Shoes',
                descr:'A shoes is a comfortable, lightweight footwear designed for indoor use. Typically made from soft materials like fabric or foam',
                price:'30',id:8,maxCnt:6
             },
            { name: 'Trending Crocks', image: './assets/images/crocks.jpg', alt: 'Crocks',
                descr:'A slipper is a comfortable, lightweight footwear designed for indoor use. Typically made from soft materials like fabric or foam',
                price:'25',id:9,maxCnt:7
             }
        ]
        

    },
    {
        title: 'Bags',
        products: [
            { name: 'Trending Backpacks', image: './assets/images/bagpack.jpg', alt: 'Backpack' ,
                descr:'Backpacks are versatile, portable bags designed to be worn on the back with two shoulder straps.',
                price:'40',id:10,maxCnt:7
            },
            { name: 'Trending Handbags', image: './assets/images/handbag.jpg', alt: 'Handbag',
                descr:'A handbag is a stylish, portable accessory designed for carrying personal items such as wallets, makeup, and keys.',
                price:'32',id:11,maxCnt:4
             },
            { name: 'Trending Travel-bags', image: './assets/images/travelling_bag.jpg', alt: 'Travel Bag' ,
                 descr:'A traveling bag is a durable, spacious luggage designed for long-distance travel. It typically features compartments for organizing clothes',
                 price:'50',id:12,maxCnt:4
            }
        ]
    },
    {
        title: 'Accessories',
        products: [
            { name: 'Trending Watches', image: './assets/images/watch.jpg', alt: 'Watch',
                descr:'A watch is a timekeeping device worn on the wrist, typically consisting of a dial, hands, and a strap.',
                price:'80',id:13,maxCnt:8
            },
            { name: 'Trending Sun-glass', image: './assets/images/sunglass.jpg', alt: 'Sunglass' ,
                descr:'Sunglasses are protective eyewear designed to shield the eyes from harmful UV rays and glare. ',
                price:'60',id:14,maxCnt:9
            },
            { name: 'Trending Belt', image: './assets/images/belt.jpg', alt: 'Belt',
                descr:'A belt is a flexible band, typically made of leather or fabric, worn around the waist to secure clothing or as a fashion accessory.',
                price:'70',id:15,maxCnt:10
             }
        ]
    }
];


function showMore(){
    if(sectionIndex<sectionsData.length){
        const sectionData=sectionsData[sectionIndex];
        // sectionData.style.display='block'
        createProductSection(sectionData.title, sectionData.products);
        updateCartButton();
        sectionIndex++;
    }

    if(sectionIndex>=sectionsData.length){
        document.getElementById("show-more").disabled = true;
        document.getElementById("go-home").style.display = "block";
    }
}

function goHome() {
    document.getElementById("go-home").style.display='none'
    homes();
}


document.getElementById("popupClose").onclick = function() {
    document.getElementById("popupOverlay").style.display = "none";
    document.getElementById("popupContent").style.display = "none";
};

 
function openSignupModal() {
    document.getElementById('signupModal').style.display = 'flex';
    letter.style.display='none'
    footer.style.display='none'
    contact.style.display='none'
    about.style.display='none'
    mainPage.style.display='none'
    card.style.display='none'
    card2.style.display='none'
    document.getElementById("show-more").style.display="none"
    document.getElementById('loginModal').style.display='none'
}

function closeSignupModal() {
    document.getElementById('signupModal').style.display = 'none';
    homes();
    
}

function openLoginModal() {
    document.getElementById('loginModal').style.display = 'flex';
    letter.style.display='none'
    footer.style.display='none'
    contact.style.display='none'
    about.style.display='none'
    mainPage.style.display='none'
    card.style.display='none'
    card2.style.display='none'
    document.getElementById("show-more").style.display="none"
    document.getElementById('signupModal').style.display='none'
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
    homes();
}


let currentUser=null;

function signup(event) {
    event.preventDefault();
    
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value.trim();

    if (!name || !email || !password) {
        alert("All fields are required!");
        return;
    }

    // Send signup data to the server
    fetch('/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Account created successfully! Logging you in...");
                // Simulate login after successful signup
                fetch('/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, password }), 
                })
                    .then(loginResponse => loginResponse.json())
                    .then(loginData => {
                        if (loginData.success) {
                            currentUser = loginData.user; 
                            localStorage.setItem('currentUser', JSON.stringify(currentUser));

                            alert(`Welcome, ${loginData.user.name}!`);
                            updateCartCount();
                            loadCart();
                            document.getElementById('loginLink').style.display = 'none';
                            document.getElementById('signupLink').style.display = 'none';
                            document.getElementById('icon').style.display = 'inline';
                            document.getElementById('logout').style.display = 'inline';
                            closeSignupModal(); 
                        } else {
                            alert("Failed to log in after signup. Please try logging in manually.");
                        }
                    })
                    .catch(loginError => console.error('Login Error:', loginError));
            } else {
                alert(data.message);
            }
        })
        .catch(signupError => console.error('Signup Error:', signupError));
}


function login(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    

    if (!email || !password) {
        alert("All fields are required!");
        return;
    }
    // Send login data to the server
    fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                currentUser = data.user; // Save logged-in user info

                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                alert(`Welcome, ${data.user.name}!`);
                updateCartCount();
                loadCart();
                document.getElementById('loginLink').style.display = 'none';
                document.getElementById('signupLink').style.display = 'none';
                document.getElementById('icon').style.display = 'inline';
                document.getElementById('logout').style.display='inline';
                document.getElementById('connect').style.display='none';
                closeLoginModal();
            } else {
                alert(data.message);
            }
        })
        .catch(error => console.error('Error:', error));
}

// Function to check login status on page load
function checkLoginStatus() {
  

    const storedUser = localStorage.getItem('currentUser');

    if (storedUser) {
        currentUser = JSON.parse(storedUser);

        document.getElementById('loginLink').style.display = 'none';
        document.getElementById('signupLink').style.display = 'none';
        document.getElementById('icon').style.display = 'inline';
        document.getElementById('logout').style.display = 'inline';
    } else {
        document.getElementById('loginLink').style.display = 'inline';
        document.getElementById('signupLink').style.display = 'inline';
        document.getElementById('icon').style.display = 'none';
        document.getElementById('logout').style.display = 'none';
    }
}

// Call checkLoginStatus on page load
checkLoginStatus();

function isLoggedIn() {
    
    // return !!localStorage.getItem('isLoggedIn'); 
    // return !!currentUser;
    return !!localStorage.getItem('currentUser');
  }

// add to cart ki baari...

let cart = [];

// logout time....
document.getElementById("logout").addEventListener('click',()=>{
    localStorage.removeItem("currentUser");
    document.getElementById('connect').style.display='inline'
    document.getElementById('loginLink').style.display = 'inline';
    document.getElementById('signupLink').style.display = 'inline';
    document.getElementById('icon').style.display = 'none';
    document.getElementById('logout').style.display = 'none';
    // document.getElementById("cart-modal").style.display='none'
    homes();
})


function updateCartButton(){
    document.querySelectorAll(".cart-button").forEach((button)=>{
        const productElement=button.closest(".crd");
        const productId=parseInt(productElement.id);
        // const productId=productElement.dataset.id;
        const inCart=cart.some(item=>item.id===productId);
        
         if (inCart) {
            button.textContent="Go to Cart";
            button.style.backgroundColor = "green"; 
            button.style.color = "white"; 
        } 
        else{
            button.textContent="Add to Cart";
            button.style.color="white";
            button.style.backgroundColor="rgb(2, 164, 164)"
        }
    })
}

function loadCart() {
    const storedUser = JSON.parse(localStorage.getItem("currentUser"));

    if (storedUser) {
        fetch('/load-cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: storedUser.email }),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    cart = data.cart || [];
                    saveCart();
                    updateCartButton();
                    updateCartCount();
                }
            })
            .catch(error => console.error('Error loading cart:', error));
    }else{
        // If no user is logged in, clear the cart
        cart = [];
        saveCart();
        updateCartButton();
        updateCartCount();
    }
}

function saveCart(){
    localStorage.setItem("cart",JSON.stringify(cart));
}


function addCart(id, name, price,image,button,maxCnt) {

    if(! isLoggedIn()){
        alert("Please Login to add to cart");
        return;
    }

    const existingItem=cart.find(item=>item.id===id);

    if(existingItem){
        // alert("Redirecting to cart....");
        openCart();
    }
    else {
        cart.push({ id, name, price, quantity: 1, maxCnt, image });                                                                                                                                                               
        saveCart();
        updateCartButton();
        alert("Product added to cart!");
    } 
    

   // Save the cart to the backend....
   const storedUser = JSON.parse(localStorage.getItem("currentUser"));
   if (storedUser) {
       fetch('/save-cart', {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ email: storedUser.email, cart }),
       }).catch(error => console.error('Error saving cart:', error));
   }

  updateCartCount();
}

function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.getElementById("cart-count").textContent = totalItems;
}

function openCart() {

    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black";
    document.getElementById("go-home").style.display="none";
    
  const cartModal = document.getElementById("cart-modal");

  const cartItemsContainer = document.getElementById("cart-items");
 
  const totalAmountElement = document.getElementById("total-amount");

  cartItemsContainer.innerHTML = "";

  let totalAmount = 0;

  cart.forEach(item => {
    totalAmount += item.price * item.quantity;

    const cartItem = document.createElement("div");
    cartItem.innerHTML = `
    
<div style="display: flex; align-items: center; gap: 15px; padding: 10px; border: 1px solid #ddd; border-radius: 8px; background-color: #f9f9f9; width: 300px;">
  <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 5px;">

  <div style="flex: 1; display: flex; flex-direction: column; gap: 5px;">
    <p style="margin: 0; font-weight: bold; font-size: 14px; color: #333;">${item.name}</p>
    <p style="margin: 0; font-size: 12px; color: #666;">Price: $${item.price}</p>
  </div>

  <div style="display: flex; align-items: center; gap: 5px;">
    <button onclick="updateQuantity(${item.id}, -1, ${item.maxCnt})" style="padding: 5px 10px; border: none; background-color: #ff4d4d; color: white; border-radius: 5px; cursor: pointer; font-size: 12px;">-</button>
    <span style="min-width: 20px; text-align: center; font-size: 14px;">${item.quantity}</span>
    <button onclick="updateQuantity(${item.id}, 1, ${item.maxCnt})" style="padding: 5px 10px; border: none; background-color: #4caf50; color: white; border-radius: 5px; cursor: pointer; font-size: 12px;">+</button>
  </div>
</div>

    `;
    cartItemsContainer.appendChild(cartItem);
    
  });

  totalAmountElement.textContent = `Total: ${totalAmount.toFixed(2)}`;
//   cartModal.classList.remove("hidden");
  cartModal.style.display="block";
//   cartModal.style.display="block"
const sections = [mainPage, card, card2, contact, about, letter, footer];
sections.forEach(section => {
  if (section) section.style.display = "none";
});

document.getElementById("show-more").style.display = "none";
document.getElementById("more-sections").style.display = "none";
 
}



function closeCart() {
  const cartModal = document.getElementById("cart-modal");

  cartModal.style.display='none';
//   cartModal.classList.add("hidden");
updateCartButton()
  homes();
}


function updateQuantity(id, change, maxCnt) {
    const itemIndex = cart.findIndex(item => item.id === id);
    if (itemIndex >= 0) {
        const newQuantity = cart[itemIndex].quantity + change;
        if (newQuantity > maxCnt) {
            alert(`You can't add more than ${maxCnt} of this item.`);
            return;
        } else if (newQuantity <= 0) {
            cart.splice(itemIndex, 1); 
        } else {
            cart[itemIndex].quantity = newQuantity; 
        }

        saveCart(); // Save the updated cart locally
        updateCartCount(); // Update UI cart count
        updateCartButton(); // update  

        // Send the updated cart data to the server
        const storedUser = JSON.parse(localStorage.getItem("currentUser"));
        if (storedUser) {
            fetch('/update-cart', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: storedUser.email,
                    itemId: id,
                    quantity: newQuantity, // Send the updated quantity or 0
                }),
            })
            .then(response => response.json())
            .then(data => {
                if (!data.success) {
                    console.error('Error updating cart on the server:', data.message);
                }
            })
            .catch(error => console.error('Error updating cart on the server:', error));
        }

        
        openCart();
    }
}

window.onload=loadCart;


  
    

