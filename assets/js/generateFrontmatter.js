function generateFrontmatter() {
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
  document.getElementById("output-frontmatter").textContent = fullMarkdown;

  // show code display area
  document.getElementById("code-display").classList.remove("d-none");
}
