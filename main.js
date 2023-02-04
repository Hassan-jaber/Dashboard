let lis = document.querySelectorAll("ul li");

lis.forEach((li) => {
      if (li.childNodes[1].childNodes[3].textContent === "Dashboard") {
        li.className = "active";
      }
    li.addEventListener("click", (e) => {
      e.preventDefault()
      lis.forEach((li) => {
            li.classList.remove("active");
    })
    e.currentTarget.classList.add("active");
  });
});

// Sticky Navigation Bar On Scroll

window.addEventListener("scroll", _ => {
  let head = document.querySelector(".head");
    head.classList.toggle("sticky",window.scrollY > 250);
})
