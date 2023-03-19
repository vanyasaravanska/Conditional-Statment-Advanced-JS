function newHouse(input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);
 
    let totalPrice = 0;

    switch (flowerType) {
        case 'Roses' :
            totalPrice = flowerCount * 5;
        break;
        case 'Dahlias' :
            totalPrice = flowerCount * 3.80;
        break;
        case 'Tulips' :
            totalPrice = flowerCount * 2.80;
        break;
        case 'Narcissus' :
            totalPrice = flowerCount * 3;
        break;
        case 'Gladiolus' :
            totalPrice = flowerCount * 2.50;
        break;
    }

    if (flowerType === 'Roses' && flowerCount > 80) {
        totalPrice *= 0.90;
    } else if (flowerType === 'Dahlias' && flowerCount > 90) {
        totalPrice *= 0.85;
    } else if (flowerType === 'Tulips' && flowerCount > 80) {
        totalPrice *= 0.85;
    } else if (flowerType === 'Narcissus' && flowerCount < 120) {
        totalPrice *= 1.15;
    } else if (flowerType === 'Gladiolus' && flowerCount < 80) {
        totalPrice *= 1.20;
    }

    if (budget >= totalPrice) {
        let moneyLeft = budget -totalPrice;
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${moneyLeft.toFixed(2)} leva left.`);
    } else {
        let moneyNeeded = totalPrice - budget;
        console.log(`Not enough money, you need ${moneyNeeded.toFixed(2)} leva more.`);
    }
}
newHouse(["Roses",
"55",
"250"])
newHouse(["Tulips",
"88",
"260"])
newHouse(["Narcissus",
"119",
"360"])

