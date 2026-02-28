document.addEventListener("DOMContentLoaded", function () {

  const textEl = document.getElementById("text");
  const authorEl = document.getElementById("author");

  const text = "Komm mit mir bis ans Ende der Welt";
  const authorText = "– Kim, aus der Zukunft.";

  let i = 0;

  function typeMainText() {
    if (i < text.length) {
      if (text.slice(i, i + 4) === "Ende") {
        textEl.innerHTML += `<span class="red">Ende</span>`;
        i += 4;
      } else {
        textEl.innerHTML += text[i];
        i++;
      }
      setTimeout(typeMainText, 100);
    } else {
      setTimeout(typeAuthorText, 600);
    }
  }

  let j = 0;

  function typeAuthorText() {
    if (j < authorText.length) {
      authorEl.textContent += authorText[j];
      j++;
      setTimeout(typeAuthorText, 70);
    } else {
      authorEl.innerHTML = authorEl.innerHTML.replace(
        "Zukunft",
        "<span class='glitch'>Zukunft</span>"
      );
    }
  }

  typeMainText();

});