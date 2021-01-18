function checkColour() {

    let colourValue = document.querySelector(".inputField").value;
    let colour = colourValue.toLowerCase();
    let response = "";

    if(colour == "red") {
        response = "Red is usually used for representing danger, excitement, urgency"
    } else if (colour == "blue") {
        response = "Blue colour is usually used for representing confident, secure, and trust"
    } else if (colour == "green") {
        response = "Green colour is usually used for representing positive, nature, stable, and growth"
    } else {
        response = "Please choose between Red, Blue, or Green";
    }
    document.querySelector(".result").innerHTML = response;
}
document.querySelector(".submitBtn").addEventListener("click", checkColour);