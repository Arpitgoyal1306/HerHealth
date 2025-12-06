var postBtn = document.getElementById("postBtn");
var reviewText = document.getElementById("reviewText");
var reviewSection = document.getElementById("reviewSection");

postBtn.addEventListener("click", function () {

    var text = reviewText.value.trim();

    if (text === "") {
        return;
    }

    var card = document.createElement("div");
    card.className = "review-card";

    var icon = document.createElement("div");
    icon.className = "icon";

    var p = document.createElement("p");
    p.className = "review-text";
    p.textContent = text;

    card.appendChild(icon);
    card.appendChild(p);

    reviewSection.appendChild(card);

    reviewText.value = "";
});
