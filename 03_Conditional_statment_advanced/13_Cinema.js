function cinema(input) {
 let projectionType = input[0];
 let rows = Number(input[1]);
 let colums = Number(input[2]);

 let totaPlaceCount = rows * colums;
 let totalPrice = 0;

 if(projectionType === "Premiere") {
    totalPrice = totaPlaceCount * 12;
 } else if (projectionType === "Normal") {
    totalPrice = totaPlaceCount * 7.5;
 } else {
    totalPrice = totaPlaceCount * 5;
 }
 
 console.log(`${totalPrice.toFixed(2)} leva`);
}

cinema(["Premiere","10","12"])
cinema(["Normal","21","13"])	
cinema(["Discount","12","30"])
