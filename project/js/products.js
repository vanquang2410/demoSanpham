import { drawProduct } from "./drawProduct.js";
import { fetchAPI } from "./fetchAPI.js";
import { API_PRODUCT } from "./variable.js";
import { params ,inputSearch,buttonSearch,filter,products,categories} from "./variables.js";


drawProduct();
const search = ()=>{
    params.q=inputSearch; 
    drawProduct();
}

buttonSearch.addEventListener("click",function(){
    params.q=inputSearch.value;
    drawProduct();
   
})
inputSearch.addEventListener("keydown",function(e){
  
    if (e.key==="Enter"){
        search();
    }
})
 
filter.addEventListener("change",function(e){
    console.log(e.target.value);
    switch(e.target.value){
        case "mac-dinh":
            params.sort=""; 
            params.order="";
            break;
        case "gia-thap-den-cao":
            params.sort="price"; 
            params.order="asc"
            break;
        case "gia-cao-den-thap":
            params.sort="price"; 
            params.order="desc"
            break;
        case "giam-gia-nhieu":
            params.sort="discountPercentage"; 
            params.order="desc"
            break;
        default:
            break;   

                
    } 
    drawProduct();
})

pagiNext.addEventListener("click",function(){
    params.page=params.page+1;
    pagiNumber.innerHTML=params.page;
    drawProduct();
})
pagiPrev.addEventListener("click",function(){
    if (params.page>1){
         params.page=params.page-1;
    pagiNumber.innerHTML=params.page;
    drawProduct();
    }
   
})