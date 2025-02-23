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

//Task 2: Creating an Order Class
class Order {
    constructor(orderId, product, quantity) {
        this.orderId = orderId;
        this.product = product;
        this.quantity = quantity;
        this.totalPrice = product.price * quantity; //calculating total price
        this.product.updateStock(this.quantity);
    }; //order class
    getOrderDetails() {
        return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}`;
    }; //order details
};

const order1 = new Order(501, prod1, 2);
console.log(order1.getOrderDetails()); //Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400
console.log(prod1.getDetails()); //Product: Laptop, ID: 101, Price: $1200, Stock: 5 (Stock reduced)

//Task 3: Creating an Inventory Class
class Inventory {
    constructor() {
        this.products = []; //array of products
        this.orders = []; //array of orders (task 4)
    };
    addProduct(product) {
        this.products.push(product); //adding a new product to inventory
    };
    listProducts() {
        return this.products.forEach(product => {console.log(order1.getOrderDetails())});
    }; //logging product details

//Task 4: Implementing Order Management
    placeOrder(orderId, product, quantity) {
        if (product.stock >= quantity) {
            const newOrder = new Order(orderId, product, quantity);
            return this.orders.push(newOrder);
        }; //creates new order and adds to "orders" if available
    };
    listOrders() {
        this.orders.forEach(order => {console.log(order.getOrderDetails())});
    }; //logs all placed orders

//Task 5: Implementing Product Restocking
    restockProduct(productId, quantity) {
        const product = this.products.find(product => product.id === productId);
        if (product) {
            product.stock += quantity; //increasing stock of product
        };
    };
};

const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts(); //Product: Laptop, ID: 101, Price: $1200, Stock: 5

//Task 4: Implementing Order Management
inventory.placeOrder(601, prod1, 2);
inventory.listOrders(); //Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400
console.log(prod1.getDetails()); //Product: Laptop, ID: 101, Price: $1200, Stock: 3

//Task 5: Implementing Product Restocking
inventory.restockProduct(101, 5);
console.log(prod1.getDetails()); //Product: Laptop, ID: 101, Price: $1200, Stock: 8