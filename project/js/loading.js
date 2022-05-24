let loading = document.querySelector(".loading-wrapper");
let body = document.querySelector("body");
window.onload = function () {
  setTimeout(function () {
    loading.style.display = "none";
    body.style.height = "fit-content";
    body.style.overflow = "auto";
  }, 2000);
};
