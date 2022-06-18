let countEL = document.getElementById("count-el");
let saveEL = document.getElementById("save-el");
let count = 0;

function increment() {
  count += 1;
  countEL.innerText = count;
}

function save() {
  let countStr = count + " - ";
  saveEL.textContent += countStr; // changed innerText to .textContent
  countEL.textContent = 0;
  count = 0;
}
save();
