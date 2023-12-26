document.querySelectorAll(".nav-link").forEach(link => {
  if (link.href === window.location.href) {
    link.setAttribute("aria-current", "page")
  }
});

const generalDropdownBtn = document.querySelector(".dropbtn");
const generalDropdownMenu = document.querySelector(".dropdown");
const projectsDropdownBtn = document.querySelector(".prjct-drp");
const projectsDropdownTable = document.querySelector(".prjct-drp-block")


function dropFunc(dropButton, dropdown) {
  dropButton.addEventListener("click", () => {
    dropdown.classList.toggle("hide")
  })
};

generalDropdownBtn.addEventListener("click", () => {
  generalDropdownMenu.classList.toggle("hide")
});

projectsDropdownBtn.addEventListener("click", () => {
  projectsDropdownBtn.classList.toggle("on");
  projectsDropdownTable.classList.toggle("hide")
});