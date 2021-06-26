const mobileMenu = document.querySelector(".mobile-menu");
const modal = document.querySelector(".modal");
const modalBtn = document.querySelectorAll(".btn-modal");
const modalClose = document.querySelector(".close-modal");
const radioBtn = document.querySelectorAll(".radio");
const PledgeToggle = document.querySelectorAll(".pledge-input");

// console.log(rewardToggle)

radioBtn.forEach((radio) => {
  radio.addEventListener("change", () => {
    radioBtn.forEach((btn) => {
      if (btn.checked) {
        btn.parentElement.parentElement.parentElement.classList.add(
          "border-cyan"
        );
      } else {
        btn.parentElement.parentElement.parentElement.classList.remove(
          "border-cyan"
        );
      }

      // if (!btn.checked) {
      //   // document.querySelector(".pledge-input").classList.remove("hidden");
      //   PledgeToggle.forEach((pledge) => {
      //     pledge.classList.remove("hidden");
      //   });
      // } else {
      //   // document.querySelector(".pledge-input").classList.add("hidden");
      //   PledgeToggle.forEach((pledge) => {
      //     pledge.classList.add("hidden");
      //   });
      // }

      // PledgeToggle.forEach((pledge) => {
      //   if (!pledge) {
      //     pledge.classList.add("hidden");
      //   } else {
      //     pledge.classList.remove("hidden");
      //   }
      // });
    });
    PledgeToggle.forEach((pledge) => {
      pledge.classList.toggle("hidden");
    });
  });
});

// Toggleon or Off
function displayOnOff(e, className) {
  e.classList.toggle(className);
}

// Toggle nav menu on or off
let source = false;

mobileMenu.addEventListener("click", () => {
  source = !source;

  mobileMenu.src = source
    ? "images/icon-close-menu.svg"
    : "images/icon-hamburger.svg";
  const nav = document.querySelector("nav");

  displayOnOff(nav, "show");
});

// Modal Display
modalBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    displayOnOff(modal, "show");
  });
});

// close Modal
modalClose.addEventListener("click", () => {
  displayOnOff(modal, "show");
});

// PledgeToggle
