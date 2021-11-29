var acc = document.getElementsByClassName("poem");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var poemtext = this.nextElementSibling;
    if (poemtext.style.maxHeight) {
      poemtext.style.maxHeight = null;
    } else {
      poemtext.style.maxHeight = poemtext.scrollHeight + "px";
    }
  });
}
