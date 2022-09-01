const image = document.querySelectorAll(".slide");
const back = document.getElementById("seta-voltar");
const go = document.getElementById("seta-avancar");

let current = 0;

go.addEventListener("click", function () {
  if (current === image.length - 1) {
    return;
  }

  current++;
  select();
  hideImage();
  showHideArrow();
});

back.addEventListener("click", function () {
  if (current === 0) {
    return;
  }

  current--;
  hideImage();
  select();
  showHideArrow();
});

function select() {
  image[current].classList.add("selecionado");
}

function hideImage() {
  const showImage = document.querySelector(".selecionado");
  showImage.classList.remove("selecionado");
}

function showHideArrow() {
  const notFirst = current !== 0;
  if (notFirst) {
    back.classList.remove("opacidade");
  } else {
    back.classList.add("opacidade");
  }

  const lastImage = current !== 0 && current === image.length - 1;

  if (lastImage) {
    go.classList.add("opacidade");
  } else {
    go.classList.remove("opacidade");
  }
}
