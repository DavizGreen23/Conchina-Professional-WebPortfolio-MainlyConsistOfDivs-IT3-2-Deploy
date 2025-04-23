// Toggle hamburger for reponsiveness
document.addEventListener("DOMContentLoaded", () => {
   const toggleBtn = document.getElementById("indexToggleBtn");
   const navLinks = document.getElementById("indexNavLinks");
 
   toggleBtn.addEventListener("click", () => {
     navLinks.classList.toggle("active");
   });
 });
 