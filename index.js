var categoryNav = document.querySelector('.category-nav');

function displayCategories(categories, subcategories) {
    // Clear any existing content in the category-nav container
    categoryNav.innerHTML = '';

    // Loop through the categories
    categories.forEach(function (category) {
        var categoryNameElement = document.createElement('div');
        categoryNameElement.className = 'category-item';

        var categoryNameText = document.createTextNode(category.CategoryName);
        categoryNameElement.appendChild(categoryNameText);

        // Create a container for subcategories
        var subcategoryContainer = document.createElement('div');
        subcategoryContainer.className = 'subcategory-container';

        // Find and display subcategories for the current category
        var categorySubcategories = subcategories.filter(function (subcategory) {
            return subcategory.CategoryId === category.Id;
        });

        if (categorySubcategories.length > 0) {
            var subcategoryList = document.createElement('ul');
            subcategoryList.className = 'subcategory-list';

            categorySubcategories.forEach(function (subcategory) {
                var subcategoryItem = document.createElement('li');
                subcategoryItem.textContent = subcategory.Brand;
                subcategoryList.appendChild(subcategoryItem);
            });

            // Append the subcategory list to the subcategory container
            subcategoryContainer.appendChild(subcategoryList);

            // Add event listeners for hover
            categoryNameElement.addEventListener('mouseenter', function () {
                subcategoryList.style.display = 'block';
            });

            categoryNameElement.addEventListener('mouseleave', function () {
                subcategoryList.style.display = 'none';
            });
        }

        // Append the category name element to the category-nav container
        categoryNav.appendChild(categoryNameElement);
        // Append the subcategory container to the category name element
        categoryNameElement.appendChild(subcategoryContainer);
    });
}


// Assuming you have a container element to display E-Liquids
var eliquidsContainer = document.querySelector('.viewEliquids');

// Loop through your E-Liquids data
VapeJuice.forEach(function (eliquid) {
    // Create a container for each E-Liquid
    var eliquidContainer = document.createElement('div');
    eliquidContainer.className = 'eliquid-item';

    // Create an image element
    var eliquidImage = document.createElement('img');
    eliquidImage.src = eliquid.ImageUrl;
    eliquidImage.alt = eliquid.Flavour;

    // Create elements to display E-Liquid information
    var eliquidInfo = document.createElement('div');
    eliquidInfo.className = 'eliquid-info';
    eliquidInfo.innerHTML = `
        <h5>${eliquid.Flavour}</h5>
        <p>Price: R${eliquid.Price}</p>
    `;

    // Append the image and info elements to the E-Liquid container
    eliquidContainer.appendChild(eliquidImage);
    eliquidContainer.appendChild(eliquidInfo);

    // Append the E-Liquid container to the main container
    eliquidsContainer.appendChild(eliquidContainer);
});


var deviceContainer = document.querySelector('.viewDevices');

// Loop through your Devices data
Devices.forEach(function (device) {
    // Create a container for each Device
    var deviceItem = document.createElement('div');
    deviceItem.className = 'device-item';

    // Create an image element
    var deviceImage = document.createElement('img');
    deviceImage.src = device.ImageUrl; // Make sure ImageUrl is part of your Device object
    deviceImage.alt = device.Color;
    // Create elements to display Device information
    var deviceInfo = document.createElement('div');
    deviceInfo.className = 'device-info';
    deviceInfo.innerHTML = `
        <h5>${device.Color}</h5>
        <p>Price: R${device.Price}</p>
    `;

    // Append the image and info elements to the Device container
    deviceItem.appendChild(deviceImage);
    deviceItem.appendChild(deviceInfo);

    // Append the Device container to the main container
    deviceContainer.appendChild(deviceItem)
});

// Assuming you have a container element to display Disposables
var disposablesContainer = document.querySelector('.viewDisposables');

// Loop through your Disposables data
Disposables.forEach(function (disposable) {
    // Create a container for each Disposable
    var disposableItem = document.createElement('div');
    disposableItem.className = 'disposable-item';

    // Create an image element
    var disposableImage = document.createElement('img');
    disposableImage.src = disposable.ImageUrl; // Make sure ImageUrl is part of your Disposable object
    disposableImage.alt = disposable.Flavour;

    // Create elements to display Disposable information
    var disposableInfo = document.createElement('div');
    disposableInfo.className = 'disposable-info';
    disposableInfo.innerHTML = `
        <h5>${disposable.Flavour}</h5>
        <p>Price: R${disposable.Price}</p>
        <p>Puffs: ${disposable.Puffs}</p>
    `;

    // Append the image and info elements to the Disposable container
    disposableItem.appendChild(disposableImage);
    disposableItem.appendChild(disposableInfo);

    // Append the Disposable container to the main container
    disposablesContainer.appendChild(disposableItem);
});


var tanksContainer = document.querySelector('.viewTanks');

// Loop through your Tanks data
Tanks.forEach(function (tank) {
    // Create a container for each Tank
    var tankItem = document.createElement('div');
    tankItem.className = 'tank-item';

    // Create an image element
    var tankImage = document.createElement('img');
    tankImage.src = tank.ImageUrl; // Make sure ImageUrl is part of your Tank object
    tankImage.alt = tank.Color;
    var tankInfo = document.createElement('div');
    tankInfo.className = 'tank-info';
    tankInfo.innerHTML = `
        <h5>${tank.Color}</h5>
        <p>Price: R${tank.Price}</p>
    `;

    // Append the image and info elements to the Tank container
    tankItem.appendChild(tankImage);
    tankItem.appendChild(tankInfo);

    // Append the Tank container to the main container
    tanksContainer.appendChild(tankItem);
});

// Call the displayCategories function with your Category and SubCategory objects
displayCategories(categories, subcategories);


