const imageSets = [
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

const displayMenu = (list) => {
  const photoContainer = document.getElementById("photo-container");
  const allPhotos = list.map((item) => {
    return `<div class="photo">
              <img src=${item.images} alt=${item.title} class="photo-image" />
              <div class="photo-info">
                <p class="photoTitle">${item.title} - ${item.name}</p>
                <a href="details.html?id=${item.id}" class="see-more">see more</a>
              </div>
            </div>`;
  });
  photoContainer.innerHTML = allPhotos.join("");
};


window.onload = function () {
  displayMenu(imageSets);
};

//theme
const themeButton = document.querySelector(".darkMode");

const toggleTheme = () => {
  // alert('works')
  const body = document.querySelector("body");
  const h2 = document.querySelector(".sub-2023");
  const photoP = document.querySelectorAll(".photoTitle");
  const seeMore = document.querySelectorAll(".see-more");

  if (themeButton.innerHTML === "Light Mode") {
    body.style.backgroundColor = "white";
    themeButton.innerHTML = "Dark Mode";
    h2.style.color = "black";
    for (let i = 0; i < photoP.length; i++) {
      photoP[i].style.color = "black";
    }
    for (let i = 0; i < seeMore.length; i++) {
      seeMore[i].style.color = "black";
    }
  } else {
    body.style.backgroundColor = "#2a3b49";
    themeButton.innerHTML = "Light Mode";
    h2.style.color = "white";
    for (let i = 0; i < photoP.length; i++) {
      photoP[i].style.color = "white";
    };
    for (let i = 0; i < seeMore.length; i++) {
      seeMore[i].style.color = "white";
    };
  }
};
themeButton.onclick = toggleTheme;

const submitBtn = document.querySelector("#submit-btn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  //get the values from the form
  const name = document.querySelector("input[name='name']").value;
  const title = document.querySelector("input[name='title']").value;
  const imageUrl = document.querySelector("input[name='imageUrl1']").value;

  const newPhoto = document.createElement("div");
  newPhoto.innerHTML = `<div class="photo">
   <img src=${imageUrl} alt=${title} class="photo-image" />
   <div class="photo-info">
     <p class="photoTitle">${title} - ${name}</p>
     <a href="/html/details.html" class="see-more">see more</a>
   </div>
  </div>`;
  const photoContainer = document.querySelector("#photo-container");
  photoContainer.insertBefore(newPhoto, photoContainer.firstChild);

  //reset values
  document.querySelector("input[name='name']").value = "";
  document.querySelector("input[name='title']").value = "";
  document.querySelector("input[name='imageUrl1']").value = "";
  document.querySelector("input[name='imageUrl2']").value = "";
  document.querySelector("input[name='imageUrl3']").value = "";
  document.querySelector("input[name='imageUrl4']").value = "";
  document.querySelector("input[name='imageUrl5']").value = "";
});
