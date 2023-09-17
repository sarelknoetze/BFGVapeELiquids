// Select the .products div
var productsContainer = document.querySelector('.products');

// Loop through your VapeJuice data
VapeJuice.forEach(function (eliquid) {
    // Create a container for each product
    var productItem = document.createElement('div');
    productItem.className = 'product-item';

    // Create an image element
    var productImage = document.createElement('img');
    productImage.src = eliquid.ImageUrl;
    productImage.alt = eliquid.Flavour;

    // Create elements to display product information
    var productInfo = document.createElement('div');
    productInfo.className = 'product-info';
    productInfo.innerHTML = `
        <h5>${eliquid.Flavour}</h5>
        <p>Price: R${eliquid.Price}</p>
        <p>${eliquid.IsSalts ? 'Contains Salts' : 'Nicotine Free'}</p>
    `;

    // Append the image and info elements to the product container
    productItem.appendChild(productImage);
    productItem.appendChild(productInfo);

    // Append the product container to the main products container
    productsContainer.appendChild(productItem);
});

