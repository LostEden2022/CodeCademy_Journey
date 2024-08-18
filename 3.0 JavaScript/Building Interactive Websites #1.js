const freeShippingMessage = "Congrats! You are eligible for free shipping on this order.";

const freeShippingPromo = "Get free shipping on all orders of $75 dollars or more.";

function checkCartTotal(subTotal) {
if (subTotal => 75) {
 return freeShippingPromo;
  } else {
 return freeShippingMessage;
  }
}

console.log(checkCartTotal(40));
