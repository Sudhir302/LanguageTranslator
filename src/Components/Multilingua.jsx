import Source from './Source';
import Target from './Target';
import Button from './Button';
import '../style/Multilingua.css';
import { useState } from 'react';
import axios from 'axios'
import {toast} from 'react-toastify';

function Multilingua(){

  let [sourceLanguage, setSourceLanguage] = useState();
  let [targetLanguage, setTargetLanguage] = useState();
  let [query, setQuery] = useState();
  let [translatedResult, setTranslatedResult] = useState();
  let [loading, setLoading] = useState(false);

  let payload = {
    source: sourceLanguage,
    target: targetLanguage,
    q: query
  }

  const submitHandler = async(e)=>{
    e.preventDefault();
    setLoading(true);
    setTranslatedResult("Translating text....");
    try {
      const response = await axios.post("http://localhost:5050/translate", payload, {withCredentials: true})
      console.log(response);
    } catch (error) {
      console.error(error);
      toast.error(error.response.data.message);
      setTranslatedResult(error.response.data.message)
    }
    finally{
      setLoading(false)
    }
  }

  return(
    <form className='multilingua-container' id='translate-text' onSubmit={submitHandler}>
      <div className="heading">Multilingua🌎</div>
      <div className="core-container">
        <div className="source">
          <Source sendQuery={setQuery} sendSourceLanguage={setSourceLanguage} />
        </div>
        <div className="target">
          <Target sendTargetLanguage={setTargetLanguage} translatedText={translatedResult} />
        </div>
      </div>
      <div className="multilingua-btn">
        <Button type="submit" form="translate-text" text="Translate" />
      </div>
    </form>
  )
}

export default Multilingua;