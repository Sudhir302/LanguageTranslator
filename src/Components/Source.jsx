import Textarea from "./Textarea";
import Language from "./Language";
import "../style/Source.css";
import { useEffect, useState } from "react";

function Source({sendSourceLanguage, sendQuery}){

    let [sourceLanguage, setSourceLanguage] = useState();
    let [query,setQuery] = useState();

    useEffect(()=>{
        sendSourceLanguage(sourceLanguage);
        sendQuery(query)
    }, [sourceLanguage, query]);

    return(
        <div className="source-container">
            <div className="language">
                <Language getLanguage={setSourceLanguage} />
            </div>
            <div className="source-text">
                <Textarea getQuery={setQuery} />
            </div>
        </div>
    );
}

export default Source;