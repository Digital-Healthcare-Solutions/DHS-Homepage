import { RiArrowRightUpLine, RiComputerLine } from "react-icons/ri"
import { TfiBook } from "react-icons/tfi"
import { MdOutlineLightbulb, MdPhone, MdUploadFile } from "react-icons/md"
import CardHome from "../mantine-Components/cardHomepage"
import { BackgroundGradient } from "../ui/background-gradient"
import { GrOptimize } from "react-icons/gr"

export default function HomeCards() {
    return (
        <section className="flex flex-col items-center lg:items-start lg:flex-row justify-around px-4 gap-10 lg:gap-8 pb-10  bg-white dark:bg-neutral-900 ">
            <BackgroundGradient
                animate={true}
                className="rounded-[22px] bg-white dark:bg-neutral-900 p-2"
            >
                <CardHome
                    icon={<GrOptimize size={50} />}
                    title="Optimize your practice"
                    p1Text={
                        "Streamline front desk operations with automations that help practices save time and see more patients."
                    }
                    p2Text1={"Visit our"}
                    p2Href="/pricing#pricing-table"
                    p2HrefText="Learn more"
                    p2Text2={
                        "page for more information on our products and pricing."
                    }
                />
            </BackgroundGradient>
            <BackgroundGradient
                animate={true}
                className="rounded-[22px] bg-white dark:bg-neutral-900 p-2"
            >
                <CardHome
                    icon={<MdUploadFile size={50} />}
                    title="Automate patient intake"
                    p1Text={
                        "Enhance data accuracy and save your team's valuable time by pre-sending digital intake forms to patients before their appointment."
                    }
                    p2Text1={"Read more"}
                    p2Href="/pricing#pricing-table"
                    p2HrefText="Learn more"
                    p2Text2={"and our mission."}
                />
            </BackgroundGradient>
            <BackgroundGradient
                animate={true}
                className="rounded-[22px] bg-white dark:bg-neutral-900 p-2"
            >
                <CardHome
                    icon={<MdPhone size={50} />}
                    title="Elevate patient experience"
                    p1Text={
                        "No more missed calls, voicemails, or phone tag. Give patients different communication options to make their experience more enjoyable."
                    }
                    p2Text1={"Click"}
                    p2Href="/pricing#pricing-table"
                    p2HrefText="Learn more"
                    p2Text2={"to see some of our featured blog posts."}
                />
            </BackgroundGradient>
        </section>
    )
}
