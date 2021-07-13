const result = document.getElementById("display");
const plus = document.getElementById("add");
const minus = document.getElementById("lower");

let int = 0;

plus.addEventListener("click", () => {
  int++;

  if (int >= 50) {
    int = 50;
  }

  result.innerText = int;
});
minus.addEventListener("click", () => {
  int--;

  if (int <= 0) {
    int = 0;
  }

  result.innerText = int;
});
