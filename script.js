function sendWhatsApp(e) {
    e.preventDefault();

    const g = id => document.getElementById(id)?.value || "";

    const msg = `Hello Beta Bawarchi Group,

I would like to make a booking enquiry.

Name: ${g("name")}
Phone: ${g("phone")}
Property: ${g("property")}
Check-in: ${g("checkin")}
Check-out: ${g("checkout")}
Room: ${g("room") || "Any suitable room"}
Message: ${g("message") || "None"}`;

    window.open(
        "https://wa.me/918085055993?text=" + encodeURIComponent(msg),
        "_blank"
    );
}


/* =========================================================
   HERO IMAGE SLIDER
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const slides = document.querySelectorAll(".hero-slide");

    if (slides.length <= 1) {
        return;
    }

    let currentSlide = 0;

    setInterval(function () {

        slides[currentSlide].classList.remove("active");

        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        slides[currentSlide].classList.add("active");

    }, 5000);

});
