function generateMarkdown() {
  // get values from form inputs
  const title = document.getElementById("title").value;
  const subtitle = document.getElementById("subtitle").value;
  const contenttype = document.getElementById("content-type").value;
  const authorfirst = document.getElementById("author-first").value;
  const authorlast = document.getElementById("author-last").value;
  const authordate = document.getElementById("author-date").value;
  const date = document.getElementById("date").value;
  const categories = document.getElementById("categories").value.split(",");
  const tags = document.getElementById("tags").value.split(",");
  const hashes = document.getElementById("hashes").value.split(",");

  // build front matter string with YAML syntax
  let frontMatter = `---
  layout: resource
  published: false
  permalink:
  title: ${title}
  subtitle: ${subtitle}
  content-type: ${contenttype}
  authors:
    - name: ${authorfirst} ${authorlast}
      name-slug: ${authorlast}-${authorfirst}-${authordate}
  date: ${date}\n`;

  // add categories to front matter string
  if (categories.length > 0) {
    frontMatter += "categories:\n";
    categories.forEach((category) => {
      frontMatter += `  - "${category.trim()}"\n`;
    });
  }

  // add tags to front matter string
  if (tags.length > 0) {
    frontMatter += "tags:\n";
    tags.forEach((tag) => {
      frontMatter += `  - "${tag.trim()}"\n`;
    });
  }

  // add hashes to front matter string
  if (hashes.length > 0) {
    frontMatter += "hashes:\n";
    hashes.forEach((hash) => {
      frontMatter += `  - "${hash.trim()}"\n`;
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

      // Render the Markdown text to HTML using Marked.js
      const htmlOutput = marked.parse(fullMarkdown);

      // Sanitize the HTML output using DOMPurify
      const sanitizedHtmlOutput = DOMPurify.sanitize(htmlOutput);

      // Display the Markdown text and sanitized HTML output
      document.getElementById("markdown-code").textContent = fullMarkdown;
      document.getElementById("markdown-html").innerHTML = sanitizedHtmlOutput;
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
