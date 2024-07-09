

  const tabLinksEl = document.querySelectorAll('.tab-links');
  const tabContentsEl = document.querySelectorAll('.tab-contents');

  tabLinksEl.forEach((navLink, index) => {
      navLink.addEventListener('click', () => {
          document.querySelector('.tab-links.active')?.classList.remove('active');
          document.querySelector('.tab-contents.tab-active')?.classList.remove('tab-active');

          navLink.classList.add('active');
          tabContentsEl[index].classList.add('tab-active');
          console.log(index);
      });
  });



let sections = document.querySelectorAll("section");
let navLinkss = document.querySelectorAll("header nav a");
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 250;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinkss.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
