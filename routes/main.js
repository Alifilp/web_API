
const findProducts = (params) => {
    let count = Number(document.getElementById("user-products").value);
    console.log(count);
}
const btn = document.querySelector(".btn_search");

btn.addEventListener("click", findProducts);
