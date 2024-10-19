// app/blog/[slug]/page.tsx
import Image from "next/image"
import Link from "next/link"
import { PortableText } from "@portabletext/react"
import { client, urlFor } from "../../../sanity"
import { TableOfContentsFloating } from "../../../components/blog/contents"
import { RichTextComponents } from "../../../components/blog/RichTextComponents"
import { Button } from "@/components/ui/button"
import { ScrollProgressBar } from "@/components/blog/ScrollProgressBar"

async function getPost(slug: string) {
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
    const post = await client.fetch(query, { slug })
    return post
}

export async function generateMetadata({
    params
}: {
    params: { slug: string }
}) {
    const post = await getPost(params.slug)
    return {
        title: `${post.title} | Digital Healthcare Solutions`,
        description: post.description,
        openGraph: {
            description: post.description
        },
        keywords:
            "Digital Healthcare Solutions, Healthcare Solutions, Healthcare, Digital Healthcare, Healthcare Communication, Healthcare Communication Platform, Medical Phone System, Medical Phone, Alternative to faxing, Secure alternative to faxing medical records, Medical communication, Medical communication platform, Medical communication system, Medical communication software, Medical communication solution"
    }
}

export default async function Post({ params }: { params: { slug: string } }) {
    const post = await getPost(params.slug)

    return (
        <article>
            <ScrollProgressBar />
            <Image
                src={urlFor(post.mainImage).url()!}
                className="w-full lg:w-3/4 xl:w-1/2 h-40 lg:h-[28rem] object-cover object-center mx-auto"
                alt={post.title}
                width={1000}
                height={1000}
                quality={100}
            />
            <div className="ml-10 mt-10 xl:sticky xl:top-28">
                <div className="xl:absolute">
                    <TableOfContentsFloating contents={post.body} />
                </div>
            </div>
            <div className="container mx-auto lg:max-w-5xl p-5">
                <h1 className="text-3xl mt-10 mb-3">{post.title}</h1>
                <h2 className="text-gray-600 dark:text-neutral-200 dark:font-light mb-2 text-xl">
                    {post.description}
                </h2>
                <div className="flex items-center space-x-2 border-b border-gray-300 dark:border-neutral-500 pb-2 w-fit">
                    <Image
                        src={urlFor(post.author.image).url()!}
                        width={48}
                        height={48}
                        className="rounded-full"
                        alt={post.author.name + " avatar"}
                    />
                    <div className="dark:font-light text-sm md:text-base flex flex-col">
                        <p>
                            written by{" "}
                            <span className="text-blue-500 cursor-pointer hover:underline">
                                {post.author.name}
                            </span>{" "}
                            - {new Date(post._createdAt).toLocaleDateString()}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            Read time: {post.readTime} minutes
                        </p>
                    </div>
                </div>

                <section className="py-5">
                    <PortableText
                        value={post.body}
                        components={RichTextComponents}
                    />
                    <Link href="/blog">
                        <Button className="mt-20">Back to Blog</Button>
                    </Link>
                </section>
            </div>
        </article>
    )
}
