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
  {
    id: 4,
    name: "Santorini Beach",
    image: "https://img.freepik.com/free-photo/close-up-green-leaf-with-fresh-water-droplets-generative-ai_188544-8635.jpg?t=st=1739812745~exp=1739816345~hmac=ab5cf257ff05431a29c0cbf4f0eed53317fa1cd08128a72d45153355a3ab1882&w=1380",
  },
  {
    id: 5,
    name: "Santorini Beach",
    image: "https://img.freepik.com/free-photo/futuristic-half-robot-tiger_23-2151558821.jpg?t=st=1739812749~exp=1739816349~hmac=0e47f178db3a84bd8e358bac884b7c9849d8ef43922a938b1da159f1b7ec651e&w=1380",
  },
  {
    id: 6,
    name: "Santorini Beach",
    image: "https://img.freepik.com/free-photo/beautiful-landscape-with-tree_1048-1822.jpg?t=st=1739812751~exp=1739816351~hmac=ea5cc25b8b114f3a7a13295b0693a2f0bbc8652a266c46d9bfcc77f8ce8e7555&w=1380",
  },
  {
    id: 7,
    name: "Santorini Beach",
    image: "https://img.freepik.com/free-photo/3d-render-tranquil-island-sunset_1048-7534.jpg?t=st=1739812754~exp=1739816354~hmac=7f19803e1d95a8f1d340ca7d854bac373d1fb40f4cae1e0a729c147f77f9be3a&w=1380",
  },
  {
    id: 8,
    name: "Santorini Beach",
    image: "https://img.freepik.com/free-photo/tree-bubble_1048-4660.jpg?t=st=1739812756~exp=1739816356~hmac=621bc7f4b3c08d309f18c1c985b74dd0d506692cd878d0646e2a7c0eea9c3e51&w=1380",
  },
  {
    id: 9,
    name: "Santorini Beach",
    image: "https://img.freepik.com/free-photo/creative-crystal-lens-ball-photography-greenery-lake-sunset_181624-27265.jpg?t=st=1739812816~exp=1739816416~hmac=04aed2632c6a1f885103052a4ad0768c1418ffb1d75d5f87c5c6238436f1f53e&w=1380",
  },
  {
    id: 10,
    name: "Santorini Beach",
    image: "https://img.freepik.com/premium-photo/vintage-traveler-kit-discoverers_272645-543.jpg?w=1380",
  },
  {
    id: 11,
    name: "Santorini Beach",
    image: "https://img.freepik.com/free-vector/red-christmas-ball-snowflakes-banner_1017-22394.jpg?t=st=1739812817~exp=1739816417~hmac=30b21cb0b853d9bbf1f31059ad9b805ae303175c94bf22475955f200fec7aca2&w=1380",
  },
  {
    id: 12,
    name: "Santorini Beach",
    image: "https://img.freepik.com/free-photo/sunset-with-clouds-sea_1048-4472.jpg?t=st=1739812849~exp=1739816449~hmac=199c7768e377d6576e659b1085cf73b96257b6008d568feadc97600e2b622441&w=1380",
  },
  {
    id: 13,
    name: "Santorini Beach",
    image: "https://img.freepik.com/free-photo/lighthouse-sunset_1048-1816.jpg?t=st=1739812850~exp=1739816450~hmac=3ddef06baa97edf1fcaa98a35a256ba4b1413e9cf2ca72a7432cceae88035bde&w=1380",
  },
  {
    id: 14,
    name: "Santorini Beach",
    image: "https://img.freepik.com/free-photo/3d-dramatic-sunset-ocean_1048-8322.jpg?t=st=1739812850~exp=1739816450~hmac=6063fb94ac239186211ac1190c1b048faa2a269e0f65dae44ca30124d71c0a62&w=1380",
  },
  {
    id: 15,
    name: "Santorini Beach",
    image: "https://img.freepik.com/free-photo/3d-landscape-with-planets-ocean_1048-10494.jpg?t=st=1739812870~exp=1739816470~hmac=bb05d3bfd5aa0b58a20caea01a4f6635bdc9e993b992559a3ebfbf1b190033c0&w=1380",
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
