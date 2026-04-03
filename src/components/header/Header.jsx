import { useState } from "react";
import Nav from "./Nav";
 export default function Header({getkeywords}){
    const onChangeHandler = (event ) => {
       const value = event.target.value === ' ' ?  false : true ;
        setkeywords(event.target.value);
        setActive(value)
    }
     const[keywords , setkeywords] = useState('');
     const [active,setActive] = useState(false);
    return(
        <>
         <header style ={{bacground :`${active ? "red" : "pink"}`}}>
       <div className="logo"> Awesome News </div>
       <input onChange={getkeywords}/>
       {/* <p>The Keywords are : {keywords}</p> */}
      <Nav/>
       </header>
        </>
    );
}