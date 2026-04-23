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

    console.log(sanityKrav)


    return(
        <section id="arbeidskravliste">
            {sanityKrav.sort().map((ak) => (
                <article key={ak._id}>
                    <h2>{ak.arbeidskravnavn}</h2>
                    <p>{ak.beskrivelse}</p>
                </article>
        ))}
        </section>
    )
}