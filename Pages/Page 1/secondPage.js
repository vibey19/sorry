// Smaller, Softer Hearts Animation
function hearts() {
  const container = document.body;
  const heart = document.createElement("div");
  heart.classList.add("hearts");
  heart.innerHTML = "💔";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 4 + 2 + "s";

  container.appendChild(heart);
  setTimeout(() => {
    heart.remove();
  }, 4000);
}

setInterval(hearts, 700);

// Scrolling to bottom
const scrollingElement = document.scrollingElement || document.body;

function scrollToBottom() {
  scrollingElement.scrollTop = scrollingElement.scrollHeight;
}

// Redirect to next page
function myFunction() {
  window.location.href = "../Page 2/thirdPage.html";
}
