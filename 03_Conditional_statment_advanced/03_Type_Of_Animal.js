function animalType (input) {

    let type = input[0];
    
    switch (type) {
        case "dog":
        case "wolf": console.log("mammal"); break;
        case "snake":
        case "lizzard": console.log("reptile"); break
        default: console.log("unknown");
    }
}
animalType(["wolf"])

