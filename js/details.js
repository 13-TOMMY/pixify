const photos = [
  {
    id: 1,
    name: "Andrew Smith",
    title: "Innocence",
    images: [
      "https://images.unsplash.com/photo-1512540315028-2c1a6497da04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1543332143-4e8c27e3256f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1734&q=80",
      "https://images.unsplash.com/photo-1612209246511-5b81949e5fdd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1587402092301-725e37c70fd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
      "https://images.unsplash.com/photo-1492680967812-4b9226a079de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    ],
  },
  {
    id: 2,
    name: "Jane Doe",
    title: "Nature Adventures",
    images: [
      "https://images.unsplash.com/photo-1533692328991-08159ff19fca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80",
      "https://images.unsplash.com/photo-1508515803898-7bb2d7703093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1503557122744-b650066ba62f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1516298773066-c48f8e9bd92b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1598726668148-99946ef1cb42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1732&q=80",
    ],
  },
  {
    id: 3,
    name: "Irna Tawsen",
    title: "Faces of the World",
    images: [
      "https://images.unsplash.com/photo-1674574124649-778f9afc0e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1532635241-17e820acc59f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1630&q=80",
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80",
      "https://images.unsplash.com/photo-1604186837056-8e7c2867b6f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    ],
  },
  {
    id: 4,
    name: "Mark Dale",
    title: "Wild Animals",
    images: [
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
      "https://images.unsplash.com/photo-1504173010664-32509aeebb62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1654&q=80",
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
      "https://images.unsplash.com/photo-1531494391841-6ac2ef3859b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      "https://images.unsplash.com/photo-1550358864-518f202c02ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    ],
  },
];
let currentImageId = 1;
let currentId;
let currentName;

// Wait for the page to load before executing the code
const pagePhotos = () => {
  // Get the ID parameter from the URL
  const urlParams = new URLSearchParams(window.location.search);
  currentId = urlParams.get("id");

  // Find the image with the matching ID
  const currentImg = photos.find((item) => item.id === Number(currentId))

  // Create the HTML for the current image
  const img = `
    <div class="current-img-container">
      <div class="current-img-info">
        <h2 id="h2-title">${currentImg.title}</h2>
        <p class="p-name">${currentImg.name}</p>
      </div>
      <img src="${currentImg.images[currentImageId - 1]}" alt="${currentImg.name}" class="curr-img" />
      <div class="counting-id">
        <p>${Number(currentImageId)} of ${photos.length}</p>
      </div>
    </div>
  `;

  // Finds the container for the image and update its HTML
  const imgContainer = document.querySelector("#img-container");
  imgContainer.innerHTML = img;
};
window.onload = function(){
  pagePhotos(photos);
};

const previousBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

function showPrevious() {
    currentImageId = Number(currentImageId) - 1;
    if (currentImageId < (currentImageId = 1)) {
      currentImageId = 4;
    }
    pagePhotos();
  }
  previousBtn.addEventListener("click", showPrevious);
  
  function showNext() {
    currentImageId = Number(currentImageId) + 1;
    if (currentImageId == photos.length + 1) {
     currentImageId = 1;
    }
    pagePhotos();
  }
  nextBtn.addEventListener("click", showNext);

// light and dark theme

const themeButton = document.querySelector(".darkMode");

const toggleTheme = () => {
  const body = document.querySelector("body");
  const pElements = document.querySelectorAll("p");
  const h2Elements = document.querySelector("h2");
  const preB = document.querySelector(".prev-btn");
  const nxtB = document.querySelector(".next-btn");

  if (themeButton.innerHTML === "Light Mode") {
    body.style.backgroundColor = "white";
    themeButton.innerHTML = "Dark Mode";
    for (let i = 0; i < pElements.length; i++) {
      pElements[i].style.color = "black";
    }
    h2Elements.style.color = "black";
    preB.style.border = "white";
    nxtB.style.border = "white";
  } else {
    body.style.backgroundColor = "#2a3b49";
    themeButton.innerHTML = "Light Mode";
    for (let i = 0; i < pElements.length; i++) {
      pElements[i].style.color = "white";
    }
    h2Elements.style.color = "white";
    preB.style.border = "2px solid var(--text-secondary)";
    nxtB.style.border = "2px solid var(--text-secondary)";
  }
};
themeButton.onclick = toggleTheme;
