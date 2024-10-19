import Link from "next/link"
import { client } from "../../sanity"
import BlogCard from "../../components/blog/blogCard"
import { Post } from "../../typings"

async function getPosts(search?: string, topic?: string) {
    let query = `*[_type == "post"`

    const conditions: string[] = []
    if (search) {
        conditions.push(
            `(title match "*${search}*" || description match "*${search}*")`
        )
    }
    if (topic) {
        // This line is changed to correctly filter by category
        conditions.push(`count((categories[]->title)[@ == "${topic}"]) > 0`)
    }

    if (conditions.length > 0) {
        query += ` && ${conditions.join(" && ")}`
    }

    query += `]{
        _id,
        title,
        slug,
        author -> {
            name,
            image
        },
        description,
        mainImage,
        _createdAt,
        categories[]-> {
            title
        },
        readTime
    } | order(_createdAt desc)`

    const posts = await client.fetch(query)
    return posts
}

export default async function BlogPosts({
    searchParams
}: {
    searchParams: { search?: string; topic?: string }
}) {
    const posts: Post[] = await getPosts(
        searchParams.search,
        searchParams.topic
    )

    if (posts.length === 0) {
        return (
            <div className="text-center text-gray-600 dark:text-gray-400 mt-8">
                No posts found. Try adjusting your search or filter.
            </div>
        )
    }

    const featuredPost = posts[0]
    const remainingPosts = posts.slice(1)

    return (
        <div className="space-y-12 mt-8">
            {!searchParams.search && !searchParams.topic && (
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                        Featured Post
                    </h2>
                    <Link
                        href={`/blog/${featuredPost.slug.current}`}
                        className="block transform transition duration-500 hover:scale-105 w-fit"
                    >
                        <BlogCard {...featuredPost} />
                    </Link>
                </div>
            )}
            <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                    {searchParams.search || searchParams.topic
                        ? "Search Results"
                        : "Latest Posts"}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {(searchParams.search || searchParams.topic
                        ? posts
                        : remainingPosts
                    ).map((post) => (
                        <Link
                            key={post._id}
                            href={`/blog/${post.slug.current}`}
                            className="block transform transition duration-500 hover:scale-105"
                        >
                            <BlogCard {...post} />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
