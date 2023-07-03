function slugify(text) {
  return text
    .toString() // Convert to string in case of a number or other type
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading and trailing spaces
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]+/g, "") // Remove non-word characters (except hyphens)
    .replace(/--+/g, "-"); // Replace consecutive hyphens with a single hyphen
}

function generateFrontmatterProfile() {
  // get values from form inputs
  const contenttype = document.getElementById("content-type").value;
  const authorfirst = document.getElementById("author-first").value;
  const authorlast = document.getElementById("author-last").value;
  const authordate = document.getElementById("author-date").value;
  const submissionyear = document.getElementById("submission-year").value;
  const categories = document.getElementById("categories").value.split(",");
  const categoriesother = document.getElementById("categories-other").value;
  const role = document.getElementById("role").value;
  const roleother = document.getElementById("role-other").value;
  const place = document.getElementById("place").value;
  const authorgithub = document.getElementById("author-github").value;
  const tags = document.getElementById("tags").value.split(",");
  const hashes = document.getElementById("hashes").value.split(",");
  const statement = document.getElementById("statement").value;
  const website = document.getElementById("website").value;
  const email = document.getElementById("email").value;
  const emailpublication = document.getElementById("email-publication").value;
  const social1 = document.getElementById("social-1").value;
  const social1handle = document.getElementById("social-1-handle").value;
  const social2 = document.getElementById("social-1").value;
  const social2handle = document.getElementById("social-2-handle").value;
  const social3 = document.getElementById("social-3").value;
  const social3handle = document.getElementById("social-3-handle").value;

  // create custome variables

  var authorlastslug = slugify(authorlast);
  var authorfirstslug = slugify(authorfirst);

  // build front matter string with YAML syntax
  //  add code to for lowercase and slug-ify for inputs
  let frontMatter = `---
  layout: resource
  published: false
  permalink:
  content-type: "${contenttype}"
  name: ${authorfirst} ${authorlast}
  name-slug: ${authorlastslug}-${authorfirstslug}-${authordate}
  date: #to be added when submission is published
  submission-year: ${submissionyear}
  location: ${place}
  author-github: ${authorgithub}
  role: ${role}
  role-other: ${roleother}
  statement: ${statement}
  website: ${website}
  email: ${email}
  email-publication: ${emailpublication}
  social:
  - name: ${social1}
    handle: ${social1handle}
  - name: ${social2}
    handle: ${social2handle}
  - name: ${social3}
    handle: ${social3handle}\n`;

  // add categories to front matter string
  if (categories.length > 0) {
    frontMatter += "categories:\n";
    categories.forEach((category) => {
      frontMatter += `  - "${category.trim()}"\n`;
    });
  }

  frontMatter += `
  categories-other: ${categoriesother}\n`;

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
  document.getElementById("output-profile-frontmatter").textContent =
    fullMarkdown;

  // show code display area
  document.getElementById("code-display").classList.remove("d-none");
}
