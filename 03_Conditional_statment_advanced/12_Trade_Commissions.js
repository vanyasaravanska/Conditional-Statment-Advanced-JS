function tradeCommisions(input) {
    let town = input[0];
    let size = Number(input[1])

    if (town === "Sofia")
        if (size >= 0 && size <= 500) {
            let price = size * 0.05;
            console.log(price.toFixed(2));
        } else if (size > 500 && size <= 1000) {
            let price = size * 0.07;
            console.log(price.toFixed(2));
        } else if (size > 1000 && size <= 10000) {
            let price = size * 0.08;
            console.log(price.toFixed(2));
        } else if (size > 10000) {
            let price = size * 0.12;
            console.log(price.toFixed(2));
        } else {
            console.log("error");
        }
    if (town === "Varna")
        if (size >= 0 && size <= 500) {
            let price = size * 0.045;
            console.log(price.toFixed(2));
        } else if (size > 500 && size <= 1000) {
            let price = size * 0.075;
            console.log(price.toFixed(2));
        } else if (size > 1000 && size <= 10000) {
            let price = size * 0.1;
            console.log(price.toFixed(2));
        } else if (size > 10000) {
            let price = size * 0.13;
            console.log(price.toFixed(2)); {}
        } else {
            console.log("error");
        }

    if (town === "Plovdiv")
        if (size >= 0 && size <= 500) {
            let price = size * 0.055;
            console.log(price.toFixed(2));
        } else if (size > 500 && size <= 1000) {
            let price = size * 0.08;
            console.log(price.toFixed(2));
        } else if (size > 1000 && size <= 10000) {
            let price = size * 0.12;
            console.log(price.toFixed(2));
        } else if (size > 10000) {
            let price = size * 0.145;
            console.log(price.toFixed(2));
        } else {
            console.log("error");
        }
}

tradeCommisions(["Sofia", "1500"])
tradeCommisions(["Plovdiv", "499.99"])
tradeCommisions(["Varna", "3874.50"])
tradeCommisions(["Kaspichan", "-50"])
