// import { navItems } from "../../utils.js/data";
import { navItems } from "../utils.js/data";
export default function Nav(){

    return(
        <>
           <nav className="mainNav">
               <ul>
                {navItems.map(item=>(
                <li className="navItem" key={item.id}>
                     <a href={item.link}>{item.title}</a>
                </li>
                ))}
               </ul>
            </nav>
        </>
    );
}