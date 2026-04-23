import {createClient} from "@sanity/client";

const client = createClient({
    projectId: "29k2pp07",
    dataset: "production",
    apiVersion: "2026-04-21",
    useCdn: true
})

export default client