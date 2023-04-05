function generateMarkdown() {
  // get values from form inputs
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;
  const tags = document.getElementById("tags").value.split(",");

  // build front matter string with YAML syntax
  let frontMatter = `---
title: ${title}
author: ${author}
date: ${date}
category: ${category}\n`;

  // add tags to front matter string
  if (tags.length > 0) {
    frontMatter += "tags:\n";
    tags.forEach((tag) => {
      frontMatter += `  - "${tag.trim()}"\n`;
    });
  }

  // close front matter section
  frontMatter += `---\n\n`;

  // build markdown template string
  const template = `<--your context here -->`;

  // combine front matter and template strings into full markdown string
  const fullMarkdown = `${frontMatter}${template}`;
  document.getElementById("markdown-code").textContent = fullMarkdown;

  // show code display area
  document.getElementById("code-display").classList.remove("d-none");
}

function copyToClipboard() {
  const codeElement = document.getElementById("markdown-code");
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

function downloadMarkdown() {
  // get values from form inputs
  const title = document.getElementById("title").value;

  // build full markdown string
  const template = `<--your context here -->`;
  const frontMatter = `---
    title: ${title}
    `;
  const fullMarkdown = `${frontMatter}${template}`;
}

function downloadMarkdown() {
  // get values from form inputs
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const date = document.getElementById("date").value;
  const category = document.getElementById("category").value;
  const tags = document.getElementById("tags").value.split(",");

  // build front matter string with YAML syntax
  let frontMatter = `---
title: ${title}
author: ${author}
date: ${date}
category: ${category}\n`;

  // add tags to front matter string
  if (tags.length > 0) {
    frontMatter += "tags:\n";
    tags.forEach((tag) => {
      frontMatter += `  - "${tag.trim()}"\n`;
    });
  }

  // close front matter section
  frontMatter += `---\n\n`;

  // build markdown template string
  const template = `<--your context here -->`;

  // combine front matter and template strings into full markdown string
  const fullMarkdown = `${frontMatter}${template}`;
  // create a Blob object with the full markdown string
  const markdownBlob = new Blob([fullMarkdown], { type: "text/markdown" });

  // download markdown file
  var fileName = title.toLowerCase().replace(/ /g, "-") + ".md";
  var blob = new Blob([markdownBlob], { type: "text/markdown" });
  var link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
}
