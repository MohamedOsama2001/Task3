/*     back to top button    */
window.onscroll = function () {
  const backToTopBtn = document.getElementById("backToTopBtn");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};
document.getElementById("backToTopBtn").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/*        success sent message    */
document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("contactMessage").style.display = "block";
});
