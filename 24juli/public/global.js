window.onload = function () {
  try {
    var url_string = window.location.href.toLowerCase();
    var url = new URL(url_string);
    var untuk = url.searchParams.get("untuk");
    console.log(untuk);
    document.getElementById("nama").innerHTML = untuk;
  } catch (err) {
    console.log("Issues with parsing URL param - " + err);
  }
};

function play() {
  var audio = document.getElementById("audio");
  audio.play();
}

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
modal.style.display = "block";
span.onclick = function () {
  modal.style.display = "none";
  play();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    play();
  }
};
