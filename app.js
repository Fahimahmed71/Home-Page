// splide

var elms = document.getElementsByClassName("splide");

for (var i = 0; i < elms.length; i++) {
  new Splide(elms[i]).mount();
}

var splide = new Splide(".splide", {
  type: "loop",
  perPage: 1,
  autoplay: true,
});

splide.mount();

// pricing section
// active tab
queryId("#article #btnPrice");
queryId("#article #tab");

function queryId(id) {
  document.querySelectorAll("#article #btnPrice").forEach((tab, index) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(id).forEach((tab) => {
        tab.classList.remove("active");
        tab.classList.remove("tab");
      });

      if (id === "#article #tab") {
        document.querySelectorAll(id)[index].classList.add("tab");
      } else {
        document.querySelectorAll(id)[index].classList.add("active");
      }
    });
  });
}

// FAQ
const faq = document.querySelectorAll(".faq");

faq.forEach((selector) => {
  const ansEl = selector.querySelector(".btn");

  selector.addEventListener("click", () => {
    faq.forEach((item) => {
      if (item !== selector) {
        item.classList.remove("toggle");
      }
    });

    selector.classList.toggle("toggle");
  });
});

// nav
const hamburgerIcoEl = document.getElementById("hamburger-ico");
const navMobileEl = document.getElementById("nav-mobile");

hamburgerIcoEl.addEventListener("click", () => {
  hamburgerIcoEl.classList.toggle("hamburger");
  navMobileEl.classList.toggle("flex");
  navMobileEl.classList.toggle("hidden");
});

// scroll to top
window.onscroll = () => {
  if (document.documentElement.scrollTop > 1500) {
    document.getElementById("scrollTop").classList.remove("hidden");
  } else {
    document.getElementById("scrollTop").classList.add("hidden");
  }
};
