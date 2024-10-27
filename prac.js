
let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");
// let blog = document.querySelector(".trends");
let mainPage = document.querySelector(".main");


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
}
// cart ki baari hai ab....

function show(img){
    let newImg = document.getElementById("newImg");
    // console.log(img);
    newImg.src=img.src;

    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    // blog.style.display="none";
    about.style.display="none";
    contact.style.display="none";
    document.querySelector(".cart").style.display="flex";
    document.getElementById('show-more').style.display='none';
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
function moreInfo(){
    mainPage.style.display="none";
    card.style.display="none";
    card2.style.display="none";
    // blog.style.display="none";
    about.style.display="none";
    contact.style.display="none";
    document.querySelector(".cart").style.display="flex";
    document.querySelector(".cart").style.position="fixed";
    document.querySelector(".cart").style.top="50%";
    document.querySelector(".cart").style.left="50%";
    document.querySelector(".cart").style.transform="translate(-50%, -50%)";
    document.querySelector(".cart").style.backgroundColor="white";
    document.querySelector(".cart").style.padding="20px";
    document.querySelector(".cart").style.borderRadius="5px";
    document.querySelector(".cart").style.boxShadow="0px 0px 10px rgba(0, 0, 0, 0.5)";
    

    setTimeout(() => {
        document.querySelector(".cart").style.display="none";
        mainPage.style.display="flex";
        card.style.display="block";
        card2.style.display="block";
        // blog.style.display="block";
        // about.style.display="block";
        // contact.style.display="block";
        
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

// closeButton.addEventListener('click', () => {
//     popup.style.display = 'none';
// });



let sectionIndex = 0;
const sections = [
    `
    <div class="trend">
            <div class="head">
                <h1>Trends <span>Foot Wear</span></h1>
            </div>
            <div class="card">
                <div class="crd">
                    <img src="slipper.webp" alt="" onclick="show(this)">
                    <div class="crdText">
                        <h2>Trending Slipper</h2>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i> <br>
                        <button onclick="addCart()">Add to Cart</button>
                        <button class="more-Info" onclick="moreInfo()" >more</button>
                    </div>
                </div>

                


                 <div class="crd">
                    <img src="shoes.webp" alt="" onclick="show(this)">
                    <div class="crdText">
                        <h2>Trending Shoes</h2>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i> <br>
                        <button onclick="addCart()">Add to Cart</button>
                        <button class="more-Info" onclick="moreInfo()">more</button>
                    </div>
                 </div>

                 <div class="crd">
                    <img src="crockse.webp" alt="" onclick="show(this)">
                    <div class="crdText">
                        <h2>Trending Crocks</h2>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-sharp-half-stroke"></i><br>
                        <button onclick="addCart()">Add to Cart</button>
                        <button class="more-Info" onclick="moreInfo()">more</button>
                    </div>
                 </div>

            </div>
         </div>
    `,
    `
    <div class="trend">
            <div class="head">
                <h1>Trends <span>Bags</span></h1>
            </div>
            <div class="card">
                <div class="crd">
                    <img src="bagpack.webp" alt="" onclick="show(this)">
                    <div class="crdText">
                        <h2>Trending Backpacks</h2>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i> <br>
                        <button onclick="addCart()">Add to Cart</button>
                        <button class="more-Info" onclick="moreInfo()" >more</button>
                    </div>
                </div>

                


                 <div class="crd">
                    <img src="handbag.webp" alt="" onclick="show(this)">
                    <div class="crdText">
                        <h2>Trending Handbags</h2>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i> <br>
                        <button onclick="addCart()">Add to Cart</button>
                        <button class="more-Info" onclick="moreInfo()">more</button>
                    </div>
                 </div>

                 <div class="crd">
                    <img src="travelling_bag.webp" alt="" onclick="show(this)">
                    <div class="crdText">
                        <h2>Trending Travel-bags</h2>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-sharp-half-stroke"></i><br>
                        <button onclick="addCart()">Add to Cart</button>
                        <button class="more-Info" onclick="moreInfo()">more</button>
                    </div>
                 </div>

            </div>
         </div>
    `,
    `
       <div class="trend">
            <div class="head">
                <h1>Trends <span>Accessories</span></h1>
            </div>
            <div class="card">
                <div class="crd">
                    <img src="watch.webp" alt="" onclick="show(this)">
                    <div class="crdText">
                        <h2>Trending Watches</h2>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i> <br>
                        <button onclick="addCart()">Add to Cart</button>
                        <button class="more-Info" onclick="moreInfo()" >more</button>
                    </div>
                </div>

                


                 <div class="crd">
                    <img src="sunglass.webp" alt="" onclick="show(this)">
                    <div class="crdText">
                        <h2>Trending Sun-glass</h2>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i> <br>
                        <button onclick="addCart()">Add to Cart</button>
                        <button class="more-Info" onclick="moreInfo()">more</button>
                    </div>
                 </div>

                 <div class="crd">
                    <img src="belt.webp" alt="" onclick="show(this)">
                    <div class="crdText">
                        <h2>Trending Belt</h2>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-sharp-half-stroke"></i><br>
                        <button onclick="addCart()">Add to Cart</button>
                        <button class="more-Info" onclick="moreInfo()">more</button>
                    </div>
                 </div>

            </div>
         </div>
    `
];

function showMore() {
    if (sectionIndex < sections.length) {
        document.getElementById("more-sections").innerHTML += sections[sectionIndex];
        sectionIndex++;
    }

    if (sectionIndex >= sections.length) {
        document.getElementById("show-more").disabled = true;
        document.getElementById("go-home").style.display = "block";
    }
}

function goHome() {
    // Logic to go back to the homepage. You can redirect or refresh based on your use case.
    window.location.href = "prac.html"; // Assuming 'index.html' is your homepage
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