import {createClient} from "@sanity/client";

export const client = createClient({
    projectId: "739xtgnl",
    dataset: "production",
    apiVersion: "v2025-04-21",
    useCdn: true
})