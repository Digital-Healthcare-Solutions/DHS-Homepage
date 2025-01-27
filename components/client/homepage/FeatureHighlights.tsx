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

const FeatureHighlight = ({ icon: Icon, title, description, link }) => (
  <Card className="relative overflow-hidden group backdrop-blur-sm bg-white/80 dark:bg-neutral-900/80 border-0 shadow-lg rounded-3xl">
    <CardContent className="p-8 relative">
      <CardHeader className="p-0 space-y-4">
        <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/50 dark:to-blue-900/30">
          <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
        </div>
        <CardTitle className="text-xl font-semibold text-neutral-900 dark:text-white">
          {title}
        </CardTitle>
        <CardDescription className="text-base text-neutral-600 dark:text-neutral-300">
          {description}
        </CardDescription>
      </CardHeader>
    </CardContent>
    <CardFooter className="px-8 pb-8 pt-0">
      <Link href={link}>
        <Button
          variant="outline"
          size="sm"
          className="border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-300 dark:hover:bg-blue-900"
        >
          Show Me
        </Button>
      </Link>
    </CardFooter>
  </Card>
)

const FeatureHighlights = () => {
  const features = [
    {
      icon: Mic,
      title: "Realtime Transcription",
      description:
        "Instantly transcribe speech to text in real-time during patient visits, saving time and enhancing accuracy.",
      link: "#demo-video"
    },
    {
      icon: FileText,
      title: "Customizable Template Builder",
      description:
        "Create and modify note templates with our intuitive drag-and-drop interface, tailored to your specific needs.",
      link: "/product/ai-scribe#settings-demo"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Seamlessly share and collaborate on patient notes between nurses and doctors, enhancing communication and care coordination.",
      link: "/product/ai-scribe#team-collaboration"
    }
  ]

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white to-white dark:from-neutral-950 dark:to-neutral-900"></div>
      <div className="absolute left-0 top-36 h-96 w-96 bg-blue-200 rounded-full blur-3xl opacity-20 dark:bg-blue-900 dark:opacity-30"></div>
      <div className="absolute right-0 bottom-36 h-96 w-96 bg-blue-200 rounded-full blur-3xl opacity-20 dark:bg-blue-900 dark:opacity-30"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
            Effortless Notes, Designed to Fit Your Workflow
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Streamline your documentation process with powerful AI-assisted
            features
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureHighlight key={index} {...feature} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="https://app.getaxon.ai/signup">
            <Button size="lg">
              <Send className="w-5 h-5 mr-2" />
              Get Started for Free
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeatureHighlights
