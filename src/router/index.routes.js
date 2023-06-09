import { pages } from "../controllers/index";

let content = document.getElementById('root');
const router = async ( route ) => {
    content.innerHTML  = '';
    console.log( route );
    switch(route){
        case '#/':
            {
               return content.appendChild(pages.home());               
            }           
        case '#/posts':
            {
                return content.appendChild(await pages.posts());               
             }    
        case '#/products':
                return console.log('Products!!!');
        default:
           {
            return content.appendChild(await pages.notFound());
           }
            
        }
}

export { router };