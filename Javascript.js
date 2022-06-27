let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slidesClientes");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 5000); // Change image every 2 seconds
}

function instagram() {
    window.open("https://www.instagram.com");
}
function facebook() {
    window.open("https://web.facebook.com");
}
function twitter() {
    window.open("https://www.twitter.com");
}