//Website visual functions

window.onload = rotate;

var theAd = 0;
var zmbImages = new Array("assets/images/zmb1.png", "assets/images/zmb2.png", "assets/images/zmb3.png", "assets/images/zmb4.png", "assets/images/zmb5.png");

function rotate() {
    theAd++;
    if (theAd == zmbImages.length) {
        theAd = 0;
    }
    document.getElementById("zomBies").src = zmbImages[theAd];

    setTimeout(rotate, 3 * 1000);
}

//Website game functions