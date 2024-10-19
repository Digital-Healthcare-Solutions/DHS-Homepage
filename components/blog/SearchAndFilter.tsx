"use client"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

interface Topic {
    title: string
    postCount: number
}

interface SearchAndFilterProps {
    initialSearch?: string
    initialTopic?: string
    topics: Topic[]
}

export default function SearchAndFilter({
    initialSearch = "",
    initialTopic = "",
    topics
}: SearchAndFilterProps) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [search, setSearch] = useState(initialSearch)
    const [topic, setTopic] = useState(initialTopic)

    useEffect(() => {
        setSearch(searchParams.get("search") || "")
        setTopic(searchParams.get("topic") || "")
    }, [searchParams])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        const params = new URLSearchParams()
        if (search) params.set("search", search)
        if (topic && topic !== "all") params.set("topic", topic)

        router.push(`/blog?${params.toString()}`)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4"
        >
            <Input
                type="text"
                placeholder="Search posts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-grow border rounded dark:bg-neutral-800 dark:text-white h-10"
            />
            <Select
                value={topic}
                onValueChange={(value) => {
                    setTopic(value)
                }}
            >
                <SelectTrigger className="h-10 border rounded dark:bg-neutral-800 dark:text-white w-[180px]">
                    <SelectValue placeholder="Filter by Topic" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Category</SelectLabel>
                        <SelectItem value={"all"}>All Topics</SelectItem>
                        {topics.map((topic) => (
                            <SelectItem key={topic.title} value={topic.title}>
                                {topic.title} ({topic.postCount})
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>

            <Button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Search
            </Button>
        </form>
    )
}
