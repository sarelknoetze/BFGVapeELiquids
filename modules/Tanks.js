function Tank(Id, CategoryId, Color, Price, ImageUrl) {
    this.Id = Id;
    this.CategoryId = CategoryId;
    this.Color = Color;
    this.Price = Price;
    this.ImageUrl = ImageUrl;
}

var Tanks = [
    // Geekvape
    new Tank(1, 21, "Blue", 600, "./Images/Tanks/GeekvapeHeadBlue.jpeg"),
    new Tank(2, 21, "Grey", 600, "./Images/Tanks/GeekvapeHeadGrey.jpeg"),
    // new Tank(3, 21, "Black", 600, "./Images/Tanks/Blue.jpeg"),
    new Tank(4, 21, "Silver", 600, "./Images/Tanks/Silver.jpeg"),
];