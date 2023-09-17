function Disposable(Id, SubCategoryId, Flavour, Price, Puffs, ImageUrl) {
    this.Id = Id;
    this.SubCategoryId = SubCategoryId;
    this.Flavour = Flavour;
    this.Price = Price;
    this.Puffs = Puffs;
    this.ImageUrl = ImageUrl;
}

var Disposables = [
    //Vaporlax
    new Disposable(1, 10, "Blue Razz Lemonade", 250, 5000, "./Images/Disposables/Vaporlax/VaporlaxBlueRazzLemonade.jpg"),
    new Disposable(2, 10, "Blue Energize", 250, 5000, "./Images/Disposables/Vaporlax/VaporlaxBlueEnergize.jpg"),
    new Disposable(3, 10, "Strawberry Kiwi", 250, 5000, "./Images/Disposables/Vaporlax/VaporlaxStrawberryKiwi.jpg"),
    // new Disposable(4, 10, "Watermelon Burst", 250, 5000, "./Images/Disposables/Vaporlax.jpg"),
    new Disposable(5, 10, "Strawberry Grape", 250, 5000, "./Images/Disposables/Vaporlax/VaporlaxStrawberryGrape.jpg"),
    new Disposable(6, 10, "Blood Orange Honeydew", 250, 5000, "./Images/Disposables/Vaporlax/VaporlaxBloodOrangeHoneydew.jpg"),
    new Disposable(7, 10, "Aloe Mango Melon", 250, 5000, "./Images/Disposables/Vaporlax/VaporlaxAloeMangoMelon.jpg"),

    //Vapengin
    // new Disposable(8, 11 ,"Cola Ice", 250, 5500, "./Images/Disposables/Vapengin/Vapenig.jpg"),
    new Disposable(9, 11, "Raspberry Lemon", 250, 5500, "./Images/Disposables/Vapengin/VapenginRaspberryLemon.jpg"),
    new Disposable(10, 11, "Mango Ice", 250, 5500, "./Images/Disposables/Vapengin/VapenginMangoIce.jpg"),
    new Disposable(11, 11, "Passion Fruit Kiwi Guava", 250, 5500, "./Images/Disposables/Vapengin/VapenginPassionFruitKiwiGuava.jpeg"),
    new Disposable(12, 11, "Lime Pie", 250, 5500, "./Images/Disposables/Vapengin/VapenginLimePie.jpg"),
    new Disposable(13, 11, "Pineapple Coconut", 250, 5500, "./Images/Disposables/Vapengin/VapenginPineappleCoconut.jpg"),
    new Disposable(14, 11, "Moose Cream", 250, 5500, "./Images/Disposables/Vapengin/VapenginMooseCream.jpeg"),

    //Dragbar
    new Disposable(15, 12, "Strawberry Ice Cream", 280, 5000, "./Images/Disposables/Dragbar/DragbarStrawberryIceCream.jpg"),
    new Disposable(16, 12, "Watermelon Ice", 280, 5000, "./Images/Disposables/Dragbar/DragbarWatermelonIce.png"),
    new Disposable(17, 12, "Mint Twist", 280, 5000, "./Images/Disposables/Dragbar/DragbarMintTwist.jpg"),
    // new Disposable(18, 12, "Peach Mango", 280, 5000, "./Images/Disposables/Dragbar/Dragbar.jpg"),
    new Disposable(19, 12, "Vanilla Cream Tabacco", 280, 5000, "./Images/Disposables/Dragbar/DragbarVanillaCreamTabacco.jpg"),
    new Disposable(20, 12, "Fruit Slushie", 280, 5000, "./Images/Disposables/Dragbar/DragbarFruitSlushie.jpg"),
    new Disposable(21, 12, "Pina Colada", 280, 5000, "./Images/Disposables/Dragbar/DragbarPinaColada.jpeg"),
    new Disposable(22, 12, "Aloe Grape", 280, 5000, "./Images/Disposables/Dragbar/DragbarAloeGrape.jpg"),
    // new Disposable(23, 12, "Peach Mango", 280, 5000, "./Images/Disposables/Dragbar/Dragbar.jpg"),

    //Elfbar
    new Disposable(24, 13, "Peach Ice", 250, 5000, "./Images/Disposables/Elfbar/ElfbarPeachIce.jpg"),
    new Disposable(25, 13, "Triple Mango", 250, 5000, "./Images/Disposables/Elfbar/ElfbarTripleMango.jpeg"),
    new Disposable(26, 13, "Kiwi Passion Fruit Guava", 250, 5000, "./Images/Disposables/Elfbar/ElfbarKiwiPassionFruitGuava.jpg"),
    new Disposable(27, 13, "Cranberry Grape", 250, 5000, "./Images/Disposables/Elfbar/ElfbarCranberryGrape.png"),
    new Disposable(28, 13, "Lemon Mint", 250, 5000, "./Images/Disposables/Elfbar/ElfbarLemonMint.jpg"),
    new Disposable(29, 13, "Triple Melon", 250, 5000, "./Images/Disposables/Elfbar/ElfbarTripleMelon.jpeg"),
    new Disposable(30, 13, "Peach Mango Watermelon", 250, 5000, "./Images/Disposables/Elfbar/ElfbarPeachMangoWatermelon.jpeg"),
    new Disposable(31, 13, "Watermelon Bubble Gum", 250, 5000, "./Images/Disposables/Elfbar/ElfbarWatermelonBubbleGum.jpeg"),
    new Disposable(32, 13, "Triple Berry Ice", 250, 5000, "./Images/Disposables/Elfbar/ElfbarTripleBerryIce.jpeg"),
    new Disposable(33, 13, "Strawberry Mango", 250, 5000, "./Images/Disposables/Elfbar/ElfbarStrawberryMango.jpeg"),
    new Disposable(34, 13, "Sakura Grape", 250, 5000, "./Images/Disposables/Elfbar/ElfbarSakuraGrape.jpg"),
    new Disposable(35, 13, "Strawberry Banana", 250, 5000, "./Images/Disposables/Elfbar/ElfbarStrawberryBanana.jpeg"),
    new Disposable(36, 13, "Cola", 250, 5000, "./Images/Disposables/Elfbar/ElfbarCola.jpeg"),
    // new Disposable(37, 13, "Mango Peach", 250, 5000, "./Images/Disposables/Elfbar/Elfbar.jpg"),

    //KK Energy
    // new Disposable(38, 14, "Apple Ice", 200, 5000),
    // new Disposable(39, 14, "Cool Mint", 200, 5000),
    // new Disposable(40, 14, "Banana Milk", 200, 5000),
    // new Disposable(41, 14, "Strawberry Donut", 200, 5000),
    // new Disposable(42, 14, "Red Apple Lemon", 200, 5000),
    // new Disposable(43, 14, "Orange Soda", 200, 5000),
    // new Disposable(44, 14, "Grape Ice", 200, 5000),
    // new Disposable(45, 14, "Gummy bear", 200, 5000),
    // new Disposable(46, 14, "Lush Ice", 200, 5000),
    // new Disposable(47, 14, "Mango Strawberry", 200, 5000), 

    //R&M Legend
    // new Disposable(48, 15, "Blueberry Ice", 360, 10000),
    // new Disposable(49, 15, "Grape Raspberry Black Current", 360, 10000),

    //Nasty
    new Disposable(50, 16, "Peach Ice", 250, 5000, "./Images/Disposables/Nasty/NastyPeachIce.jpg"),
    // new Disposable(51, 15, "Watermelon Ice", 250, 5000),
]
