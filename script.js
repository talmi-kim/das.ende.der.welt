const textEl = document.getElementById("text");
const authorEl = document.getElementById("author");

const text = "Komm mit mir bis ans Ende der Welt";
const authorHTML = "– Kim, aus der <span class='glitch' data-text='Zukunft'>Zukunft</span>.";

let index = 0;

function typeText() {
  if (index < text.length) {
    if (text.slice(index, index + 4) === "Ende") {
      textEl.innerHTML += `<span class="red">Ende</span>`;
      index += 4;
    } else {
      textEl.innerHTML += text[index];
      index++;
    }
    setTimeout(typeText, 100);
  } else {
    // Autor **als echtes HTML** einsetzen
    setTimeout(() => {
      authorEl.innerHTML = authorHTML;
    }, 600);
  }
}

typeText();
