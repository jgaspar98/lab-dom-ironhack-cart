// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const numbPrice = product.querySelector('.price span').innerHTML;
  const numbQuantity = product.querySelector('.quantity input').valueAsNumber;
  let multiply = parseFloat(numbPrice).toFixed(2) * parseFloat(numbQuantity).toFixed(2);
  let newSubTotal= product.querySelector('.subtotal span');
  newSubTotal.innerHTML=multiply.toFixed(2); 
  return multiply;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const allProducts = document.getElementsByClassName('product');
  
  const allProductsArray= [...allProducts];
  
  let total=0;

  allProductsArray.forEach((product) => {
    updateSubtotal(product);
    total+=updateSubtotal(product);
  });



  // ITERATION 3
  const newTotal=document.querySelector('#total-value span') 
  newTotal.innerHTML=total.toFixed(2);
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
