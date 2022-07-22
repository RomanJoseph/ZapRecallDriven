import congratulations from "./party.png"
import sad from "./sad.png"

export default function Bottom({ answeredQuestions, icons}) {
    if (icons.length != 4) {
        return (
            <footer>
                <p>{answeredQuestions}/4 Concluídos</p>
                <span>{icons}</span>
            </footer>
        )
    } else {
        if ((icons.includes(<ion-icon name="close-circle"></ion-icon>))) {
            return (
                <footer>
                    <span><strong>Parabéns!</strong><img src={congratulations} /></span>
                    <span>Você não esqueceu de nenhum flash card!</span>
                    <span>{answeredQuestions}/4 Concluídos</span>
                    <span>{icons}</span>
                </footer>
            )
        } else {
            return (
                <footer>
                    <span><img src={sad} /><strong>Putz...</strong></span>
                    <span>Ainda faltam alguns...Mas não desanime!</span>
                    <span>{answeredQuestions}/4 Concluídos</span>
                    <span>{icons}</span>
                </footer>
            )
        }
    }
}