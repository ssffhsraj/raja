function saklar(lampu) {
  let toggle1 = document.getElementById("toggle-biasa1");
  let toggle2 = document.getElementById("toggle-biasa2");
  let toggle3 = document.getElementById("toggle-biasa3");


  if (toggle1.checked) {
    lampu1.src = "assets/images/on.png";
  } else {
    lampu1.src = "assets/images/off.png";
  }
  if (toggle2.checked) {
    lampu2.src = "assets/images/on.png";
  } else {
    lampu2.src = "assets/images/off.png";
  }
  if (toggle3.checked) {
    lampu3.src = "assets/images/on.png";
  } else {
    lampu3.src = "assets/images/off.png";
  }
}
