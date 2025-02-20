document.addEventListener("DOMContentLoaded", function () {
  // Function to show the clickable button and hide the loading button
  function showClickableButton() {
    document.getElementById("enable").classList.add("fade-in");
    document.getElementById("disable").style.display = "none";
    document.getElementById("loveMessage").style.opacity = "1";
  }

  // Function to navigate to the next page
  function navigateToNextPage() {
    window.location.href = "../Page 3/forthPage.html";
  }

  // Show the clickable button after 3 seconds
  setTimeout(showClickableButton, 3000);

  // Navigate to the next page on button click
  document
    .getElementById("enable")
    .addEventListener("click", navigateToNextPage);

  // Create Floating Hearts
  function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 3 + "s";

    document.querySelector(".hearts-container").appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  setInterval(createHeart, 700);
});
