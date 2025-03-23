/**
 *
 */

document.addEventListener("DOMContentLoaded", function () {
    console.log("hello");
});

document
    .getElementById("account-button")
    .addEventListener("click", function () {
        document.getElementById("account-overlay").classList.toggle("hidden");
    });
