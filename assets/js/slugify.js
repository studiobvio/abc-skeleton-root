function slugify(text) {
  return text
    .toString() // Convert to string in case of a number or other type
    .toLowerCase() // Convert to lowercase
    .trim() // Remove leading and trailing spaces
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/[^\w-]+/g, "") // Remove non-word characters (except hyphens)
    .replace(/--+/g, "-"); // Replace consecutive hyphens with a single hyphen
}

export default slugify;
