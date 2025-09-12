const li = document.querySelectorAll(".projects ul li");
for (let item of li) {
  item.addEventListener("click", function() {
    const hidden = this.querySelector('.toHide');
    const isVisible = window.getComputedStyle(hidden).display === 'block';
    hidden.style.display = isVisible ? 'none' : 'block';
  });
}

