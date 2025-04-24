import "./Result.css"
function Result({result}){
    return(
        <p className="result" style={result == "internal server error"? {color: "red"} : {color: "black"}}>
            {result || "Translated text"}
        </p>
    )
}

export default Result;