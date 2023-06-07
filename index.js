const bar=document.getElementById('bar')
const nav=document.getElementById('navbar')
const close=document.getElementById('close')

function closeMenu(){
    nav.classList.remove('active')
}
if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
} 
// submit form 
function submit(){
    alert("Your email has been submitted")
    document.getElementById("Input").value=""
}
let cartCount=0;
function addToCart(){
    cartCount++;
    document.getElementById("cart-count").innerHTML=cartCount;
    // store data of product in local storage
}
// get all the cart icon and add click event listener to each
const cartIcons=document.querySelector(".cart-icon");
cartIcons.array.forEach(cartIcon => {
    cartIcon.addEventListener('click',()=>{
        // get product detail from parent
        const productDiv=cartIcon.closest('.product');
        const productName=productDiv.querySelector('.name').textContent;
        const productPrice=productDiv.querySelector('.price').textContent;
        const product={
            name:productName,
            price:productPrice
        };
        // store the product in local storage
        let cartItems=localStorage.getItem('cartItems');
        console.log(cartItems)
        if(cartItems){
            cartItems=JSON.parse(cartItems);
            cartItems.push(product);
            localStorage.setItem('cartItems',JSON.stringify(cartItems));
        }
        else{
            localStorage.setItem('cartItems',JSON.stringify([product]));
        }
    })
});

function con(){
    console.log('Cheese')
}