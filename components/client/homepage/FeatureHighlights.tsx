import React from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"
import { Mic, FileText, Users, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const FeatureHighlight = ({ icon: Icon, title, description }) => (
    <Card className="p-2 rounded-lg dark:bg-neutral-900">
        <CardContent>
            <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-14 w-14 rounded-full"
                    >
                        <Icon className="w-8 h-8" />
                    </Button>
                    {title}
                </CardTitle>
                <CardDescription className="text-base">
                    {description}
                </CardDescription>
            </CardHeader>
        </CardContent>
        <CardFooter className="flex justify-center">
            <Button variant="outline" size="sm">
                Show Me
            </Button>
        </CardFooter>
    </Card>
)

const FeatureHighlights = () => {
    const features = [
        {
            icon: Mic,
            title: "Realtime Transcription",
            description:
                "Instantly transcribe speech to text in real-time during patient visits, saving time and enhancing accuracy."
        },
        {
            icon: FileText,
            title: "Customizable Template Builder",
            description:
                "Create and modify note templates with our intuitive drag-and-drop interface, tailored to your specific needs."
        },
        {
            icon: Users,
            title: "Team Collaboration",
            description:
                "Seamlessly share and collaborate on patient notes between nurses and doctors, enhancing communication and care coordination."
        }
    ]

    return (
        <div className="py-32 ">
            <div className="container mx-auto bg-blue-500 p-8 md:p-20 rounded-lg">
                <h2 className="text-5xl text-white font-raleway font-bold text-center pb-14">
                    Instant clinical notes tailored to you
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <FeatureHighlight key={index} {...feature} />
                    ))}
                </div>
                <Link
                    href={"https://app.getaxon.ai/signup"}
                    className="flex justify-center pt-20"
                >
                    <Button startIcon={<Send />} className="text-lg" size="lg">
                        Get Started for Free
                    </Button>
                </Link>
            </div>
        </div>
    )
}

export default FeatureHighlights
