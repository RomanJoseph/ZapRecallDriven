import react from "react"
import logo from "./logo.png"
import QuestionCard from "./questionCard"
import Bottom from "./bottom"

export default function QuestionPage() {
    const questions = buildQuestionsArray()
    const [answeredQuestions, setAnsweredQuestions] = react.useState(0)
    const [icons, setIcons] = react.useState([])

    return (
        <>
            <div className="header">
                <h1>ZapRecall</h1>
                <img src={logo} alt="logo" />
            </div>

            {questions.map((question, index) => {
                return <QuestionCard key={index} number={index + 1} question={question.Question} answer={question.Answer} answeredQuestions = {answeredQuestions} setAnsweredQuestions={setAnsweredQuestions} icons={icons} setIcons={setIcons}/>
            })}

            <Bottom answeredQuestions={answeredQuestions} icons={icons}/>
        </>
    )
}

function buildQuestionsArray() {
    const deck = [
        { Question: "O que é JSX ?", Answer: "Uma extensão da linguagem JavaScript" },
        { Question: "O React é __ ", Answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { Question: "Componentes devem iniciar com...", Answer: "letra maiúscula" },
        { Question: "Podemos colocar ___ dentro do JSX", Answer: "expressões" },
        { Question: "O ReactDOM nos ajuda ___", Answer: "interagindo com a DOM para colocar componentes React na mesma" },
        { Question: "Usamos o npm para ___", Answer: "gerenciar os pacotes necessários e suas dependências" },
        { Question: "Usamos props para ___", Answer: "passar diferentes informações para componentes" },
        { Question: "Usamos estado (State) para ___", Answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }]

    const cards = []

    while (cards.length < 4) {
        let n = Math.floor(Math.random() * 8)
        if (!(cards.includes(n))) {
            cards.push(n)
        }
    }


    return cards.map((item) => {
        return {
            Question: deck[item].Question,
            Answer: deck[item].Answer
        }
    })
}
