var text = document.getElementById("article");
var input = document.getElementById("inline-search");
function FindOnPage() {
text.innerHTML = text.textContent.split(input.value).join(`<mark>${input.value}></mark>`)
};