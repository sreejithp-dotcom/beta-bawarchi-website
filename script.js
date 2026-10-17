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

/* =========================================================
   MOBILE NAVIGATION MENU
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".mobile-menu-toggle");
    const nav = document.querySelector("#main-navigation");

    // Stop if the mobile menu elements are not on this page
    if (!toggle || !nav) return;

    // Open and close the menu
    toggle.addEventListener("click", function () {
        const isOpen = nav.classList.toggle("mobile-menu-open");

        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });

    // Close the menu when a navigation link is selected
    nav.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            nav.classList.remove("mobile-menu-open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "Open navigation menu");
        });
    });

    // Close the menu when Escape is pressed
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            nav.classList.remove("mobile-menu-open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "Open navigation menu");
        }
    });
});

