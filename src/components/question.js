import "../styles/question.css"
import { useEffect,useState} from "react";
import { API } from "./api";


export function Question(){

    const [question, setquestion] = useState(null);

    
    useEffect(() => {
        fetch(`${API}questions`, { method: "GET" })
          .then((data) => data.json())
          .then((res) => setquestion(res));
      }, []);
    
      console.log(question)

    return(
        <div className="question-container">
           {question ? "": }
        </div>
    )
}


function Createquestion(){
    return(
        <div className="contianer">

        </div>
    )
}