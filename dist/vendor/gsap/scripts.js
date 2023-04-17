gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container-content",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container-content is so it feels more natural.
    end: "+=3500",
  },
});

const button = document.getElementById("get-started-btn");
const container = document.querySelector(".container-content");

button.addEventListener("click", () => {
  const index = 0; // set index sesuai dengan section yang ingin dituju
  const sectionWidth = sections[index].getBoundingClientRect().width;
  window.scrollTo({
    top: 100 * (sections.length - 1),
    left: index * sectionWidth,
    behavior: "smooth",
  });
});
