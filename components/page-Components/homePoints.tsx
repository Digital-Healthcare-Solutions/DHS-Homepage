import { Container, ThemeIcon } from "@mantine/core"
import { AiOutlineCloudUpload } from "react-icons/ai"
import { RxCircleBackslash } from "react-icons/rx"
import { BiCheckShield } from "react-icons/bi"

const points = [
    {
        icon: AiOutlineCloudUpload,
        title: "Access anywhere",
        description:
            "Our web app is cloud based and can be accessed from anywhere. No need to download any annoying installers, just log in and you're ready to go."
    },

    {
        icon: BiCheckShield,
        title: "Secure by default",
        description:
            "We utilize encryption algorithms in everything we do to ensure that your patient's data is always safe and secure. We have a HIPAA compliant database, server, and hosting provider and require 2FA everytime for all of our users."
    },
    {
        icon: RxCircleBackslash,
        title: "No limits",
        description:
            "We don't limit the number of patients you can bill CCMs for, the number of calls you can make, or the amount of data that flows through our system. Pay one monthly fee and you're good to go."
    }
]

const HomePoints = () => {
    return (
        <Container
            size="lg"
            className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:gap-8 gap-20 mb-12 mt-14  rounded-xl px-6 pb-8"
        >
            {points.map((point) => (
                <div className="flex flex-col items-center gap-4 lg:w-1/3">
                    <ThemeIcon variant="light" size={40} radius={40}>
                        <point.icon size={20} stroke={"1.5"} />
                    </ThemeIcon>
                    <h3 className="text-2xl font-bold">{point.title}</h3>
                    <p className="text-center">{point.description}</p>
                </div>
            ))}
        </Container>
    )
}

export default HomePoints
