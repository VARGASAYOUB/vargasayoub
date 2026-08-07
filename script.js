document.addEventListener("DOMContentLoaded", () => {

  // Animation d'entrée
  document.body.style.opacity = "0";

  setTimeout(() => {
    document.body.style.transition = "opacity 1.2s ease";
    document.body.style.opacity = "1";
  }, 200);

  // Animation des boutons
  const buttons = document.querySelectorAll(".buttons a");

  buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {
      button.style.transform = "scale(1.05)";
    });

    button.addEventListener("mouseleave", () => {
      button.style.transform = "scale(1)";
    });

  });

  // Animation de la photo
  const profile = document.querySelector(".profile");

  if (profile) {

    profile.addEventListener("mouseenter", () => {
      profile.style.transform = "rotate(2deg) scale(1.05)";
    });

    profile.addEventListener("mouseleave", () => {
      profile.style.transform = "rotate(0deg) scale(1)";
    });

  }

  // Effet de titre
  const title = document.querySelector("h1");

  if (title) {
    setInterval(() => {
      title.style.textShadow = "0 0 30px red";

      setTimeout(() => {
        title.style.textShadow = "0 0 15px crimson";
      }, 500);

    }, 1500);
  }

});
