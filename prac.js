
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
    // blog.style.display="block";
    about.style.display="none";

    // time to iconing them..... 

    // document.getElementById("blog").style.color="black";
    // underline section should be aqu in color and rest are black just to gloify them......
    document.getElementById("home").style.color="rgb(2, 173, 173)";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black"
    document.getElementById("show-more").style.display="block"
    document.getElementById("more-sections").style.display="none"
    // document.getElementById("desc").style.display="none"

}

function shops(){
    mainPage.style.display="none";
    card.style.display="block";
    card2.style.display="block";
    // blog.style.display="none";
    // blog.style.display="none"

    // document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="rgb(2, 173, 173)";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="black"
    document.getElementById("show-more").style.display="block"
    document.getElementById("more-sections").style.display="block"
}

// function blogs(){
//     mainPage.style.display="none";
//     card.style.display="none";
//     card2.style.display="none";
//     blog.style.display="block";
//     about.style.display="none"

//     document.getElementById("blog").style.color="rgb(2, 173, 173)";
//     document.getElementById("home").style.color="black";
//     document.getElementById("shop").style.color="black";
//     document.getElementById("contact").style.color="black";
//     document.getElementById("about").style.color="black"
// }

function abouts(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    // blog.style.display="none";
    about.style.display="block"

    // document.getElementById("blog").style.color="black";
    document.getElementById("home").style.color="black";
    document.getElementById("shop").style.color="black";
    document.getElementById("contact").style.color="black";
    document.getElementById("about").style.color="rgb(2, 173, 173)"
    document.getElementById("show-more").style.display="none"
    document.getElementById("more-sections").style.display="none"
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
}
// cart ki baari hai ab....

function show(img){
    let newImg = document.getElementById("newImg");
    // console.log(img);
    newImg.src=img.src;
    newImg.style.width='200px'
    newImg.style.height='300px'
    newImg.style.objectFit='cover'
    newImg.style.marginTop='40px'
    newImg.style.marginBottom='30px'
    newImg.style.borderRadius='10px'
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


function addCart(){
    alert("Added To Cart");
    location.reload()
}

// let moreInfoButton = document.querySelector('.more-info');
// let popup = document.querySelector('carto');
// let closeButton = document.querySelector('.popup-close');

// moreInfoButton.addEventListener('click', () => {
//     popup.style.display = 'block';
//     popup.style.position='fixed';
//     popup.style.top= '50%';
//     popup.style.left= '50%';
//     popup.style.transform='translate(-50%, -50%)';
//     popup.style.backgroundColor= 'white';
//     popup.style.padding='20px';
//     popup.style.borderRadius='5px';
//     popup.style.boxShadow= '0px 0px 10px rgba(0, 0, 0, 0.5)';
    
//     setTimeout(() => {
//         popup.style.display = 'none';
//     }, 5000);
// });
function moreInfo(button){
    // mainPage.style.display="none";
    // card.style.display="none";
    // card2.style.display="none";
    // blog.style.display="none";
    // about.style.display="none";
    // contact.style.display="none";
    // document.querySelector(".cart").style.display="flex";
    // document.querySelector(".cart").style.position="fixed";
    // document.querySelector(".cart").style.top="50%";
    // document.querySelector(".cart").style.left="50%";
    // document.querySelector(".cart").style.transform="translate(-50%, -50%)";
    // document.querySelector(".cart").style.backgroundColor="white";
    // document.querySelector(".cart").style.padding="20px";
    // document.querySelector(".cart").style.borderRadius="5px";
    // document.querySelector(".cart").style.boxShadow="0px 0px 10px rgba(0, 0, 0, 0.5)";
    // document.getElementById("more-sections").style.display="none"
    // document.querySelector(".pop").style.display="flex"
    // document.getElementById("show-more").style.display="none"
    
    const imageUrl=button.getAttribute("data-image");
    const popImage=document.getElementById("new-Img");
    popImage.style.width="150px"
    popImage.style.height="150px"
    popImage.style.objectFit="cover"
    popImage.src=imageUrl;
    document.getElementById("popupOverlay").style.display = "block";
    document.getElementById("popupContent").style.display = "block";

    
    



    

    setTimeout(() => {
        // document.querySelector(".cart").style.display="none";
        // document.querySelector(".pop").style.display="none"
        // document.getElementById("show-more").style.display="block"
        // mainPage.style.display="flex";
        // card.style.display="block";
        // card2.style.display="block";
        // document.getElementById("more-sections").style.display="block"
        // blog.style.display="block";
        // about.style.display="block";
        // contact.style.display="block";
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
    // document.getElementById("popupOverlay").style.display = "none";
    // document.getElementById("popupContent").style.display = "none";
    // document.querySelector(".cart").style.display="none";
    // mainPage.style.display="flex";
    // card.style.display="block";
    // card2.style.display="block";
    // document.getElementById('show-more').style.display='block';
    window.location.href = "prac.html";

};

// closeButton.addEventListener('click', () => {
//     popup.style.display = 'none';
// });



// let sectionIndex = 0;
// const sections = [
//     `
//     <div class="trend">
//             <div class="head">
//                 <h1>Trends <span>Foot Wear</span></h1>
//             </div>
//             <div class="card">
//                 <div class="crd">
//                     <img src="slipper.webp" alt="" onclick="show(this)">
//                     <div class="crdText">
//                         <h2>Trending Slipper</h2>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star-half-stroke"></i> <br>
//                         <button onclick="addCart()">Add to Cart</button>
//                         <button class="more-Info" onclick="moreInfo()" >more</button>
//                     </div>
//                 </div>

                


//                  <div class="crd">
//                     <img src="shoes.webp" alt="" onclick="show(this)">
//                     <div class="crdText">
//                         <h2>Trending Shoes</h2>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star-half-stroke"></i> <br>
//                         <button onclick="addCart()">Add to Cart</button>
//                         <button class="more-Info" onclick="moreInfo()">more</button>
//                     </div>
//                  </div>

//                  <div class="crd">
//                     <img src="crockse.webp" alt="" onclick="show(this)">
//                     <div class="crdText">
//                         <h2>Trending Crocks</h2>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star-sharp-half-stroke"></i><br>
//                         <button onclick="addCart()">Add to Cart</button>
//                         <button class="more-Info" onclick="moreInfo()">more</button>
//                     </div>
//                  </div>

//             </div>
//          </div>
//     `,
//     `
//     <div class="trend">
//             <div class="head">
//                 <h1>Trends <span>Bags</span></h1>
//             </div>
//             <div class="card">
//                 <div class="crd">
//                     <img src="bagpack.webp" alt="" onclick="show(this)">
//                     <div class="crdText">
//                         <h2>Trending Backpacks</h2>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star-half-stroke"></i> <br>
//                         <button onclick="addCart()">Add to Cart</button>
//                         <button class="more-Info" onclick="moreInfo()" >more</button>
//                     </div>
//                 </div>

                


//                  <div class="crd">
//                     <img src="handbag.webp" alt="" onclick="show(this)">
//                     <div class="crdText">
//                         <h2>Trending Handbags</h2>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star-half-stroke"></i> <br>
//                         <button onclick="addCart()">Add to Cart</button>
//                         <button class="more-Info" onclick="moreInfo()">more</button>
//                     </div>
//                  </div>

//                  <div class="crd">
//                     <img src="travelling_bag.webp" alt="" onclick="show(this)">
//                     <div class="crdText">
//                         <h2>Trending Travel-bags</h2>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star-sharp-half-stroke"></i><br>
//                         <button onclick="addCart()">Add to Cart</button>
//                         <button class="more-Info" onclick="moreInfo()">more</button>
//                     </div>
//                  </div>

//             </div>
//          </div>
//     `,
//     `
//        <div class="trend">
//             <div class="head">
//                 <h1>Trends <span>Accessories</span></h1>
//             </div>
//             <div class="card">
//                 <div class="crd">
//                     <img src="watch.webp" alt="" onclick="show(this)">
//                     <div class="crdText">
//                         <h2>Trending Watches</h2>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star-half-stroke"></i> <br>
//                         <button onclick="addCart()">Add to Cart</button>
//                         <button class="more-Info" onclick="moreInfo()" >more</button>
//                     </div>
//                 </div>

                


//                  <div class="crd">
//                     <img src="sunglass.webp" alt="" onclick="show(this)">
//                     <div class="crdText">
//                         <h2>Trending Sun-glass</h2>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star-half-stroke"></i> <br>
//                         <button onclick="addCart()">Add to Cart</button>
//                         <button class="more-Info" onclick="moreInfo()">more</button>
//                     </div>
//                  </div>

//                  <div class="crd">
//                     <img src="belt.webp" alt="" onclick="show(this)">
//                     <div class="crdText">
//                         <h2>Trending Belt</h2>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star"></i>
//                         <i class="fa-solid fa-star-sharp-half-stroke"></i><br>
//                         <button onclick="addCart()">Add to Cart</button>
//                         <button class="more-Info" onclick="moreInfo()">more</button>
//                     </div>
//                  </div>

//             </div>
//          </div>
//     `
// ];

// Assuming there's a main container in the HTML with id "main-container"
const mainContainer = document.getElementById("more-sections");

function createProductSection(titleText, products) {
    const section = document.createElement('div');
    section.className = 'trend';

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

        const addToCartButton = document.createElement('button');
        addToCartButton.onclick = addCart;
        addToCartButton.textContent = 'Add to Cart';
        crdTextDiv.appendChild(addToCartButton);

        const moreInfoButton = document.createElement('button');
        moreInfoButton.className = 'more-Info';
        moreInfoButton.onclick = function(){moreInfo(this);};
        // killer approach....
        moreInfoButton.setAttribute('data-image', img.src);

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
            { name: 'Trending Slipper', image: './assets/images/slipper.jpg', alt: 'Slipper' },
            { name: 'Trending Shoes', image: './assets/images/shoes.jpg', alt: 'Shoes' },
            { name: 'Trending Crocks', image: './assets/images/crocks.jpg', alt: 'Crocks' }
        ]
    },
    {
        title: 'Bags',
        products: [
            { name: 'Trending Backpacks', image: './assets/images/bagpack.jpg', alt: 'Backpack' },
            { name: 'Trending Handbags', image: './assets/images/handbag.jpg', alt: 'Handbag' },
            { name: 'Trending Travel-bags', image: './assets/images/travelling_bag.jpg', alt: 'Travel Bag' }
        ]
    },
    {
        title: 'Accessories',
        products: [
            { name: 'Trending Watches', image: './assets/images/watch.jpg', alt: 'Watch' },
            { name: 'Trending Sun-glass', image: './assets/images/sunglass.jpg', alt: 'Sunglass' },
            { name: 'Trending Belt', image: './assets/images/belt.jpg', alt: 'Belt' }
        ]
    }
];

// Create sections for each data entry
// sectionsData.forEach(sectionData => {
//     createProductSection(sectionData.title, sectionData.products);
// });


let sectionIndex=0;
function showMore(){
    if(sectionIndex<sectionsData.length){
        const sectionData=sectionsData[sectionIndex];
        createProductSection(sectionData.title, sectionData.products);
        sectionIndex++;
    }

    if(sectionIndex>=sectionsData.length){
        document.getElementById("show-more").disabled = true;
        document.getElementById("go-home").style.display = "block";
    }
}


// function showMore() {
//     if (sectionIndex < sections.length) {
//         document.getElementById("more-sections").innerHTML += sections[sectionIndex];
//         sectionIndex++;
//     }

//     if (sectionIndex >= sections.length) {
//         document.getElementById("show-more").disabled = true;
//         document.getElementById("go-home").style.display = "block";
//     }
// }

function goHome() {
    // Logic to go back to the homepage. we can redirect or refresh based on our use case.
    window.location.href = "prac.html"; // Assuming 'index.html' is homepage
}

// Add to cart.....
// document.addEventListener('DOMContentLoaded',function(){
//     let count=0;
//     const cartCount=document.getElementById('cartCount');
//     const addToCart=document.querySelector('.hello');
//     addToCart.addEventListener('click',function(){
//         count++;
//         cartCount.textContent=count;
//     });
// });


// newspaper segment.....

// Function to show popup after 5 seconds
// window.onload = function() {
//     setTimeout(function() {
//         document.getElementById("popupOverlay").style.display = "block";
//         document.getElementById("popupContent").style.display = "block";
//     }, 5000); // 5000ms = 5 seconds
// };

// // Close popup when 'x' is clicked
document.getElementById("popupClose").onclick = function() {
    document.getElementById("popupOverlay").style.display = "none";
    document.getElementById("popupContent").style.display = "none";
};

// // Close popup when clicking outside of it
document.getElementById("popupOverlay").onclick = function() {
    document.getElementById("popupOverlay").style.display = "none";
    document.getElementById("popupContent").style.display = "none";
};
