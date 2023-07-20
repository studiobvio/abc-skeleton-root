function copyToClipboard() {
  const codeElement = document.getElementById("output-frontmatter");
  const text = codeElement.textContent;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Code copied to clipboard.");
    })
    .catch((error) => {
      console.error(`Error copying code to clipboard: ${error}`);
    });
}
