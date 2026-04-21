import { useEffect, useState } from "react"
import client from '../sanity/client'


export default function Hentarbeidskrav() {

    const [sanityKrav, setSanityKrav] = useState([])

    useEffect(()=>{
        async function fetchAllArbeidskrav() {
            const alleArbeidskrav = await client.fetch(`*[_type == "arbeidskrav"]{
                _id,
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
            {sanityKrav.map((ak) => (
                <article key={ak._id}>
                    <h2>{ak.arbeidskravnavn}</h2>
                    <p>{ak.beskrivelse}</p>
                </article>
        ))}
        </section>
    )
}