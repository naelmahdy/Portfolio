window.onscroll = function () {
  var sec1 = document.getElementById("Home");
  var sec2 = document.getElementById("About");
  var sec3 = document.getElementById("Resume");
  var sec4 = document.getElementById("Services");
  var sec5 = document.getElementById("Skills");
  var sec6 = document.getElementById("Projects");
  var sec7 = document.getElementById("Blog");
  var sec8 = document.getElementById("Contact");
  var links = document.getElementsByClassName("ulLink");
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove("LinksHover");
  }

  if (scrollY <= sec1.offsetTop) {
    links[0].classList.add("LinksHover");
  } else if (scrollY <= sec2.offsetTop) {
    links[1].classList.add("LinksHover");
  } else if (scrollY <= sec3.offsetTop) {
    links[2].classList.add("LinksHover");
  } else if (scrollY <= sec4.offsetTop) {
    links[3].classList.add("LinksHover");
  } else if (scrollY <= sec5.offsetTop) {
    links[4].classList.add("LinksHover");
  } else if (scrollY <= sec6.offsetTop) {
    links[5].classList.add("LinksHover");
  } else if (scrollY <= sec7.offsetTop) {
    links[6].classList.add("LinksHover");
  } else if (scrollY <= sec8.offsetTop) {
    links[7].classList.add("LinksHover");
  }
};

window.onload = function () {
  var nav = document.getElementById("sec1");
  nav.style.display = "none";
  var loading = document.getElementById("lod");
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    nav.style.display = "block";
    loading.style.display = "none";
    document.body.style.overflow = "auto";
  }, 1000);
};
