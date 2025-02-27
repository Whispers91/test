const products = [
  {
    id: Math.random(),
    slug: "mixed-nuts-berries-pack",
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/6_1.jpg",
    category: "Dried Fruits",
    title: "Mixed Nuts Berries Pack",
    rate: 4,
    newPrice: 45,
    oldPrice: null,
    isSale: true,
    isNew: false,
  },
  {
    id: Math.random(),
    slug: "multi-grain-combo-cookies",
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/3_1.jpg",
    category: "Cookies",
    title: "Multi Grain Combo Cookies",
    rate: 2,
    newPrice: 25,
    oldPrice: 30,
    isSale: false,
    isNew: false,
  },
  {
    id: Math.random(),
    slug: "fresh-mango-juice-pack",
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/9_1.jpg",
    category: "Foods",
    title: "Fresh Mango juice pack",
    rate: 3,
    newPrice: 46,
    oldPrice: 65,
    isSale: false,
    isNew: true,
  },
  {
    id: Math.random(),
    slug: "dates-value-fresh-pouch",
    image:
      "https://grabit-react-next.maraviyainfotech.com/assets/img/product-images/2_1.jpg",
    category: "Dried Fruits",
    title: "Dates Value Fresh Pouch",
    rate: 5,
    newPrice: 78,
    oldPrice: 85,
    isSale: false,
    isNew: false,
  },
];

const palettes = [
  {
    code: "#fb8500",
  },
  {
    code: "#219ebc",
  },
  {
    code: "#606c38",
  },
];

products.map((products) => {
  let temp = "";
  temp += `<div class="card-body">
                        <div class="img">
                            <img src="${products.image}" alt="" data-slug="${products.slug}">
                        </div>
                        <div class="card-content">
                            <p>
                                ${products.category}
                            </p>
                            <p>
                                ${products.title}
                            </p>
                            <div class="card-review">
                                
                            </div>
                            <div class="card-price">
                                ${
                                  products.oldPrice
                                    ? `<strong>
                                    ${products.newPrice}
                                </strong>
                                <del>
                                    $${products.oldPrice}
                                </del> `
                                    : `<strong>$${products.newPrice}</strong>`
                                }
                            </div>
                        </div>
                    </div>`;
  document.querySelector(".products_cards").innerHTML += temp;
});

const highlights = document.querySelectorAll(".products-categories li");
const data_color = document.querySelectorAll("[data-color]")
const activeItem = document.querySelectorAll(".active")
console.log(activeItem)
highlights.forEach((ele) => {
  ele.onclick = () => {
    highlights.forEach((ele) => {
      ele.classList.remove("active");
      

    });
    ele.classList.add("active");
    
  };
});
// -----------------------------------------------------------------------


// -----------------------------------------------------------------------
const dark_button = document.querySelector(".dark")
const light_button = document.querySelector(".light")
const body_change = document.querySelector("body")

dark_button.onclick = () => {
    body_change.classList.add("active")
}

light_button.onclick = () => {
    body_change.classList.remove("active")
}
// -----------------------------------------------------------------------
const sideMenu_open = document.querySelector(".side-button")
const sideMenu_close = document.querySelector(".top i")
const sideMenu = document.querySelector(".side-menu")

sideMenu_open.onclick = () => {
  sideMenu.classList.remove("animation")
    sideMenu.classList.add("active")
}

sideMenu_close.onclick = () => {
    sideMenu.classList.remove("active")
    sideMenu.classList.add("animation")
}

// -----------------------------------------------------------------------
palettes.map((index) => {
  let temp = "";
  temp += `<div class="palletes-colors" data-theme="${index.code}">
            </div>`;
  document.querySelector(".palletes").innerHTML += temp;
});

const palletes_color = document.querySelectorAll(".palletes-colors");

// console.log(data_color)


function setColor(color) {
  console.log(activeItem);
  
  activeItem.forEach((ele) => {
    
    if(ele.classList.contains("active")){
      ele.style.color = "red"
      console.log(ele, "hello")
    }
  })
//   data_color.forEach((ele) => {
//     ele.style.color = color
//   }
// )
}

palletes_color.forEach((ele) => {
    ele.style.backgroundColor = ele.dataset.theme;
    ele.addEventListener("click", () => {
      
      setColor(ele.dataset.theme)
    })
  })


// -----------------------------------------------------------------------
const popupsSection = document.querySelector(".popups")


function renderPopups(products) {
  let temp = ""
  temp += `<div class="popups_container">
                <div class="popups-LHS">
                    <img src="${products.image}" alt="">
                </div>
                <div class="popups-RHS">
                    <div class="button" onclick="removePopup()">
                        <a href="#"> <i class="fas fa-times"></i></a>
                    </div>
                    <h3>
                        ${products.title}
                    </h3>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, consequatur. Doloremque, vitae
                    consequuntur est consectetur autem obcaecati adipisci beatae, sit accusantium natus impedit labore
                    assumenda. Ea laborum saepe magnam facere?
                    <div class="prices">
                        <strong>$25</strong>
                        <del>$30</del>
                    </div>
                    <div class="weights">
                        <a href="#">
                            250g
                        </a>
                        <a href="#">
                            500g
                        </a>
                        <a href="#">
                            1kg
                        </a>
                        <a href="#">
                            2kg
                        </a>
                    </div>
                </div>
            </div>`
            popupsSection.innerHTML = temp
}


const img = Array.from(document.querySelectorAll(".card-body img"));
const productsSection = document.querySelector(".products")
const popupsClose = document.querySelector(".popups a")
img.forEach((element) => {
  element.onclick = () => {
    popupsSection.classList.add("active");
    // console.log(element.dataset.slug)
    let filterProductSlug = products.find((ele) => ele.slug == element.dataset.slug)
    // console.log(filterProductSlug);
    renderPopups(filterProductSlug)
    openPopup()
  };
});

function openPopup () {
  popupsSection.classList.add("active");
}
function removePopup () {
  popupsSection.classList.remove("active");
}

// productsSection.onclick = () => {
//   popupsSection.classList.remove("active");
// };

// popupsClose.onclick = () => {
//   popupsSection.classList.remove("active");
// }
