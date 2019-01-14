

var cardContainer = document.getElementsByClassName("card-container")[0]; //main <DIV class='cardContainer'>

var card = document.createElement("div");
card.classList.add("card");

var cardContent = document.createElement("div");
cardContent.classList.add("card-content");

var cardHeader = document.createElement("div");
cardHeader.classList.add("card-header");
cardHeader.textContent = "Международное сотрудничество во всех сферах";

var cardText = document.createElement("div");
cardText.classList.add("card-text");
cardText.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime iste, odit nihil officia soluta dicta quibusdam id quia impedit velit cumque ullam accusantium quidem facilis aut laudantium asperiores aspernatur ducimus.";

var cardButton = document.createElement("div");
cardButton.classList.add("card-button");

var image = document.createElement("img");
image.src = "kon1.jpg";

var button = document.createElement("button");
button.textContent = "Try";

cardButton.appendChild(button);

cardContent.appendChild(cardHeader);
cardContent.appendChild(cardText);
cardContent.appendChild(cardButton);

card.appendChild(image);
card.appendChild(cardContent);

for (i=0; i < 6; i++){
    cardContainer.appendChild(card);
};