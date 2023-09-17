function Eliquid(Id, SubCategoryId, Flavour, Price, IsSalts, ImageUrl) {
    this.Id = Id;
    this.SubCategoryId = SubCategoryId;
    this.Flavour = Flavour;
    this.Price = Price;
    this.IsSalts = IsSalts;
    this.ImageUrl = ImageUrl;
}
 
var VapeJuice = [
    // D'Lish
    new Eliquid(1, 1, "Grape", 160, false, "./Images/ELiquids/Dlish/DlishGrape.jpeg"),
    new Eliquid(2, 1, "Mint", 160, false, "./Images/ELiquids/Dlish/DlishMint.png"),
    new Eliquid(3, 1, "Vanilla", 160, false, "./Images/ELiquids/Dlish/DlishVanilla.jpg"),

    // Fomo
    new Eliquid(4, 2, "Apple Aca Strawberry", 230, false, "./Images/ELiquids/Fomo/FomoAppleAcaStrawberry.jpg"),
    new Eliquid(5, 2, "Cherry Guava", 230, false, "./Images/ELiquids/Fomo/FomoCherryGuava.jpg"),
    new Eliquid(6, 2, "Honeydew Mango", 230, false, "./Images/ELiquids/Fomo/FomoHoneydewMango.jpeg"),
    new Eliquid(7, 2, "Pineapple Passion Fruit", 230, false, "./Images/ELiquids/Fomo/FomoPineapplePassionFruit.png"),

    // Fresh
    new Eliquid(8, 3, "Chewy Bubbloo", 200, false, "./Images/ELiquids/Fresh/FreshChewyBubbloo.jpg"),
    new Eliquid(9, 3, "Chewy Bubbloo Salts", 220, true, "./Images/ELiquids/Fresh/FreshChewyBubblooSalts.jpg"),
    new Eliquid(10, 3, "Iced Apple", 200, false, "./Images/ELiquids/Fresh/FreshIcedApple.jpeg"),
    new Eliquid(11, 3, "Iced Mango", 200, false, "./Images/ELiquids/Fresh/FreshIcedMango.jpeg"),
    new Eliquid(12, 3, "Iced Mango Salts", 220, true, "./Images/ELiquids/Fresh/FreshIcedMangoSalts.jpg"),
    new Eliquid(13, 3, "Iced Pear", 200, false, "./Images/ELiquids/Fresh/FreshIcedPear.jpeg"),
    new Eliquid(14, 3, "Iced Pear Salts", 220, true, "./Images/ELiquids/Fresh/FreshIcedPearSalts.jpeg"),

    // Krush
    new Eliquid(15, 4, "Black Current Cherry", 230, false, "./Images/ELiquids/Krush/KrushBlackCurrentCherry.jpg"),
    new Eliquid(16, 4, "Passion Fruit", 230, false, "./Images/ELiquids/Krush/KrushPassionfruit.jpg"),

    // Panther Series
    new Eliquid(17, 5, "Black Salts", 240, true, "./Images/ELiquids/PantherSeries/PantherBlackSalts.jpg"),
    new Eliquid(18, 5, "Blue Salts", 240, true, "./Images/ELiquids/PantherSeries/PantherBlueSalts.jpg"),
    new Eliquid(19, 5, "Pink Ice On Salts", 240, true, "./Images/ELiquids/PantherSeries/PantherPinkOnIceSalts.png"),
    new Eliquid(20, 5, "Pink Sour Salts", 240, true, "./Images/ELiquids/PantherSeries/PantherPinkSourSalt.png"),
    new Eliquid(21, 5, "Purple Salts", 240, true, "./Images/ELiquids/PantherSeries/PantherPurpleSalts.jpg"),

    // Polar Popz
    new Eliquid(22, 6, "Mango Passion Fruit", 200, false, "./Images/ELiquids/PolarPopz/PolarMangoPassionFruit.jpg"),
    new Eliquid(23, 6, "Raspberry Twist", 200, false, "./Images/ELiquids/PolarPopz/PolarPopzRaspberryTwist.jpeg"),
    new Eliquid(24, 6, "Tropical Berry", 200, false, "./Images/ELiquids/PolarPopz/PolarPopzTropicalBerry.jpeg"),

    // Punctuation
    new Eliquid(25, 7, "Exclamation", 230, false, "./Images/ELiquids/Punctuation/PunctuationExlamation.png"),
    new Eliquid(26, 7, "Hashtag", 230, false, "./Images/ELiquids/Punctuation/PunctuationHashtag.jpg"),
    new Eliquid(27, 7, "Semicolon", 230, false, "./Images/ELiquids/Punctuation/PunctuationSemicolon.jpg"),
    new Eliquid(28, 7, "Questionmark", 230, false, "./Images/ELiquids/Punctuation/PunctuationQuestionMark.jpg"),

    // Solt
    new Eliquid(29, 8, "Berry", 200, false, "./Images/ELiquids/Solt/SoltBerry.jpg"),
    new Eliquid(30, 8, "Blue Raspberry", 200, false, "./Images/ELiquids/Solt/SoltBlueRaspberry.jpg"),
    new Eliquid(31, 8, "Lemon Lime", 200, false, "./Images/ELiquids/Solt/SoltLemonLime.jpg"),
    new Eliquid(32, 8, "Pink Lemonade", 200, false, "./Images/ELiquids/Solt/SoltPinkLemonade.jpg"),
    new Eliquid(33, 8, "Spear Mint", 200, false, "./Images/ELiquids/Solt/SoltSpearMint.jpeg"),
    new Eliquid(34, 8, "Super Fruit", 200, false, "./Images/ELiquids/Solt/SoltSuperFruit.jpg"),

    // Vapology
    new Eliquid(35, 9, "Gumble", 190, false, "./Images/ELiquids/Vapology/VapologyGumble.png"),
    new Eliquid(36, 9, "Lychee", 220, false, "./Images/ELiquids/Vapology/VapologyLychee.png"),
    new Eliquid(37, 9, "Pineapple", 220, false, "./Images/ELiquids/Vapology/VapologyPineapple.jpg"),
    new Eliquid(38, 9, "Strawberry", 220, false, "./Images/ELiquids/Vapology/VapologyStrawberry.jpg"),
];
