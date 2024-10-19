import { Suspense } from "react"
import BlogPosts from "@/components/blog/BlogPosts"
import { ImageActionBanner } from "../../components/blog/blogHome"
import SearchAndFilter from "@/components/blog/SearchAndFilter"
import { getTopics } from "@/utils/getTopics"

export const revalidate = 3600

export const metadata = {
    title: "Blog | Digital Healthcare Solutions",
    description:
        "Our content creators update weekly with new articles and videos. Subscribe to our newsletter to be notified of new content.",
    openGraph: {
        description:
            "Our content creators update weekly with new articles and videos. Subscribe to our newsletter to be notified of new content."
    },
    keywords:
        "Digital Healthcare Solutions, Healthcare Solutions, Healthcare, Digital Healthcare, Healthcare Communication, Healthcare Communication Platform, Medical Phone System, Medical Phone, Alternative to faxing, Secure alternative to faxing medical records, Medical communication, Medical communication platform, Medical communication system, Medical communication software, Medical communication solution"
}

export default async function BlogPage({
    searchParams
}: {
    searchParams: { search?: string; topic?: string }
}) {
    const topics = await getTopics()

    return (
        <div className="min-h-screen">
            {/* <ImageActionBanner
                image="/blogHome.jpg"
                title="Our Blog"
                description="Our content creators update weekly with new articles and videos. Subscribe to our newsletter to be notified of new content."
            /> */}
            <main className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <SearchAndFilter
                    initialSearch={searchParams.search}
                    initialTopic={searchParams.topic}
                    topics={topics}
                />
                <Suspense fallback={<BlogPostsSkeleton />}>
                    <BlogPosts searchParams={searchParams} />
                </Suspense>
            </main>
        </div>
    )
}

function BlogPostsSkeleton() {
    return (
        <div className="animate-pulse space-y-8 mt-8">
            <div className="h-64 bg-gray-300 dark:bg-gray-700 rounded-lg"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="h-64 bg-gray-300 dark:bg-gray-700 rounded-lg"
                    ></div>
                ))}
            </div>
        </div>
    )
}