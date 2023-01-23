const submitButton = document.querySelector(".sub-button");
const  mainDiv = document.querySelector(".main-div");
const thankDiv = document.querySelector(".thank-div");
const rating = document.querySelectorAll(".btn");
const num = document.getElementById("rating");

submitButton.addEventListener("click", () => {
    thankDiv.classList.remove("hidden");
    mainDiv.style.display = "none";
});

rating.forEach((rate) =>{
    rate.addEventListener("click", () => {
        num.innerHTML = rate.innerHTML;
    })
})

