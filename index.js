
const logdiv = document.getElementById("log");
const statediv = document.getElementById("state");
const startbtn = document.getElementById("start-btn");
const stopbtn = document.getElementById("stop-btn");


function handledown(e) {
  logdiv.textContent = `Key "${e.key}" pressed down`;
  statediv.textContent = "Keydown";
}

function handleup(e) {
  logdiv.textContent = `Key "${e.key}" released`;
  statediv.textContent = "Keyup";
}

startbtn.addEventListener("click", () => {
  document.addEventListener("keydown", handledown);
  document.addEventListener("keyup", handleup);
});


stopbtn.addEventListener("click", () => {
  document.removeEventListener("keydown", handledown); 
  document.removeEventListener("keyup", handleup); 
  logdiv.textContent = ""; 
  statediv.textContent = ""; 
});
