
function Category(Id, CategoryName, Description) {
    this.Id = Id;
    this.CategoryName = CategoryName;
    this.Description = Description;
    this.SubCategories = [];
}

Category.prototype.addSubCategory = function (SubCategory) {
    this.SubCategories.push(SubCategory);
}

var category1 = new Category(1, "Eliquids", "All of our great flavours.");
var category2 = new Category(2, "Disposables", "All of our brands for the disposable vapes.");
var category3 = new Category(3, "Devices", "All of our different vapes.");
var category4 = new Category(4, "Tanks", "The different heads/tanks we have for all the different devices.");

// Create an array to hold your Category objects
var categories = [category1, category2, category3, category4];

// Call the displayCategories function with your Category objects
displayCategories(categories);