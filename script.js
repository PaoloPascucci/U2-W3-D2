// Recupera il nome salvato in localStorage, se presente
const savedName = localStorage.getItem("savedName");
if (savedName) {
  document.getElementById("savedName").textContent = savedName;
}

// Gestisce il pulsante "Salva Nome"
document.getElementById("saveButton").addEventListener("click", function () {
  const nameInput = document.getElementById("name");
  const name = document.getElementById("name").value;
  localStorage.setItem("savedName", name);
  document.getElementById("savedName").textContent = name;
  nameInput.value = "";
});

// Gestisce il pulsante "Rimuovi Nome"
document.getElementById("removeButton").addEventListener("click", function () {
  localStorage.removeItem("savedName");
  document.getElementById("savedName").textContent = "";
  document.getElementById("name").value = "";
});

// Inizia un contatore di tempo utilizzando sessionStorage
let seconds = sessionStorage.getItem("timeCounter") || 0;

function updateCounter() {
  seconds++;
  sessionStorage.setItem("timeCounter", seconds);
  document.getElementById("timeCounter").textContent = seconds;
}

// Aggiorna il contatore ogni secondo
setInterval(updateCounter, 1000);
