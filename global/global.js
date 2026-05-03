gsap.registerPlugin(ScrollTrigger);

if (document.body.classList.contains("loading")) {
  const tl = gsap.timeline();
  tl.from("#logo-name", {
    scale: 0,
    duration: 1,
  });
  window.addEventListener("load", () => {
    tl.to("#logo-name", {
      scale: 0,
      duration: 1,
      onComplete: () => {
        tl.to(".triangle", {
          x: "-100%",
          duration: 1,
        });
        tl.to(
          ".triangle2",
          {
            x: "100%",
            duration: 1,
          },
          "<",
        );
        gsap.set(".content", { clearProps: "transform" });
        tl.fromTo(
          ".content",
          {
            scale: 0.98,
            autoAlpha: 0,
          },
          {
            scale: 1,
            autoAlpha: 1,
            duration: 1,
          },
        );
      },
    });
  });

  const slides = document.querySelectorAll(".slide");
  let index = 0;

  function slideShow() {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[index].classList.add("active");

    index = (index + 1) % slides.length;
  }
  setInterval(slideShow, 3000);

  var copy = document.querySelector(".logos_slide").cloneNode(true);

  document.querySelector(".logos").appendChild(copy);

  var copy_pfp = document.querySelector(".reviews_slide").cloneNode(true);

  document.querySelector(".reviews_track").appendChild(copy_pfp);

  const menu = document.querySelector(".menu");
  const back = document.querySelector(".back");

  menu.addEventListener("click", () => {
    document.querySelector(".sub-nav").style.transform = "translateX(0)";
  });

  back.addEventListener("click", () => {
    document.querySelector(".sub-nav").style.transform = "translateX(100%)";
  });

  let about = document.querySelectorAll(".about-page");
  about.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      window.location.href = "about.html";
    });
  });

  const contactLinks = document.querySelectorAll(".contact");
  const footerSection = document.querySelector("#footer");
  contactLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      if (footerSection) {
        footerSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      document.querySelector(".sub-nav").style.transform = "translateX(100%)";
    });
  });
}

if (document.body.classList.contains("about")) { 
  const back = document.querySelector(".back");
  if (back) {
    back.addEventListener("click", () => {
      window.location.href = "home.html";
    });
  }
}
