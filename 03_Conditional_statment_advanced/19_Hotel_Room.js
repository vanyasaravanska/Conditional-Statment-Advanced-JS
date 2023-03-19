function hotelRoom (input) {
   let month = input[0];
   let nightsCount = Number(input[1]);

   let placeType = '';
   let studioPrice = 0;
   let apartmentPrice = 0;

   switch (month) {
    case 'May' :
    case 'October' :
        studioPrice = nightsCount * 50;
        apartmentPrice = nightsCount * 65;

        if (nightsCount > 14) {
            studioPrice *= 0.70
            apartmentPrice *= 0.9;
        }
        break;
   
    case 'June' :
    case 'September' :
        studioPrice = nightsCount * 75.20;
        apartmentPrice = nightsCount * 68.70;

        if (nightsCount > 14) {
            studioPrice *= 0.80;
            apartmentPrice *= 0.90;
        }
            break;

    case 'July' :
    case 'August' :
        studioPrice = nightsCount * 76;
        apartmentPrice = nightsCount * 77; 
        
    if (nightsCount > 14) {
            apartmentPrice *= 0.90;
        break;
        }
   }
 
   console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
   console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
hotelRoom(["May","15"])
hotelRoom(["June","14"])
hotelRoom(["August","20"])
