// === MOBILE NAVIGATION TOGGLE ===
document.getElementById("toggleBtn").addEventListener("click", function () {
   document.getElementById("navLinks").classList.toggle("active");
 });
 
 // === INFINITE CAROUSEL AUTO SCROLL ===
 const carousel = document.getElementById("carousel");
 let scrollAmount = 0;
 
 // Function to handle automatic scrolling
 function autoScrollCarousel() {
   scrollAmount += 1;
   carousel.scrollLeft = scrollAmount;
 
   // Reset scroll of my images
   if (scrollAmount >= carousel.scrollWidth / 2) {
     scrollAmount = 0;
     carousel.scrollLeft = 0;
   }
 
   requestAnimationFrame(autoScrollCarousel);
 }
 
 // Start the animation
 requestAnimationFrame(autoScrollCarousel);
 
 // === SWIPE FUNCTIONALITY ===
 let isSwiping = false;
 let startX = 0;
 let scrollLeftStart = 0;
 
 // Mouse Events (For Desktop)
 carousel.addEventListener("mousedown", (e) => {
   isSwiping = true;
   startX = e.pageX;
   scrollLeftStart = carousel.scrollLeft;
   carousel.style.cursor = "grabbing";  
 });
 
 // Mouse Movement 
 carousel.addEventListener("mousemove", (e) => {
   if (!isSwiping) return;
   e.preventDefault();
   const x = e.pageX;
   const scroll = scrollLeftStart - (x - startX);
   carousel.scrollLeft = scroll;
 });
 
 // Mouse Up Events (Desktop)
 carousel.addEventListener("mouseup", () => {
   isSwiping = false;
   carousel.style.cursor = "grab";  
 });
 
 // Mouse Leave Events (For laptop)
 carousel.addEventListener("mouseleave", () => {
   isSwiping = false;
   carousel.style.cursor = "grab";  
 });
 
 // Touch Events (For cp)
 carousel.addEventListener("touchstart", (e) => {
   isSwiping = true;
   startX = e.touches[0].pageX;
   scrollLeftStart = carousel.scrollLeft;
 });
 
 carousel.addEventListener("touchmove", (e) => {
   if (!isSwiping) return;
   e.preventDefault();
   const x = e.touches[0].pageX;
   const scroll = scrollLeftStart - (x - startX);
   carousel.scrollLeft = scroll;
 });
 
 carousel.addEventListener("touchend", () => {
   isSwiping = false;
 });

 


