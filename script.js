const textEl = document.getElementById("text");
const authorEl = document.getElementById("author");

const text = "Das Ende der Welt.";
const author = "– Kim, aus der Zukunft.";

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
    setTimeout(typeAuthor, 600);
  }
}

let authorIndex = 0;
function typeAuthor() {
  if (authorIndex < author.length) {
    authorEl.innerHTML += author[authorIndex];
    authorIndex++;
    setTimeout(typeAuthor, 80);
  }
}

typeText();
