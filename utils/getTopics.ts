import { client } from "@/sanity"

export async function getTopics() {
    const query = `*[_type == "category"]{
        title,
        "postCount": count(*[_type == "post" && references(^._id)])
    } | order(postCount desc)`

    const topics = await client.fetch(query)
    return topics
}
