const arbeidskrav = {
    name: "arbeidskrav",
    title: "Arbeidskrav",
    type: "document",
    fields: [
        {
            name: "arbeidskravnavn",
            title: "Navn på arbeidskrav",
            type:"string"

        },
        {
            name: "id",
            title: "Arbeidskrav-nummer",
            type: "number"
        }, 
        {
            name: "beskrivelse",
            title:"Beskrivelse av arbeidskravet",
            type:"string"
        }
        
    ]

}

export default arbeidskrav

// Isabel skrev dette (men samarbeidet om dette), 
// pga repository-trøbbel måtte det limes inn fra det forrige repositoriet vi tidligere laget.
