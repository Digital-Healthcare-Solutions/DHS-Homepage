import { urlFor } from "../../sanity"
import Image from "next/image"
import Link from "next/link"
import slugify from "slugify"
import { toPlainText, PortableTextComponents } from "@portabletext/react"

const LinkableH1 = ({ children, value }: any) => {
    const slug = slugify(toPlainText(value), { lower: true })
    return (
        <h1 id={slug} className="text-4xl lg:text-5xl font-bold py-5 md:py-8">
            {children}
        </h1>
    )
}

const LinkableH2 = ({ children, value }: any) => {
    const slug = slugify(toPlainText(value), { lower: true })
    return (
        <h2 id={slug} className="text-3xl lg:text-4xl font-bold py-5 md:py-8">
            {children}
        </h2>
    )
}

const LinkableH3 = ({ children, value }: any) => {
    const slug = slugify(toPlainText(value), { lower: true })
    return (
        <h3 id={slug} className="text-2xl lg:text-3xl font-bold py-5 md:py-8">
            {children}
        </h3>
    )
}

const LinkableH4 = ({ children, value }: any) => {
    const slug = slugify(toPlainText(value), { lower: true })
    return (
        <h4 id={slug} className="text-xl lg:text-2xl font-bold py-5 md:py-8">
            {children}
        </h4>
    )
}

const LinkableH5 = ({ children, value }: any) => {
    const slug = slugify(toPlainText(value), { lower: true })
    return (
        <h5 id={slug} className="text-lg lg:text-xl font-bold py-5 md:py-8">
            {children}
        </h5>
    )
}

export const RichTextComponents = {
    types: {
        image: ({ value }: any) => {
            return (
                <div className="relative w-full h-96 md:my-10 mx-auto">
                    <Image
                        className="object-contain"
                        src={urlFor(value).url()}
                        alt={"Blog Image"}
                        fill
                    />
                </div>
            )
        }
    },

    list: {
        bullet: ({ children }: any) => (
            <ul className="ml-10 py-5 space-y-3 list-disc list-inside">
                {children}
            </ul>
        ),
        number: ({ children }: any) => (
            <ol className="ml-10 py-5 space-y-3 list-decimal list-inside">
                {children}
            </ol>
        )
    },
    block: {
        h1: LinkableH1,
        h2: LinkableH2,
        h3: LinkableH3,
        h4: LinkableH4,
        h5: LinkableH5,
        p: ({ children }: any) => (
            <p className="text-base lg:text-lg py-5 md:py-8">{children}</p>
        ),

        blockquote: ({ children }: any) => (
            <blockquote className="border-l-4 border-gray-300 pl-4 my-5 md:my-8 italic">
                {children}
            </blockquote>
        )
    },
    marks: {
        link: ({ value, children }: any) => {
            const rel = !value.href.startsWith("/")
                ? "noopener noreferrer"
                : undefined
            return (
                <Link
                    href={value.href}
                    rel={rel}
                    className="text-blue-500 hover:underline"
                >
                    {children}
                </Link>
            )
        }
    }
}
