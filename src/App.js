import { useState } from "react";
import InitialPage from "./initialPage/initialPage";
import QuestionPage from "./questionPage/questionPage";
import "./css/reset.css"
import "./css/style.css"

export default function App(){
    const [init,setInit] = useState(false)

    if(init){
        return <InitialPage setInit={setInit}/>
    }else{
        return <QuestionPage/>
    }
}