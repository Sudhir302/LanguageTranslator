import { useEffect, useState } from "react";
import "./Textarea.css";

function Textarea({getQuery}){
    let [query, setQuery] = useState("");

    useEffect(()=>{
        getQuery(query);
    }, [query]);

    const queryHandler = (event)=>{
        console.log(event.target.value);
        setQuery(event.target.value);
    }

    return(
            <textarea name="source" id="source" placeholder="Enter text" value={query} onChange={queryHandler} required />
    )
}

export default Textarea;