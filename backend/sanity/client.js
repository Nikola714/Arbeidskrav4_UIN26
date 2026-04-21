import {createClient} from "@sanity/client";

export const client = createClient({
    projectId: "29k2pp07",
    dataset: "production",
    apiVersion: "v2025-04-21",
    useCdn: true
})