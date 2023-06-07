const themeButton = document.querySelector(".darkMode");

const toggleTheme = () => {
   const main = document.querySelector("main");
   const h1 = document.querySelector(".aboutUs");
   const pTags = document.querySelectorAll("p");
   const seeMore = document.querySelectorAll(".see-more");
   const submitBtn = document.querySelector(".submit-button");
 
   if (themeButton.innerHTML === "Light Mode") {
     main.style.backgroundColor = "white";
     themeButton.innerHTML = "Dark Mode";
     h1.style.color = "black";
     for (let i = 0; i < pTags.length; i++) {
       pTags[i].style.color = "black";
     }
     for (let i = 0; i < seeMore.length; i++) {
       seeMore[i].style.color = "black";
     }
     submitBtn.style.border = "#FFFFFF"
   } else {
     main.style.backgroundColor = "#2a3b49";
     themeButton.innerHTML = "Light Mode";
     h1.style.color = "white";
     for (let i = 0; i < pTags.length; i++) {
       pTags[i].style.color = "white";
     };
     for (let i = 0; i < seeMore.length; i++) {
       seeMore[i].style.color = "white";
     };
     submitBtn.style.border = "2px solid var(--text-secondary)"
   }
 };
 themeButton.onclick = toggleTheme;