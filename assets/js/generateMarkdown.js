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
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${siteUrl}${siteBaseUrl}/assets/md/example.md`, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const template = xhr.responseText;
      const fullMarkdown = `${frontMatter}${template}`;
      document.getElementById("markdown-code").textContent = fullMarkdown;
      document.getElementById("code-display").classList.remove("d-none");
    }
  };
  xhr.send();
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

  // create XHR request
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `${siteUrl}${siteBaseUrl}/assets/md/example.md`, true);

  // set up a callback function to handle the response
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      // get the template content from the response
      const template = xhr.responseText;

      // combine front matter and template strings into full markdown string
      const fullMarkdown = `${frontMatter}${template}`;

      // create a Blob object with the full markdown string
      const markdownBlob = new Blob([fullMarkdown], { type: "text/markdown" });

      // create a URL for the Blob object
      const markdownURL = URL.createObjectURL(markdownBlob);

      // create a link to download the file
      const downloadLink = document.createElement("a");
      downloadLink.href = markdownURL;
      downloadLink.download = `${title}.md`;
      document.body.appendChild(downloadLink);
      downloadLink.click();

      // clean up
      document.body.removeChild(downloadLink);
      URL.revokeObjectURL(markdownURL);
    }
  };

  // send the request
  xhr.send();
}
