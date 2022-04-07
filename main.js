// navbar toggler - - - - -
const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".navbar");
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
});

// sevises tab - - - - -
const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    const targeTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);

    // REMOVE PREVIOUS ACTIVED CLASSES
    tabs.forEach((tab) => tab.classList.remove("active"));
    tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

    // ADD NEW ACTIVE CLASSES
    tab.classList.add("active");
    targeTabContent.classList.add("active");
  });
});

const accordionHeaders = document.querySelectorAll(".accordion__header");
const accordion = document.querySelector(".accordion");
accordionHeaders.forEach((item) => {
  item.addEventListener("click", (e) => {
    console.log(e.target.parentElement);
    e.target.parentElement.classList.toggle("accordion__expanded");
  });
});
