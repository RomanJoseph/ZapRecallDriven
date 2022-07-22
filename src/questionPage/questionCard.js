import react from "react"

export default function QuestionCard({ number, question, answer, setAnsweredQuestions, answeredQuestions, icons, setIcons, final, setFinal }) {
    const [card, setCard] = react.useState(false)
    const [selectAnswer, setSelectAnswer] = react.useState(false)
    const [isAnswerd, setIsAnswerd] = react.useState(false)

    if (card) {
        if (selectAnswer) {

            switch (isAnswerd) {
                case "green":
                    return (
                        <div className="questionCard">
                            <span className="questionNumber answeredGreen">Pergunta {number}</span><ion-icon name="checkmark-circle"></ion-icon>
                        </div>
                    )

                case "orange":
                    return (
                        <div className="questionCard">
                            <span className="questionNumber answeredOrange">Pergunta {number}</span><ion-icon name="help-circle"></ion-icon>
                        </div>
                    )
                
                case "red":
                    return (
                        <div className="questionCard">
                            <span className="questionNumber answeredRed">Pergunta {number}</span><ion-icon name="close-circle"></ion-icon>
                        </div>
                    )
                default:
                    return (
                        <div className="questionTurned">
                            <span>{answer}</span>
                            <div className="answers">
                                <div className="red" onClick={() => {
                                    setIsAnswerd("red")
                                    setAnsweredQuestions(answeredQuestions+1)
                                    setIcons([...icons, <ion-icon name="close-circle"></ion-icon>])
                                    setFinal([...final, "red"])}
                                    }>Não Lembrei</div>
                                <div className="orange" onClick={() => {
                                    setIsAnswerd("orange")
                                    setAnsweredQuestions(answeredQuestions+1)
                                    setIcons([...icons, <ion-icon name="help-circle"></ion-icon>])
                                    setFinal([...final, "orange"])}
                                    }>Quase não lembrei</div>
                                <div className="green" onClick={() => {
                                    setIsAnswerd("green")
                                    setAnsweredQuestions(answeredQuestions+1)
                                    setIcons([...icons, <ion-icon name="checkmark-circle"></ion-icon>])
                                    setFinal([...final,"green"])}
                                    }>Zap!</div>
                            </div>
                        </div>)

            }


        } else {
            return (
                <div className="questionTurned">
                    <span>{question}</span>
                    <ion-icon name="refresh-outline" onClick={() => setSelectAnswer(true)}></ion-icon>
                </div>
            )
        }
    } else {
        return (
            <div className="questionCard">
                <span className="questionNumber">Pergunta {number}</span><ion-icon name="play-outline" onClick={() => setCard(true)}></ion-icon>
            </div>
        )
    }


}