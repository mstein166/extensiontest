const title = document.querySelector("title");

if (title) {
  const badge = document.createElement("p");
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `Your movie is ${title}!`;
}
