import Language from "./Language";
import Result from "./Result";
import { useEffect, useState } from "react";
import "../style/Target.css"

function Target({sendTargetLanguage, translatedText}){
    let [targetLanguage, setTargetLanguage] = useState();
    
    useEffect(()=>{
        sendTargetLanguage(targetLanguage);
    }, [targetLanguage]);

    return(
        <div className="target-container">
            <div className="target-language">
                <Language getLanguage={setTargetLanguage} />
            </div>
            <div className="translated-result">
                <Result result={translatedText}/>
            </div>
        </div>
    )
}

export default Target;