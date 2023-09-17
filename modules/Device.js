function Device(Id, CategoryId, Color, Price, ImageUrl) {
    this.Id = Id;
    this.CategoryId = CategoryId;
    this.Color = Color;
    this.Price = Price;
    this.ImageUrl = ImageUrl; // Make sure ImageUrl is part of your Device object
}

var Devices = [
    // Geekvape
    // new Device(1, 17, "Blue/Purple", 950),
    // new Device(2, 17, "Pink/Orange", 950),
    // new Device(3, 17, "Blue/Orange", 950),

    // Voopoo
    new Device(4, 18, "Black", 850, "./Images/Devices/VoopooDevice.jpeg"),

    // Vaperesso Gen 80s
    new Device(5, 19, "Blue", 850, "./Images/Devices/VaperessoGen80s.jpeg"),
    new Device(6, 19, "Silver", 850, "./Images/Devices/VaperessoGen80s.jpeg"),
    new Device(7, 19, "Grey", 850, "./Images/Devices/VaperessoGen80s.jpeg"),
    new Device(8, 19, "Pink", 850, "./Images/Devices/VaperessoGen80s.jpeg"),
    new Device(9, 19, "Black", 850, "./Images/Devices/VaperessoGen80s.jpeg"),

    // Vaperesso Luxe X
    new Device(10, 20, "Black", 650, "./Images/Devices/VaperessoLuxex.jpeg"),
];