export let params ={
    q:"",
    sort:"",
    order:"",
    page:1,
    limit:"10",
    category:""
}
export const inputSearch= document.querySelector("#search input");
export const buttonSearch=document.querySelector("#search button");
export const filter = document.querySelector("#filter"); 
export const pagiPrev=document.querySelector("#paginationPrev");
export const pagiNext=document.querySelector("#paginationNext");
export const pagiNumber=document.querySelector("#paginationNumber");
export const categories=document.querySelector("#category")
export const products= document.querySelector("#products")