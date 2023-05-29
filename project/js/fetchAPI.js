export const fetchAPI= async (api)=>{
    const respone = await fetch(api);
    const result = await respone.json();
    return result
}