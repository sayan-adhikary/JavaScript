class Resturent {
    static totalRestaurants = 0;
    // restaurantName;
    // restaurantId;
    // menu;
    // earnings;
    constructor(restaurantName, restaurantId) {
        Resturent.totalRestaurants++;
        this.restaurantName = restaurantName;
        this.restaurantId = restaurantId;
        this.menu = [];
        this.earnings = 0;
    }

    //methods
    addFoodItem(name, price) {
        let food = { "name": name, "price": price };
        this.menu.push(food);
    }

    removeFoodItem(name) {
        for (let ele of this.menu) {
            if (ele === name) {
                this.menu.splice(this.menu.indexOf(ele), 1);
                break;
            }
        }
        return;
    }

    showMenu() {
        // for (let ele of this.menu) {
        //     console.log(`${ele.name} is an ${ele.price}`);
        // }
        return this.menu;
    }

    showEarning() {
        return this.earnings;
    }

    static showTotalResturents() {
        return Resturent.totalRestaurants;
    }
}

//creating an object from the Resturent for the PremiumResturent
class PremiumRestaurant extends Resturent {
    static totalPremiumRestaurants = 0;

    //constructor
    constructor(restaurantName, restaurantId, deliveryCharge) {
        PremiumRestaurant.totalPremiumRestaurants++;
        super(restaurantName, restaurantId);
        this.deliveryCharge = deliveryCharge;
    }

    //method
    showDeliveryCharge() {
        return this.deliveryCharge;
    }

    placeOrder(foodName, quantity, customer) {
        for (let ele of this.menu) {
            if (ele.name === foodName) {
                this.quantity = quantity;
                this.earnings += ele.price * quantity;

            }
        }
    }
}

let r1 = new Resturent("Bilal", 32113);
let r2 = new Resturent("Bilal", 32113);

r1.addFoodItem("chiken", 321);
r1.addFoodItem("mutton", 432);
r1.addFoodItem("egg", 21);

// console.log(r1.showMenu());

console.log(Resturent.showTotalResturents());