document.addEventListener("DOMContentLoaded", function () {
   // === MOBILE NAVIGATION TOGGLE ===
   const credToggle = document.querySelector(".cred-nav-toggle");
   const credLinks = document.querySelector(".cred-nav-links");
 
   if (credToggle && credLinks) {
     credToggle.addEventListener("click", () => {
       credLinks.classList.toggle("active");
     });
   }
 
   // === INFINITE CAROUSEL AUTO SCROLL ===
   const carousel = document.getElementById("carousel");
   if (carousel) {
     let scrollAmount = 0;
 
     function autoScrollCarousel() {
       scrollAmount += 1;
       carousel.scrollLeft = scrollAmount;
 
       if (scrollAmount >= carousel.scrollWidth / 2) {
         scrollAmount = 0;
         carousel.scrollLeft = 0;
       }
 
       requestAnimationFrame(autoScrollCarousel);
     }
 
     requestAnimationFrame(autoScrollCarousel);
 
     // === SWIPE FUNCTIONALITY ===
     let isSwiping = false;
     let startX = 0;
     let scrollLeftStart = 0;
 
     // Mouse Events
     carousel.addEventListener("mousedown", (e) => {
       isSwiping = true;
       startX = e.pageX;
       scrollLeftStart = carousel.scrollLeft;
       carousel.style.cursor = "grabbing";
     });
 
     carousel.addEventListener("mousemove", (e) => {
       if (!isSwiping) return;
       e.preventDefault();
       const x = e.pageX;
       carousel.scrollLeft = scrollLeftStart - (x - startX);
     });
 
     carousel.addEventListener("mouseup", () => {
       isSwiping = false;
       carousel.style.cursor = "grab";
     });
 
     carousel.addEventListener("mouseleave", () => {
       isSwiping = false;
       carousel.style.cursor = "grab";
     });
 
     // Touch Events
     carousel.addEventListener("touchstart", (e) => {
       isSwiping = true;
       startX = e.touches[0].pageX;
       scrollLeftStart = carousel.scrollLeft;
     });
 
     carousel.addEventListener("touchmove", (e) => {
       if (!isSwiping) return;
       e.preventDefault();
       const x = e.touches[0].pageX;
       carousel.scrollLeft = scrollLeftStart - (x - startX);
     });
 
     carousel.addEventListener("touchend", () => {
       isSwiping = false;
     });
   }
 });

 


 