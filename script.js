function yesClick(){
  document.getElementById("message").innerText = "Thanks ha same ❤️";
}

function noClick(){
  const btn = document.getElementById("noBtn");

  btn.style.position = "absolute";
  btn.style.left = Math.random()*80 + "vw";
  btn.style.top = Math.random()*80 + "vh";
}
