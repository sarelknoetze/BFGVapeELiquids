// Select the .products div
var productsContainer = document.querySelector('.products');

// Loop through your VapeJuice data
Devices.forEach(function (device) {
    // Create a container for each product
    var productItem = document.createElement('div');
    productItem.className = 'product-item';

    // Create an image element
    var productImage = document.createElement('img');
    productImage.src = device.ImageUrl;
    productImage.alt = device.Flavour;

    // Create elements to display product information
    var productInfo = document.createElement('div');
    productInfo.className = 'product-info';
    productInfo.innerHTML = `
        <h5>${device.Color}</h5>
        <p>Price: R${device.Price}</p
    `;

    // Append the image and info elements to the product container
    productItem.appendChild(productImage);
    productItem.appendChild(productInfo);

    // Append the product container to the main products container
    productsContainer.appendChild(productItem);
});

