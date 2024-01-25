let number = "";

let arr = document.getElementsByClassName("number");
arr = [...arr];

let arrResult = document.getElementsByClassName("result");
arrResult = [...arrResult];

document.getElementById("numbers").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const clickedNumber = e.target.innerText;
    number += clickedNumber;
    document.getElementById("inputNumber").value = number;

    for (let i = 0; i < 11; i++) {
      arr[i].innerHTML = number;
      arrResult[i].innerHTML = number * i;
    }
  }
});

document.getElementById("clearBtn").addEventListener("click", (e) => {
  number = "";
  document.getElementById("inputNumber").value = number;
  for (let i = 0; i < 11; i++) {
    arr[i].innerHTML = number;
    arrResult[i].innerHTML = number;
  }
});
