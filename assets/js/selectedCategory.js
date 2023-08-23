var selectedCategory = null;

function handleCategoryClick(categorySlug) {
  var buttons = document.querySelectorAll(".tag-button");

  buttons.forEach(function (button) {
    button.classList.remove("selected");
  });

  var button = document.querySelector('[data-tag="' + categorySlug + '"]');
  button.classList.add("selected");
  selectedCategory = categorySlug;
}
