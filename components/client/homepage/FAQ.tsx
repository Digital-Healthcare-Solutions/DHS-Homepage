import React from "react"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion"
const FAQItems = [
    {
        question: "How does the AI scribe work?",
        answer: "The AI scribe listens to conversations in real-time and converts them into detailed notes. It uses advanced AI algorithms to generate accurate and structured documentation, which can be customized to fit your specific workflow."
    },
    {
        question: "Is the AI scribe HIPAA-compliant?",
        answer: "Yes, the AI scribe is fully HIPAA-compliant. We ensure that all data is encrypted, both at rest and in transit, to meet stringent healthcare data security standards."
    },
    {
        question: "Can I customize the format of the notes?",
        answer: "Yes, we offer customizable templates to meet your specific documentation needs, ensuring that the generated notes align with your preferred format and style."
    },
    {
        question: "How accurate is the real-time transcription?",
        answer: "The AI scribe is highly accurate, thanks to advanced speech recognition and natural language processing (NLP) technology. However, accuracy may vary based on factors like background noise or speaker clarity."
    },
    // {
    //     question: "Can the scribe integrate with our EMR system?",
    //     answer: "Yes, the AI scribe can seamlessly integrate with major EMR systems, allowing for direct insertion of the notes into patient records without manual input."
    // },
    {
        question: "What languages does the AI scribe support?",
        answer: "The AI scribe currently supports 37 languages, including English, Spanish, French, German, Chinese, Japanese, Russian and more. We are continually expanding our language support to serve a global audience."
    },
    {
        question: "Does the AI scribe work in noisy environments?",
        answer: "While the scribe performs best in quieter environments, it is equipped with noise reduction algorithms to improve transcription quality even in noisier settings. You can also adjust the transcription settings to optimize performance in noisy environments."
    },
    {
        question: "How secure is my data?",
        answer: "We take data security seriously. We don't store any recordings and transcriptions and notes are encrypted at rest and transit. Access controls ensure that only authorized users can view or edit sensitive information. You can also configure additional security settings to meet your organization's requirements."
    },
    {
        question: "Can multiple users use the AI scribe at the same time?",
        answer: "Yes, your whole team can use the scribe. We offer multi-user accounts and collaboration features to streamline documentation workflows and ensure that everyone has access to the notes they need."
    },
    {
        question: "How can I access my scribe-generated notes?",
        answer: "You can access your notes directly through our platform, via mobile or desktop app. Additionally, notes can be exported to other systems or formats as needed."
    },
    {
        question: "Can the AI scribe handle complex medical terminology?",
        answer: "Yes, the AI scribe is optimized to recognize and transcribe complex medical terminology accurately. If there are certain terms or phrases specific to your specialty, you can add them to a custom dictionary for improved recognition."
    },
    {
        question: "Is there a trial version of the AI scribe available?",
        answer: "Yes, we offer a 14 day free trial so you can experience how the AI scribe can streamline your documentation workflow before committing to a subscription."
    }
]

const FAQ = () => {
    return (
        <div className="container mx-auto max-w-5xl py-20" id="faq">
            <h1 className="text-4xl text-center font-bold mb-8">FAQ</h1>
            <Accordion type="single" collapsible className="w-full">
                {FAQItems.map((item, index) => (
                    <AccordionItem
                        variant="filled"
                        key={index}
                        value={item.question}
                    >
                        <AccordionTrigger variant="filled">
                            <h3>{item.question}</h3>
                        </AccordionTrigger>
                        <AccordionContent variant="filled">
                            <p className="p-4">{item.answer}</p>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default FAQ
