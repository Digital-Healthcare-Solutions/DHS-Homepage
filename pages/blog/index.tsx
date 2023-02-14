import { client, urlFor } from "../../sanity"
import { Post } from "../../typings"
import Image from "next/image"
import Link from "next/link"
import BlogCard from "../../components/blog/blogCard"
import { ImageActionBanner } from "../../components/blog/blogHome"

interface Props {
    posts: [Post]
}

const Blog = ({ posts }: Props) => {
    console.log({ posts })
    return (
        <div>
            <ImageActionBanner
                image="/blogHome.jpg"
                title="Blog - Home"
                description="Read our latest blog posts to learn more about our products and services."
            />

            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 p-2 mx-1 md:mx-10">
                {posts.map((post) => (
                    <Link
                        className="w-auto sm:w-96"
                        key={post._id}
                        href={`/blog/${post.slug.current}`}
                    >
                        <BlogCard
                            key={post._id}
                            title={post.title}
                            author={post.author}
                            description={post.description}
                            mainImage={post.mainImage}
                            slug={post.slug}
                            body={post.body}
                            _id={post._id}
                            _createdAt={post._createdAt}
                            categories={post.categories}
                            readTime={post.readTime}
                        />
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
        mainImage,
        _createdAt,
        categories[]-> {
          title
        },
        readTime
    }`
    const posts = await client.fetch(query)
    return {
        props: { posts }
    }
}
