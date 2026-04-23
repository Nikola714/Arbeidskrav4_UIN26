import Amanda from "./Amanda";
import Nikola from "./Nikola";
import Isabel from "./Isabel"
import HentArbeidskrav from "./HentArbeidskrav";


export default function Home(){

    return(
        <main>
            <header id="overskrift">
                <h1>Gruppe 30</h1>
            </header>
            
            <section>
                <Amanda/>
                <Nikola/>
                <Isabel/>    
            </section>
            <h2 id="undertittel">Arbeidskrav for interaktive nettsteder</h2>
            <HentArbeidskrav />            
        </main>
    )
}

// Problemer med pc, så vi har selv programmert alt på branch men vi ble nødt til å kopiere alt inn i nye repositorier flere ganger i starten av oppgaven.  
