function journey(input) {
    let budget = Number(input[0]);
    let season = input[1]

    let destination = '';
    let placeType = '';
    let price = 0;

    if(budget <=100) {
        destination = 'Bulgaria';
    } else if (budget <= 1000) {
        destination = 'Balkans';
    } else {
        destination = 'Europe';
    }

    if(season === 'summer') {
        placeType = 'Camp';
    } else {
        placeType = 'Hotel';
    }

    if (destination === 'Bulgaria') {
        if (season === 'summer') {
            price = 0.3 * budget;
        } else {
            price = 0.7 * budget;
        }
    } else if (destination === 'Balkans') {
        if (season === 'summer')  {
            price = 0.4 * budget;
        } else {
            price = 0.8 * budget;
        }
    } else {
        price = 0.9 * budget;
        placeType = 'Hotel';
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${placeType} - ${price.toFixed(2)}`);
}
journey(["50", "summer"])
journey(["75", "winter"])
journey(["312", "summer"])
journey(["678.53", "winter"])
journey(["1500", "summer"])