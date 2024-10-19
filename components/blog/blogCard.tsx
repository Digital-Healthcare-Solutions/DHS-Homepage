import { Post } from "../../typings"
import { urlFor } from "../../sanity"
import Link from "next/link"
import Image from "next/image"
import { TfiBook } from "react-icons/tfi"
import { Badge } from "../ui/badge"
import { Card, CardContent } from "../ui/card"

function BlogCard({
    title,
    author,
    description,
    mainImage,
    slug,
    body,
    _createdAt,
    categories,
    readTime
}: Post) {
    return (
        <Card className="bg-gray-100 ring-1 ring-gray-300 dark:ring-neutral-700 dark:bg-[#1A1B1E]  group ease-in-out w-72 sm:w-96 md:w-[21.5rem] lg:w-80 xl:w-96 h-fit">
            <CardContent className="p-4">
                <div className="mb-4">
                    <Image
                        className="h-60 w-full object-cover rounded-md"
                        src={urlFor(mainImage).url()!}
                        alt={title}
                        width={400}
                        height={300}
                    />
                </div>
                <div className="space-x-2 mb-2">
                    {categories.map((category) => (
                        <Badge
                            key={category.title}
                            className={`
                            ${
                                category.title === "Product"
                                    ? "bg-blue-500"
                                    : category.title === "CPT codes"
                                    ? "bg-green-500"
                                    : category.title === "Coding"
                                    ? "bg-yellow-500"
                                    : category.title === "Announcements"
                                    ? "bg-red-500"
                                    : category.title === "Updates"
                                    ? "bg-purple-500"
                                    : category.title === "Product Launch"
                                    ? "bg-pink-500"
                                    : "bg-neutral-500"
                            } 
                            text-white text-xs font-semibold px-2 py-1 rounded
                        `}
                        >
                            {category.title}
                        </Badge>
                    ))}
                </div>
                <h2 className="text-xl font-bold text-neutral-900 dark:text-white mt-2 mb-4">
                    {title}
                </h2>
                <div className="flex items-center mb-4">
                    <Image
                        src={urlFor(author.image).url()!}
                        alt={author.name}
                        width={40}
                        height={40}
                        className="rounded-full mr-3"
                    />
                    <div>
                        <p className="font-semibold text-neutral-900 dark:text-white">
                            {author.name}
                        </p>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400">
                            Published:{" "}
                            {new Date(_createdAt).toLocaleDateString()}
                        </p>
                    </div>
                </div>
                <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4">
                    <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
                        {description}
                    </p>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center text-blue-600 dark:text-blue-400">
                            <TfiBook className="mr-1" size={16} />
                            <span className="text-sm">
                                Read Time: {readTime} minutes
                            </span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default BlogCard
