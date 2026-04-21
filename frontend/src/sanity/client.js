import {createClient} from "@sanity/client";

const client = createClient({
    projectId: "739xtgnl",
    dataset: "production",
    apiVersion: "2026-04-21",
    useCdn: true
})

export default client