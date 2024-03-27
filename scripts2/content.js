const title = document.querySelector('h1.headline-1.js-widont.prettify');

if (title) {
  const badge = document.createElement("p");
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `Your movie is ${title.textContent}!`;
  document.body.appendChild(badge)
}
