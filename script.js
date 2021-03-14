const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    // Split letters into array
    .split("")

    // Create array with each letter wrapped by a span
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )

    // Turn it back into a string
    .join("");
});
