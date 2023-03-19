function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let quantity = Number(input[2]);
    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        if (fruit === "banana") {
            let price = 2.50 * quantity;
            console.log(price.toFixed(2));
        } else if (fruit === "apple") {
            let price = 1.20 * quantity;
            console.log(price.toFixed(2));
        } else if (fruit === "orange") {
            let price = 0.85 * quantity;
            console.log(price.toFixed(2));

        } else if (fruit === "grapefruit") {
            let price = 1.45 * quantity;
            console.log(price.toFixed(2));
        } else if (fruit === "kiwi") {
            let price = 2.70 * quantity;
            console.log(price.toFixed(2));
        } else if (fruit === "pineapple") {
            let price = 5.50 * quantity;
            console.log(price.toFixed(2));
        } else if (fruit === "grapes") {
            let price = 3.85 * quantity
            console.log(price.toFixed(2));
        } else {
            console.log("error");
        }
    } else if (day === "Saturday" || day === "Sunday") {
        if (fruit === "banana") {
            let price = 2.70 * quantity;
            console.log(price.toFixed(2));
        } else if (fruit === "apple") {
            let price = 1.25 * quantity;
            console.log(price.toFixed(2));
        } else if (fruit === "orange") {
            let price = 0.90 * quantity;
            console.log(price.toFixed(2));
        } else if (fruit === "grapefruit") {
            let price = 1.60 * quantity;
            console.log(price.toFixed(2));
        } else if (fruit === "kiwi") {
            let price = 3.00 * quantity;
            console.log(price.toFixed(2));
        } else if (fruit === "pineapple") {
            let price = 5.60 * quantity;
            console.log(price.toFixed(2));
        } else if (fruit === "grapes") {
            let price = 4.20 * quantity;
            console.log(price.toFixed(2));
        }
    } else {
        console.log("error");
    }
}

fruitShop(["apple", "Tuesday", "2"])
fruitShop(["orange", "Sunday", "3"])
fruitShop(["kiwi", "Monday", "2.5"])
fruitShop(["grapes", "Saturday", "0.5"])
fruitShop(["tomato", "Monday", "0.5"])
