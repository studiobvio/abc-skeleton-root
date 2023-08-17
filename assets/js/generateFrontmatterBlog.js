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

function generateFrontmatterBlog() {
  // get values from form inputs
  const title = document.getElementById("title").value;
  const subtitle = document.getElementById("subtitle").value;
  const contenttype = document.getElementById("content-type").value;
  const categoriesother = document.getElementById("categories-other").value;
  const authorfirst = document.getElementById("author-first").value;
  const authorlast = document.getElementById("author-last").value;
  const authordate = document.getElementById("author-date").value;
  const submissionyear = document.getElementById("submission-year").value;
  const tags = document.getElementById("tags").value.split(",");
  const hashes = document.getElementById("hashes").value.split(",");
  const abstractshort = document.getElementById("abstract-short").value;

  // create custome variables

  var titleslug = slugify(title);
  var authorlastslug = slugify(authorlast);
  var authorfirstslug = slugify(authorfirst);

  if (authorlast === "") {
    authorslug = `${authorfirstslug}-${authordate}`;
  } else {
    authorslug = `${authorlastslug}-${authorfirstslug}-${authordate}`;
  }

  if (authorlast === "") {
    authorname = `${authorfirst}`;
  } else {
    authorname = `${authorfirst} ${authorlast}`;
  }

  if (contenttype === "Other") {
    category = `${categoriesother}`;
  } else {
    category = `${contenttype}`;
  }

  // build front matter string with YAML syntax
  //  add code to for lowercase and slug-ify for inputs
  let frontMatter = `---
  layout: post
  
      # The "published" status will be changed to "true" when
      # your submission has been cleared and is ready for publication.
  published: false
  permalink:
  title: "${title}"
  title-slug: "${submissionyear}-${titleslug}"
  subtitle: "${subtitle}"
  content-type: "${category}"
  categories:
    - "${category}"
  authors:
    - name: "${authorname}"
      name-slug: "${authorslug}"
  
      # The "date" field must be included and in the yyyy-mm-dd
      # format for the blog post to be published.
  date: "A date will be added when submission is published"
  submission-year: ${submissionyear}
  
      # Your main image ("image" below) should be 16:9 aspect ratio and
      # 1920 x 1080 px (landscape).
      # Be sure to rename your image to match the file name and path below.
      # Include the .jpg file in your "assets/images" folder. 
  image: "${submissionyear}-${titleslug}.jpg"
  image-alt-text: "Delete this text and add your main image alt-text here"\n`;

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
    short: "${abstractshort}"\n`;

  // close front matter section
  frontMatter += `---\n\n`;
  // build markdown template string
  const template = `<--- the body of your blog post will be included here using markdown syntax --->`;

  // combine front matter and template strings into full markdown string
  const fullMarkdown = `${frontMatter}${template}`;
  document.getElementById("output-frontmatter").textContent = fullMarkdown;

  // show code display area
  document.getElementById("code-display").classList.remove("d-none");

  window.frontMatter = `${frontMatter}`;

  return frontMatter;
}

document.addEventListener("DOMContentLoaded", generateFrontmatterBlog);
