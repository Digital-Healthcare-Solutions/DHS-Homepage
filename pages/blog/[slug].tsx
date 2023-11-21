//
import { GetStaticProps } from "next"
import { client, urlFor } from "../../sanity"
import { Post } from "../../typings"
import Image from "next/image"
import { PortableText } from "@portabletext/react"
import Link from "next/link"
import { RichTextComponents } from "../../components/blog/RichTextComponents"
import ButtonPrimary from "../../components/UI-Components/button-primary"
import { Avatar, Container, Text } from "@mantine/core"
import { TableOfContentsFloating } from "../../components/blog/contents"
import { useScroll, motion } from "framer-motion"
import Head from "next/head"
import { useState } from "react"

interface Props {
    post: Post
}

const Post = ({ post }: Props) => {
    const { scrollYProgress } = useScroll()

    return (
        <article>
            <Head>
                <title>{post.title} | Digital Healthcare Solutions</title>
                <meta name="description" content={post.description} />
                <meta property="og:description" content={post.description} />
                <meta
                    name="keywords"
                    content="Digital Healthcare Solutions, Healthcare Solutions, Healthcare, Digital Healthcare, Healthcare Communication, Healthcare Communication Platform, Medical Phone System, Medical Phone, Alternative to faxing, Secure alternative to faxing medical records, Medical communication, Medical communication platform, Medical communication system, Medical communication software, Medical communication solution"
                />
            </Head>
            <motion.div
                className={
                    "h-1 bg-gradient-to-r from-blue-400 to-purple-500 top-14 md:top-16 lg:top-20 sticky z-50 left-0 origin-top-left rounded-full "
                }
                style={{ scaleX: scrollYProgress }}
                initial={{ scaleX: 0 }}
            ></motion.div>
            {/* @ts-ignore  */}
            <Image
                src={urlFor(post.mainImage).url()!}
                className="w-full lg:w-3/4 xl:w-1/2 h-40 lg:h-[28rem] object-cover object-center mx-auto"
                alt={post.title}
                width={1000}
                height={1000}
                quality={100}
            />
            <div className="minRandom:sticky ml-10 top-28 mt-10">
                <div className="minRandom:absolute ">
                    {" "}
                    {/* @ts-ignore  */}
                    <TableOfContentsFloating contents={post.body} />
                </div>
            </div>
            {/* @ts-ignore  */}
            <Container className="mx-auto p-5">
                <h1 className="text-3xl mt-10 mb-3">{post.title}</h1>
                <h2 className="text-gray-600 dark:text-neutral-200 dark:font-light mb-2 text-xl">
                    {post.description}
                </h2>
                <h3 className="flex items-center space-x-2 border-b border-gray-300 dark:border-neutral-500 pb-2 w-fit">
                    {/* @ts-ignore */}
                    <Avatar
                        src={urlFor(post.author.image).url()!}
                        size="lg"
                        radius="xl"
                        alt={post.author.name + " avatar"}
                    />

                    <div className="dark:font-light text-sm md:text-base flex flex-col ">
                        <p>
                            written by{" "}
                            <span className="text-blue-500 cursor-pointer hover:underline">
                                {post.author.name}
                            </span>{" "}
                            - {new Date(post._createdAt).toLocaleDateString()}
                        </p>
                        {/* @ts-ignore */}

                        <Text size="sm" color="dimmed">
                            Read time: {post.readTime} minutes
                        </Text>
                    </div>
                </h3>

                <section className="py-5">
                    {/* @ts-ignore */}
                    <PortableText
                        //ignore type error for now
                        //@ts-ignore
                        value={post.body}
                        components={RichTextComponents}
                    />
                    {/* @ts-ignore */}

                    <Link href="/blog">
                        {/* @ts-ignore */}

                        <ButtonPrimary
                            onClick={() => {
                                console.log("")
                            }}
                            className="mt-20"
                        >
                            Back to Blog
                        </ButtonPrimary>
                    </Link>
                </section>
            </Container>
        </article>
    )
}

export default Post

export const getStaticPaths = async () => {
    const query = `*[_type == "post"]{
    _id,
    slug {
        current
    }
  }`
    const posts = await client.fetch(query)
    const paths = posts.map((post: Post) => ({
        params: { slug: post.slug.current }
    }))
    return {
        paths,
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const query = `*[_type == "post" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        author-> {
            name,
            image
        },
        slug,
        mainImage,
        body,
        description,
        categories[]-> {
            title
          },
          readTime
    }`
    const post = await client.fetch(query, { slug: params?.slug })

    if (!post) return { notFound: true }

    return {
        props: { post },
        revalidate: 3600
    }
}
