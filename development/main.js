const viewMoreButton = document.getElementById("view-more-button");
const viewLessButton = document.getElementById("view-less-button");
const sentenceContainer = document.getElementById("sentence-container");
const paragraph = document.createElement("p");

paragraph.innerHTML = "Bonsai is an ancient art form that has been practiced for centuries, but today's technology has made it easier than ever to learn and master. From online tutorials and forums to specialized tools and equipment, the resources available to bonsai enthusiasts are vast and constantly evolving.";

viewMoreButton.addEventListener("click", event => {
  sentenceContainer.appendChild(paragraph);
    viewLessButton.style.display = "block";
    sentenceContainer.style.display = "block";
    event.target.style.display = "none";
  // calculate the height of the container div with the new content
  let newHeight = sentenceContainer.scrollHeight;
  // update the height of the container div with the new height
  sentenceContainer.style.height = newHeight + "px";
});

viewLessButton.addEventListener("click", event => {
    viewMoreButton.style.display = "block";
    sentenceContainer.style.display = "none";
    event.target.style.display = "none";
  sentenceContainer.style.height = "auto";
});

const viewMoreButton1 = document.getElementById("view-more-button1");
const viewLessButton1 = document.getElementById("view-less-button1");
const sentenceContainer1 = document.getElementById("sentence-container1");
const paragraph1 = document.createElement("p");

paragraph1.innerHTML = "The use of technology in bonsai cultivation has led to a greater understanding of the needs of these delicate plants. This has resulted in a higher success rate and the ability to maintain and style bonsai in ways that were once thought impossible. It has also made bonsai more accessible to people, allowing more individuals to experience the joy of growing these miniature trees.";

viewMoreButton1.addEventListener("click", event => {
sentenceContainer1.appendChild(paragraph1);
viewLessButton1.style.display = "block";
sentenceContainer1.style.display = "block";
event.target.style.display = "none";
sentenceContainer.style.overflow = "visible"; // Add this line to show overflow content
  // calculate the height of the container div with the new content
  let newHeight = sentenceContainer.scrollHeight;
  // update the height of the container div with the new height
  sentenceContainer.style.height = newHeight + "px";
});

viewLessButton1.addEventListener("click", event => {
viewMoreButton1.style.display = "block";
sentenceContainer1.style.display = "none";
event.target.style.display = "none";
sentenceContainer.style.height = "auto";
sentenceContainer.style.overflow = "hidden";
});

const viewMoreButton2 = document.getElementById("view-more-button2");
const viewLessButton2 = document.getElementById("view-less-button2");
const sentenceContainer2 = document.getElementById("sentence-container2");
const paragraph2 = document.createElement("p");

paragraph2.innerHTML = "However, technology has also led to the mass production of bonsai plants, which can be detrimental to the art form. Mass-produced bonsai lack the individuality and personal touch that makes bonsai unique. In addition, the use of technology to speed up the growth process can result in weakened or unnatural looking plants.";

viewMoreButton2.addEventListener("click", event => {
sentenceContainer2.appendChild(paragraph2);
viewLessButton2.style.display = "block";
sentenceContainer2.style.display = "block";
event.target.style.display = "none";
  // calculate the height of the container div with the new content
  let newHeight = sentenceContainer.scrollHeight;
  // update the height of the container div with the new height
  sentenceContainer.style.height = newHeight + "px";
});

viewLessButton2.addEventListener("click", event => {
viewMoreButton2.style.display = "block";
sentenceContainer2.style.display = "none";
event.target.style.display = "none";
sentenceContainer.style.height = "auto";
});

const viewMoreButton3 = document.getElementById("view-more-button3");
const viewLessButton3 = document.getElementById("view-less-button3");
const sentenceContainer3 = document.getElementById("sentence-container3");
const paragraph3 = document.createElement("p");

paragraph3.innerHTML = "With the rise of online marketplaces, it has become easier for bonsai sellers to reach a wider audience and sell their plants to people all over the world. However, this also means that it can be harder for buyers to verify the quality and authenticity of the bonsai they are purchasing.";

viewMoreButton3.addEventListener("click", event => {
sentenceContainer3.appendChild(paragraph3);
viewLessButton3.style.display = "block";
sentenceContainer3.style.display = "block";
event.target.style.display = "none";
  // calculate the height of the container div with the new content
  let newHeight = sentenceContainer.scrollHeight;
  // update the height of the container div with the new height
  sentenceContainer.style.height = newHeight + "px";
});

viewLessButton3.addEventListener("click", event => {
viewMoreButton3.style.display = "block";
sentenceContainer3.style.display = "none";
event.target.style.display = "none";
sentenceContainer.style.height = "auto";
});

const viewMoreButton4 = document.getElementById("view-more-button4");
const viewLessButton4 = document.getElementById("view-less-button4");
const sentenceContainer4 = document.getElementById("sentence-container4");
const paragraph4 = document.createElement("p");

paragraph4.innerHTML = "While technology has certainly made bonsai more accessible and easier to learn, it is important to approach this art form with balance and respect. By using technology to enhance our understanding and appreciation of bonsai, rather than relying on it to shortcut the process, we can ensure that the beauty and tradition of bonsai is preserved for generations to come.";

viewMoreButton4.addEventListener("click", event => {
sentenceContainer4.appendChild(paragraph3);
viewLessButton4.style.display = "block";
sentenceContainer4.style.display = "block";
event.target.style.display = "none";
  // calculate the height of the container div with the new content
  let newHeight = sentenceContainer.scrollHeight;
  // update the height of the container div with the new height
  sentenceContainer.style.height = newHeight + "px";
});

viewLessButton4.addEventListener("click", event => {
viewMoreButton4.style.display = "block";
sentenceContainer4.style.display = "none";
event.target.style.display = "none";
sentenceContainer.style.height = "auto";
});