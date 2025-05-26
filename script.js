// Show/hide the Back to Top button on scroll
window.onscroll = function () {
  const btn = document.getElementById("backToTopBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
