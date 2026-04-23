import { useEffect, useState } from "react"
import client from '../sanity/client'


export default function HentArbeidskrav() {

    const [sanityKrav, setSanityKrav] = useState([])

    useEffect(()=>{
        async function fetchAllArbeidskrav() {
            const alleArbeidskrav = await client.fetch(`*[_type == "arbeidskrav"]|order(arbeidskravnavn){
                _id,
                id,
                arbeidskravnavn,
                beskrivelse
                }`)
            setSanityKrav(alleArbeidskrav)
        }
        fetchAllArbeidskrav()
    },[])

    // vi er klare over at det ikke er best practice å sortere etter alfabetisk 
    // rekkefølge på strengene ettersom det kunne (teorietisk sett) vært andre prosjekter der som ikke er arbeidskrav,
    // men vi fikk ikke til å finne ut av hvorfor id kom opp som 'null' i konsollen,
    // så vi velger heller å bruke dette for funksjonalitetens skyld. Vi fikk hjelp av studass til å få dette til, 
    // siden arbeidskravene kom i tilfeldig rekkefølge inn i arrayen og på applikasjonen vår. 

    console.log(sanityKrav)


    return(
        <section id="arbeidskravliste">
            {sanityKrav.map((ak) => (
                <article id="arbeidskravene" key={ak._id}>
                    <h2>{ak.arbeidskravnavn}</h2>
                    <p>{ak.beskrivelse}</p>
                </article>
        ))}
        </section>
    )
}