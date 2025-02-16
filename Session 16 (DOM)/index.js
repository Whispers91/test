const productsContainer = document.querySelector(".cards");

const products = [
  {
    id: 1,
    name: "Santorini Beach",
    image: "./assets/images/2820521.jpg",
  },
  {
    id: 2,
    name: "Santorini Beach",
    image: "./assets/images/2830777.jpg",
  },
  {
    id: 3,
    name: "Santorini Beach",
    image: "./assets/images/2838701.jpg",
  },
];

products.map((product) => {
  let temp = "";
  temp += `
            <div class="card">
                <div class="card_img">
                    <img src="${product.image}" alt="image1">
                </div>
                <div class="card_text">
                    <h2>${product.name}</h2>
                </div>
            </div>`;
  productsContainer.innerHTML += temp;
});
