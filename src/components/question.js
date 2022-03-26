import "../styles/question.css"
import { useEffect,useState} from "react";
import { API } from "./api";


export function Question(){

    const [question, setquestion] = useState([]);

    
    useEffect(() => {
        fetch(`${API}questions`, { method: "GET" })
          .then((data) => data.json())
          .then((res) => setquestion(res));
      }, []);
    
      console.log(question)

    return(
        <div className="question-container">
            {question.map((ele)=>(
               <Createquestion  question={ele.question}/>
           ))}
        </div>
    )
}


function Createquestion({question}){
    return(
        <div className="contianer">
              <h4>{question}</h4>
        </div>
    )
}