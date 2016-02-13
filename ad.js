window.onload = rotate;

var theAd = 0;
var adImages = new Array("Temp.png","Mickey_Mouse.png");

function rotate() {
     document.getElementById("adBanner").src = adImages[theAd];
     theAd++;
     if (theAd == adImages.length) {
        theAd = 0;
     }


     setTimeout(rotate, 5 * 1000);
}