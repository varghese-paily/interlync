class ProductSelectors {
    public static productLink = "a[href='/vendor/products']"
    public static productsHeader = "//a[text()='products']"
    public static addProductButton = "((//div[@class='chakra-stack css-rmxdag'])[2]//button)[3]"
    public static popup = "//section[contains(@id, 'chakra') and @role='dialog']"
    public static addProductName = "input[placeholder='Add product name']"
    public static addProductDescription = "textarea[placeholder='Add product description']"
    public static saveBtn = "//button[text()='Save']"
    public static productName(name:string){
        return `//p[text()='${name}']`
    }
    public static menuBtn = "(//div[@data-tag='allowRowEvents']//button[@aria-haspopup='menu'])[1]"
    public static editProduct = "(//div[@tabindex='-1']//button[text()='Edit Product' and @role='menuitem'])"
    public static editProductHeader = "//p[text()='Edit Product']"
    public static updateBtn = "(//button[text()='Update'])"
    public static deleteBtn = "(//div[@tabindex='-1']//button[text()='Delete Product' and @role='menuitem'])"
    public static deleteProductHeader = "//p[text()='Delete Product']"
    public static yesBtn = "//button[text()='Yes']"
    public static productSearch = "//input[@placeholder='Search...']"
    public static closeBtn = "//button[contains(@class, 'chakra-modal__close-btn')]"
    public static noRecordMsg= "//div[text()='There are no records to display']"
}  
export { ProductSelectors }
  