async function ToDo() {
  try {
    const data = await fetch("https://dummyjson.com/products");
    const result =  await data.json();
    displayToDo(result.products);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
ToDo();

const container = document.querySelector(".container");

function displayToDo(data) {
  let temp = ""
  data.forEach((item) => {
    temp +=` <div class="Todo_Description">
                <h1>${item.title}</h1>
                <p>${item.description}</p>
                <p>${item.category}</p>
                <p>${item.price}</p>
                <p>${item.discountPercentage}</p>
                <p>${item.rating}</p>
                <p>${item.stock}</p>
            </div>`
            container.innerHTML = temp
  })
  console.log(data)
}
