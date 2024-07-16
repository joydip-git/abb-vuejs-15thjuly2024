export class Product {
    productId;
    productName;
    productCode;
    description;
    releaseDate;
    price;
    starRating;
    imageUrl;

    constructor(id, name, code, desc, date, price, rating, imagePath) {
        this.productId = id;
        this.productName = name;
        this.productCode = code;
        this.releaseDate = date;
        this.description = desc;
        this.price = price;
        this.starRating = rating;
        this.imageUrl = imagePath;
    }
}