import { client, urlFor } from "../../sanity"
import { Post } from "../../typings"
import Image from "next/image"
import Link from "next/link"
import BlogCard from "../../components/blog/blogCard"
import { ImageActionBanner } from "../../components/blog/blogHome"
import Head from "next/head"

interface Props {
    posts: [Post]
}

const Blog = ({ posts }: Props) => {
    console.log({ posts })
    return (
        <div>
            <Head>
                <title>Blog | Digital Healthcare Solutions</title>
                <meta
                    name="description"
                    content="Our content creators update weekly with new articles and videos. Subscribe to our newsletter to be notified of new content."
                />
                <meta
                    property="og:description"
                    content="Our content creators update weekly with new articles and videos. Subscribe to our newsletter to be notified of new content."
                />
                <meta
                    name="keywords"
                    content="Digital Healthcare Solutions, Healthcare Solutions, Healthcare, Digital Healthcare, Healthcare Communication, Healthcare Communication Platform, Medical Phone System, Medical Phone, Alternative to faxing, Secure alternative to faxing medical records, Medical communication, Medical communication platform, Medical communication system, Medical communication software, Medical communication solution"
                />
            </Head>
            <ImageActionBanner
                image="/blogHome.jpg"
                title=""
                description="Our content creators update weekly with new articles and videos. Subscribe to our newsletter to be notified of new content."
            />

            <div className="flex flex-col items-center md:items-start md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-4 md:gap-8 p-2 mx-4 md:mx-8 pb-24 pt-12">
                {posts.map((post) => (
                    <Link
                        className="self-auto"
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
