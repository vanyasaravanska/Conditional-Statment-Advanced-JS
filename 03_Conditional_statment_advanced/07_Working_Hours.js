function workingHours(input) {
    let hour = Number(input[0]);
    let day = input[1];

    if (hour >= 10 && hour <= 18) {
        console.log("open");
    } else if (day != "Sunday") {
        console.log("closed");
    }
}
workingHours(["17"],["Sunday"])