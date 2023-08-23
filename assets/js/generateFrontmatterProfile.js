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

  if (role === "Other") {
    roletitle = `${roleother}`;
  } else {
    roletitle = `${role}`;
  }

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

  let sociallink1 = "";

  if (social1 === "LinkedIn") {
    sociallink1 = `https://www.linkedin.com/in/${social1handle}`;
  } else if (social1 === "Youtube") {
    sociallink1 = `https://youtube.com/${social1handle}`;
  } else if (social1 === "Instagram") {
    sociallink1 = `https://instagram.com/@${social1handle}`;
  } else if (social1 === "Facebook") {
    sociallink1 = `https://facebook.com/${social1handle}`;
  } else if (social1 === "Twitter") {
    sociallink1 = `https://twitter.com/${social1handle}`;
  } else if (social1 === "TikTok") {
    sociallink1 = `https://tiktok.com/@${social1handle}`;
  } else if (social1 === "Mastodon") {
    sociallink1 = `https://mastodon.social/@${social1handle}`;
  }

  // build front matter string with YAML syntax
  //  add code to for lowercase and slug-ify for inputs
  let frontMatter = `---
layout: profile
published: false
permalink:
name: ${authorname}
name-slug: ${authorslug}
pronouns: ${pronouns}

  # The "date" field must be included and in the yyyy-mm-dd
  # format for the resource article to be published.
date: "A date will be added when submission is published"
content-type: ${categories}
location: ${place}
role: ${roletitle}
website: ${website}

  # Your profile image ("image" below) should be 1:1 aspect ratio and
  # 540 x 540 px (square).
  # Be sure to rename your image to match the file name and path below.
  # Include the .jpg file it in your "assets/images" folder. 
image: "${authorslug}.jpg"
email: ${email}
email-publication: ${emailpublication}

  # To add more social links copy and paste the format below.
  # Manually add each value.
  # Icon buttons are only available for the selectable platforms.
  # You may add any platform, and as many as you wish.
social:
  - name: ${social1}
    handle: ${social1handle}
    link: ${sociallink1}

  # To add more affiliations, copy and paste the format below.
  # Manually add each value.
  # If you wish to include multiple titles, separate them by commas.
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
  const template = `<--- the body of your community profile will be included here using markdown syntax --->`;

  // combine front matter and template strings into full markdown string
  const fullMarkdown = `${frontMatter}${template}`;
  document.getElementById("output-frontmatter").textContent = fullMarkdown;

  // show code display area
  document.getElementById("code-display").classList.remove("d-none");
}

document.addEventListener("DOMContentLoaded", generateFrontmatterProfile);
