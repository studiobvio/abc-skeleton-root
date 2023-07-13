function slugify(text) {
  return text
    .toString() // Convert to string in case of a number or other type
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading and trailing spaces
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]+/g, "") // Remove non-word characters (except hyphens)
    .replace(/--+/g, "-"); // Replace consecutive hyphens with a single hyphen
}

// Declare a global variable for frontMatter
window.frontMatter = "";

function generateFrontmatterResource() {
  // get values from form inputs
  const title = document.getElementById("title").value;
  const subtitle = document.getElementById("subtitle").value;
  const contenttype = document.getElementById("content-type").value;
  const authorfirst = document.getElementById("author-first").value;
  const authorlast = document.getElementById("author-last").value;
  const authordate = document.getElementById("author-date").value;
  const submissionyear = document.getElementById("submission-year").value;
  const imagealttext = document.getElementById("image-alt-text").value;
  const categories = document.getElementById("categories").value.split(",");
  const tags = document.getElementById("tags").value.split(",");
  const hashes = document.getElementById("hashes").value.split(",");
  const abstractshort = document.getElementById("abstract-short").value;
  const abstractlong = document.getElementById("abstract-long").value;
  const learning1 = document.getElementById("learning1").value;
  const learning2 = document.getElementById("learning2").value;
  const learning3 = document.getElementById("learning3").value;

  // create custome variables

  var titleslug = slugify(title);
  var authorlastslug = slugify(authorlast);
  var authorfirstslug = slugify(authorfirst);

  // build front matter string with YAML syntax
  //  add code to for lowercase and slug-ify for inputs
  let frontMatter = `---
layout: resource
published: false
permalink:
title: "${title}"
title-slug: "${submissionyear}-${titleslug}"
subtitle: "${subtitle}"
content-type: "${contenttype}"
authors:
  - name: ${authorfirst} ${authorlast}
    name-slug: ${authorlastslug}-${authorfirstslug}-${authordate}
date: "# to be added when submission is published"
submission-year: ${submissionyear}
image: "${submissionyear}-${titleslug}.jpg"
image-alt-text: ${imagealttext}
learning-outcomes: 
  - "${learning1}"
  - "${learning2}"
  - "${learning3}"\n`;

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

  // add longer text blocks
  frontMatter += `
abstract:
  short: "${abstractshort}"
  long: "${abstractlong}"\n`;

  // close front matter section
  frontMatter += `---\n\n`;
  // build markdown template string
  const template = `<--your context here -->`;

  // combine front matter and template strings into full markdown string
  const fullMarkdown = `${frontMatter}${template}`;
  document.getElementById("output-frontmatter").textContent = fullMarkdown;

  // show code display area
  document.getElementById("code-display").classList.remove("d-none");

  window.frontMatter = `${frontMatter}`;

  return frontMatter;
}

document.addEventListener("DOMContentLoaded", generateFrontmatterResource);
