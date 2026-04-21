import Amanda from "./Amanda";
import Nikola from "./Nikola";
import Isabel from "./Isabel"


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
        </main>
    )
}
