import { client, urlFor } from "../../sanity"
import { Post } from "../../typings"
import Image from "next/image"
import Link from "next/link"

interface Props {
    posts: [Post]
}

const Blog = ({ posts }: Props) => {
    console.log({ posts })
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 p-2">
                {posts.map((post) => (
                    <Link key={post._id} href={`/blog/${post.slug.current}`}>
                        <div className="w-96 group border rounded-lg overflow-hidden">
                            <Image
                                className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
                                src={urlFor(post.mainImage).url()!}
                                alt={post.title}
                                width={400}
                                height={300}
                            ></Image>
                            <div className="flex justify-between p-5 bg-neutral-300 dark:bg-neutral-700">
                                <div>
                                    <h1 className="text-lg font-bold ">
                                        {post.title}
                                    </h1>
                                    <p className=" text-neutral-700 dark:text-neutral-300 text-sm">
                                        {post.description} by {post.author.name}
                                    </p>
                                </div>
                                <Image
                                    className="rounded-full h-12 w-12"
                                    src={urlFor(post.author.image).url()!}
                                    alt={post.author.name}
                                    width={100}
                                    height={100}
                                ></Image>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Blog

export const getServerSideProps = async () => {
    const query = `
    *[_type == "post"]{
      _id,
        title,
        slug,
        author -> {
          name,
          image
        },
        description,
        mainImage
    }`
    const posts = await client.fetch(query)
    return {
        props: { posts }
    }
}
