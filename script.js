document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".zoomable-image");

  images.forEach((image) => {
    image.addEventListener("click", () => {
      const modal = document.createElement("div");
      modal.classList.add("modal");

      const modalContent = document.createElement("div");
      modalContent.classList.add("modal-content");

      const closeButton = document.createElement("span");
      closeButton.classList.add("close-button");
      closeButton.innerHTML = "<span class='close-button-label'>Close</span>";

      const modalImage = document.createElement("img");
      modalImage.src = image.src;

      modalImage.onload = function () {
        modalContent.appendChild(closeButton);
        modalContent.appendChild(modalImage);
        modal.appendChild(modalContent);
        document.body.appendChild(modal); // Add the modal to the DOM

        modal.style.display = "flex";

        setTimeout(() => {
          modal.classList.add("active");
        }, 10);
      };

      closeButton.addEventListener("click", () => {
        modal.classList.remove("active");
        setTimeout(() => {
          modal.style.display = "none";
          modal.remove();
        }, 200); // Match the transition duration in CSS
      });

      modal.addEventListener("click", (event) => {
        if (event.target === modal) {
          modal.classList.remove("active");
          setTimeout(() => {
            modal.style.display = "none";
            modal.remove();
          }, 200);
        }
      });
    });
  });
});

// JavaScript (Rough Example)
document.addEventListener("DOMContentLoaded", function () {
  const skillCircles = document.querySelectorAll(".skill-circle");

  skillCircles.forEach((circle) => {
    const percentage = circle.dataset.percentage; // Read the percentage from the data attribute
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference; //Start by hiding entire graph

    //Animate skill bars
    setTimeout(() => {
      circle.style.transition = "stroke-dashoffset 1s ease-out";
      circle.style.strokeDashoffset =
        circumference - (percentage / 100) * circumference;
    }, 500); //Delay animation by 500ms
  });
});

// Handling touch events
document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".description .card");

  cards.forEach((card) => {
    card.addEventListener("touchstart", function (event) {
      // Prevent the default hover behavior
      event.preventDefault();

      // Toggle a class to simulate the hover effect
      this.classList.toggle("touched");
    });
  });
});

// Function to call the easter egg at the footer
document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector("footer");
  const easterEgg = document.querySelector(".easter-egg");

  footer.addEventListener("dblclick", function () {
    easterEgg.style.animation = "none"; /* Disable animation */
    easterEgg.offsetHeight; /* Trigger reflow to restart animation */
    easterEgg.style.animation = null;
  });
});
