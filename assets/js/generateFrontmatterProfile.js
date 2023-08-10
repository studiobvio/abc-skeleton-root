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

  const authorfirst = document.getElementById("author-first").value;
  const authorlast = document.getElementById("author-last").value;
  const authordate = document.getElementById("author-date").value;
  const pronouns = document.getElementById("pronouns").value;
  const categories = document.getElementById("categories").value.split(",");
  const categoriesother = document.getElementById("categories-other").value;
  const role = document.getElementById("role").value;
  const roleother = document.getElementById("role-other").value;
  const place = document.getElementById("place").value;
  const tags = document.getElementById("tags").value.split(",");
  const hashes = document.getElementById("hashes").value.split(",");
  const website = document.getElementById("website").value;
  const email = document.getElementById("email").value;
  const emailpublication = document.getElementById("email-publication").value;
  const social1 = document.getElementById("social-1").value;
  const social1handle = document.getElementById("social-1-handle").value;
  const affiliation1 = document.getElementById("affiliation-1").value;
  const affiliation1title = document.getElementById(
    "affiliation-1-title"
  ).value;
  const affiliation1link = document.getElementById("affiliation-1-link").value;

  // create custome variables

  var authorlastslug = slugify(authorlast);
  var authorfirstslug = slugify(authorfirst);

  let sociallink1 = "";

  if (social1 === "LinkedIn") {
    link = `https://www.linkedin.com/in/${social1handle}`;
  } else if (social1 === "Youtube") {
    link = `https://youtube.com/${social1handle}`;
  } else if (social1 === "Instagram") {
    link = `https://instagram.com/@${social1handle}`;
  } else if (social1 === "Facebook") {
    link = `https://facebook.com/${social1handle}`;
  } else if (social1 === "Twitter") {
    link = `https://twitter.com/${social1handle}`;
  } else if (social1 === "TikTok") {
    link = `https://tiktok.com/@${social1handle}`;
  } else if (social1 === "Mastodon") {
    link = `https://mastodon.social/@${social1handle}`;
  }

  // build front matter string with YAML syntax
  //  add code to for lowercase and slug-ify for inputs
  let frontMatter = `---
  layout: profile
  published: false
  permalink:
  name: ${authorfirst} ${authorlast}
  name-slug: ${authorlastslug}-${authorfirstslug}-${authordate}
  pronouns: ${pronouns}
  date: #to be added when submission is published
  location: ${place}
  role: ${role}
  role-other: ${roleother}
  website: ${website}
  email: ${email}
  email-publication: ${emailpublication}
  social:
  - name: ${social1}
    handle: ${social1handle}
    link: ${sociallink1}
  affiliations:
  - name: ${affiliation1}
    title: ${affiliation1title}
    link: ${affiliation1link}\n`;

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
  const template = `<--your custom Markdown content here -->`;

  // combine front matter and template strings into full markdown string
  const fullMarkdown = `${frontMatter}${template}`;
  document.getElementById("output-frontmatter").textContent = fullMarkdown;

  // show code display area
  document.getElementById("code-display").classList.remove("d-none");
}

document.addEventListener("DOMContentLoaded", generateFrontmatterProfile);
