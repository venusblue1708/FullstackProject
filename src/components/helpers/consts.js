export const API = "http://34.90.36.69/api";

export function getCountProductsInCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart ? cart.courses.length : 0;
}

export function getCountProductsInWishList() {
  const wishList = JSON.parse(localStorage.getItem("wishList"));
  return wishList ? wishList.courses.length : 0;
}
