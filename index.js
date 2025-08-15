import { posts } from "./post.js";

const cardContainer = document.getElementById("card-container");

const skeleton = (items, index) => {
  return `
        <div id="card">
            <div class="avt-img">
                <img src="${items.avatar}" class="avatar-img">
                <div class="name-loc">
                    <span class="avt-name">${items.name} </span>
                    <span class='avt-loc'>${items.location}</span>
                </div>
            </div>
                <div class="post-img-container">
                <img src="${items.post}" class="post-img" data-index="${index}">
                <div class="heart-overlay" id="heart-${index}">❤️</div>
            </div>
            <div class="icons">
                <img src="images/icon-heart.png" class="icons-img">
                <img src="images/icon-comment.png" class="icons-img">
                <img src="images/icon-dm.png" class="icons-img">
            </div>
                <p class="likes" id="likes-${index}">
                    <span>${items.likes}</span> likes
                </p>
            <div class="username-com">
                <span class="username">${items.username}</span>
                <span> ${items.comment} </span>
            </div>
        </div>
        `;
};

const cardsToShow = () => {
  let cards = "";
  posts.map((values, index) => (cards += skeleton(values, index)));
  cardContainer.innerHTML = cards;
  let postImage = document.querySelectorAll(".post-img");
  // console.log(postImage)
  postImage.forEach((img) => {
    img.addEventListener("dblclick", handleLike);
  });
};

const handleLike = (event) => {
  const postIndex = event.target.getAttribute("data-index");
  posts[postIndex].likes += 1;
  // console.log( posts[postIndex])

  const likesElement = document.getElementById(`likes-${postIndex}`);
  // console.log( likesElement)
  likesElement.innerHTML = `<span>${posts[postIndex].likes}</span> likes`;

  const heart = document.getElementById(`heart-${postIndex}`);
  heart.classList.add("show");
  setTimeout(() => {
    heart.classList.remove("show");
  }, 600);
};
cardsToShow();
