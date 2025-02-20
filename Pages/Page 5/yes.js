const container = document.querySelector(".container");

// Create 100 hearts
for (var i = 1; i <= 100; i++) {
  const hearts = document.createElement("div");
  hearts.classList.add("heart");
  container.appendChild(hearts);
}

function animateHearts() {
  anime({
    targets: ".heart",
    translateX: function () {
      return anime.random(-window.innerWidth / 2, window.innerWidth / 2);
    },
    translateY: function () {
      return anime.random(-window.innerHeight / 2, window.innerHeight / 2);
    },
    rotate: 45,
    scale: function () {
      return anime.random(0.5, 3);
    },
    easing: "easeInOutBack",
    duration: 2000,
    delay: anime.stagger(20),
    complete: animateHearts,
  });
}

animateHearts();
