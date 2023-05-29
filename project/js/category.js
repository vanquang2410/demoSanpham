import { drawProduct } from "./drawProduct.js";
import { fetchAPI } from "./fetchAPI.js";
import { API_CATEGORY } from "./variable.js";
import { params } from "./variables.js";
const categories=document.querySelector("#category")
fetchAPI(API_CATEGORY)
.then((data=>{
   
    let htmls =data.map(item=>{
       
        return `
        <div class="category__item" data-category="${item}">${item}</div>
        `
    })
    categories.innerHTML=htmls.join("");
    const listcategory= document.querySelectorAll("#category .category__item")
    listcategory.forEach(item =>{
        item.addEventListener("click",function(){
            params.category=item.getAttribute("data-category");
            drawProduct();
        })
    })
}))