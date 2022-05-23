/*
let loading = document.querySelector(".loading-wrapper");
window.onload = function () {
  setTimeout(function () {
    loading.style.display = "none";
  }, 2000);
};
*/

load("https://functionalty.netlify.app/");
function load(url) {
  // displaying loading screen
  document.querySelector(".loading-wrapper").visible = true;
  // request the data
  var req = new XMLHttpRequest();
  req.open("POST", url, true);
  
  req.onreadystatechange = function () {
    if (req.readyState == 4 && req.status == 200) {
      // content is loaded
      if (req.responseText) {
        document.querySelector("body").innerHTML = req.responseText;
        document.querySelector(".loader-wrapper").visible = false;
      }
    }
  }
  request.send(vars);
}
