import logo from "./logo.png"

export default function InitialPage({ setInit }){
    return(
        <div className="initialPage">
          <img className="logo" src={logo} alt="Logo"></img>
          <h1>ZapRecall</h1>
          <div className="initGame" onClick={()=> setInit(false)}>
            <p>Iniciar Recall!</p>
          </div>
        </div>
    )
}