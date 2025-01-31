const products = {
  1: { imageUrl: "photo/NikeBlackSweatshirt.png", name: "Nike Black Sweatshirt", price: 600.00, description: "Black" },
  2: { imageUrl: "photo/NikeBlueSweatshirt.png", name: "Nike Blue Sweatshirt", price: 500.00, description: "Blue" },
  3: { imageUrl: "photo/NikeBrownSweatshirt.png", name: "Nike Brown Sweatshirt", price: 500.00, description: "Brown" },
  4: { imageUrl: "photo/NikeGreySweatshirt.png", name: "Nike Grey Sweatshirt", price: 500.00, description: "Grey" },
  5: { imageUrl: "photo/NikeSailSweatshirt.png", name: "Nike Sail Sweatshirt", price: 600.00, description: "Sail" },
};

const urlParams = new URLSearchParams(window.location.search); // Get productId from URL
const productId = urlParams.get('productId');

if (productId && products[productId]) {
  const product = products[productId];
  document.getElementById('productImage').src = product.imageUrl;
  document.getElementById('productName').textContent = product.name;
  document.getElementById('productNametag').textContent = product.name;
  document.getElementById('productPrice').textContent = `$${product.price.toFixed(2)}`;
  document.getElementById('productDescription').textContent = product.description;
  document.getElementById('productNavigation').href = `nikeProduct.html?productId=${productId}`;

  const addToCartButton = document.querySelector('.add-to-cart');
  addToCartButton.setAttribute('added-product', product.name);
  addToCartButton.setAttribute('added-price', product.price); 
} else {
  document.getElementById('product-name').textContent = "Product not found.";
}