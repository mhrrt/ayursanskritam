// MENU

const menuBtn = document.getElementById("menuBtn");

const drawer = document.getElementById("drawer");

const overlay = document.getElementById("overlay");

// OPEN MENU

menuBtn.addEventListener("click", () => {
  drawer.classList.toggle("open");

  overlay.classList.toggle("show");
});

// CLOSE MENU

overlay.addEventListener("click", () => {
  drawer.classList.remove("open");

  overlay.classList.remove("show");
});

// LOAD VARNAMALA

async function loadVarnamala() {
  const response = await fetch("./data/varnamala.json");

  const letters = await response.json();

  const grid = document.getElementById("grid");

  letters.forEach((item) => {
    const card = document.createElement("div");

    card.className = "card";

    card.innerText = item.letter;

    // PLAY AUDIO

    card.onclick = () => {
      const audio = new Audio(item.audio);

      audio.play();
    };

    grid.appendChild(card);
  });
}

loadVarnamala();

async function loadFooter() {
  const response = await fetch("./components/footer.html");

  const html = await response.text();

  document.getElementById("footer").innerHTML = html;
}

loadFooter();