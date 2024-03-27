import { Container, Text } from "@mantine/core"
import Image from "next/image"
import React from "react"

const ImageCopy = ({ title, text }) => {
    return (
        <div className=" flex flex-col justify-center items-center font-rubik">
            <h1 className="text-lg md:text-xl lg:text-3xl font-semibold">
                {title}
            </h1>
            <div className="text-sm md:text-base lg:text-lg dark:text-neutral-300 text-center">
                {text}
            </div>
        </div>
    )
}

const Features2 = () => {
    return (
        <Container size={"lg"} className="py-20">
            <div className="pb-14">
                <h1 className="text-4xl font-bold text-center mb-3">
                    Our solutions
                </h1>
                <Text size="lg" className="text-center">
                    We offer variety of products that can help you run your
                    practice more efficiently.
                </Text>
            </div>
            <main className="flex flex-col gap-14 md:gap-8">
                <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-3">
                    <Image
                        src="/Intelligent-Call-Routing-Distribution.png"
                        alt="hero image"
                        width={500}
                        height={500}
                        className="rounded-md"
                    />
                    <ImageCopy
                        title={"Streamline Patient Communication"}
                        text={
                            "Let our autonomous call system streamline your calls, offering instant call transcriptions and seamless text communication with patients. Effortlessly manage interactions, enhancing care while focusing on what matters most."
                        }
                    />
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-3">
                    <ImageCopy
                        title={"Generate Clinical Notes With AI"}
                        text={
                            "Our AI-driven solution records conversations with patients then transcribes accurate clinical notes in seconds. Maximize free time and minimize manual work—less typing, less paperwork, more care."
                        }
                    />
                    <Image
                        src="/voiceRecognition.jpg"
                        alt="hero image"
                        width={500}
                        height={500}
                        className="rounded-md"
                    />
                </div>
                <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-3">
                    <Image
                        src="/paperwork-automation.jpg"
                        alt="hero image"
                        width={500}
                        height={500}
                        className="rounded-md"
                    />
                    <ImageCopy
                        title={"Automate Paperwork & Faxes"}
                        text={
                            "Our efax system supercharges your workflow with a 97% fax success rate, while our intuitive online form builder simplifies patient paperwork. Efficiently manage faxes and patient forms, freeing up time for care, not clerical work."
                        }
                    />
                </div>
            </main>
        </Container>
    )
}

export default Features2
