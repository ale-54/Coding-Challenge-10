//Task 1: Creating a Product Class
class Product {
    constructor(name, id, price, stock) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }; //product class
    getDetails() {
        return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }; //product details
    updateStock(quantity) {
        this.stock -= quantity;
    }; //updating stock
};

const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); //Product: Laptop, ID: 101, Price: $1200, Stock: 10

prod1.updateStock(3); //stock: 10-3 = 7
console.log(prod1.getDetails()); //Product: Laptop, ID: 101, Price: $1200, Stock: 7