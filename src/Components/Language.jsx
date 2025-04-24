import { useState } from "react";
import "./Language.css";


function Language({getLanguage}){

    let [language, setLanguage] = useState();
    const handleLanguage = (e)=>{
        console.log(e.target.value);
        setLanguage(e.target.value);
        getLanguage(e.target.value);
    }

    return(
        <div className="language">
            <select name="" id="" value={language} onChange={handleLanguage}>
                <option value="">Select Language</option>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="hi">Hindi</option>
                <option value="de">German</option>
                <option value="zh">Chinese</option>
                <option value="ar">Arabic</option>
                <option value="es">Spanish</option>
            </select>
        </div>
    );
}

export default Language;