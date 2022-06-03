const productList = [
    {id: 1, name: "Product 1", price: 200},
    {id: 2, name: "Product 2", price: 300},
];

const productElement = document.querySelector("#product");

function showProduct(products) {
    if(!Array.isArray(productList) || productList.length == 0) return -1;

    let result;
    for(let i = 0; i < products.length; i++) {
        result += `<h2><a href="./product.html?id=${products[i].id}">${products[i].name}</a></h2>`
    }
    return result;
}
export function render(element, content) {
    if(element) {
        element.innerHTML = content;
    }
}
render(productElement, showProduct(productList));
