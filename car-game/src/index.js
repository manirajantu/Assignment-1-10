document.querySelector("#road").width = 1200;

let car = document.querySelector("#car");
car.style.position = "absolute";
car.style.top = 400;
car.style.left = 600;

/*
    You only require to add code within "addEventListener" function. 
    When "a" key is pressed, move the car to the left 10px. When "d" key is pressed, move the car to the right 10px.
    Hint: The position of the car element is "absolute".
*/
window.addEventListener('keypress', function(evt){
    console.log(evt);
    // Add code here    
    switch(evt.key.toLowerCase()) {
        case "a":
            car.style.left = parseInt(car.style.left) -10;
            break;

            case "d":
                car.style.left = parseInt(car.style.left) +10;
                break;

            default:
                console.log("Unrecognized input.");
                break;
    }
});