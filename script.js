let list = document.querySelectorAll(".item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let count = list.length;
let active = 0;

next.onclick = () => {
  let activeOld = document.querySelector(".active");
  activeOld.classList.remove("active");

  if (active === count - 1) {
    active = active = 0;
  } else {
    active = active + 1;
  }
  list[active].classList.add("active");
};

prev.onclick = () => {
  let activeNew = document.querySelector(".active");
  activeNew.classList.remove("active");

  if (active <= 0) {
    active = active = 2;
  } else {
    active = active - 1;
  }
  list[active].classList.add("active");
};
