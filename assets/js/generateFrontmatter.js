function generateFrontmatter() {
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
  const abstractshort = document.getElementById("abstract-short").value;
  const abstractlong = document.getElementById("abstract-long").value;

  // build front matter string with YAML syntax
  //  add code to for lowercase and slug-ify for inputs
  let frontMatter = `---
layout: resource
published: false
permalink:
title: "${title}"
subtitle: "${subtitle}"
content-type: "${contenttype}"
authors:
  - name: ${authorfirst} ${authorlast}
    name-slug: ${authorlast}-${authorfirst}-${authordate}
date: ${date}
abstract:
  short: "${abstractshort}"
  long: "${abstractlong}"\n`;

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
      frontMatter += `  - "#${hash.trim()}"\n`;
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
