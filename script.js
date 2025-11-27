let mybutton = document.getElementById("myBtn");

// Si scroll de minimum 20px alors fais apparaitre le bouton
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Si le button est click alors remonte tout en haut
function topFunction() {
  document.documentElement.scrollTop = 0;
}