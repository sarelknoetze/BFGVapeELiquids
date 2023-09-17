function SubCategory(Id, CategoryId, Brand){
    this.Id = Id;
    this.CategoryId = CategoryId;
    this.Brand = Brand;
}

var subcategories = [
    //E-Liquids
    new SubCategory(1, 1, "D'Lish"),
    new SubCategory(2, 1, "Fomo"),
    new SubCategory(3, 1, "Fresh"),
    new SubCategory(4, 1, "Krush"),
    new SubCategory(5, 1, "Panther Series"),
    new SubCategory(6, 1, "Polar Popz"),
    new SubCategory(7, 1, "Punctuation"),
    new SubCategory(8, 1, "Solt"),
    new SubCategory(9, 1, "Vapology"),

    //Disposables
    new SubCategory(10, 2, "Vaporlax (5 000)"),
    new SubCategory(11, 2, "Vapengin (5 500)"),
    new SubCategory(12, 2, "Dragbar (5 000)"),
    new SubCategory(13, 2, "Elfbar (5 000)"),
    new SubCategory(14, 2, "KK Energy (5 000)"),
    new SubCategory(15, 2, "R&M Legend (10 000)"),
    new SubCategory(16, 2, "Nasty (5 000)"),

    //Devices
    new SubCategory(17, 3, "Geekvape"),
    new SubCategory(18, 3, "Voopoo"),
    new SubCategory(19, 3, "Vaperesso Gen 80S"),
    new SubCategory(20, 3, "Vaperesso Luxe X"),
    
    //Heads
    new SubCategory(21, 4, "Geekvape"),
];

