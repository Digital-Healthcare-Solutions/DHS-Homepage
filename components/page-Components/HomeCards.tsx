import { RiComputerLine } from "react-icons/ri"
import { TfiBook } from "react-icons/tfi"
import { MdOutlineLightbulb } from "react-icons/md"
import CardHome from "../mantine-Components/cardHomepage"
import { BackgroundGradient } from "../ui/background-gradient"

export default function HomeCards() {
    return (
        <section className="flex flex-col items-center lg:items-start lg:flex-row justify-around px-4 gap-10 lg:gap-8 pb-10  bg-white dark:bg-neutral-900 ">
            <BackgroundGradient
                animate={true}
                className="rounded-[22px] bg-white dark:bg-neutral-900 p-2"
            >
                <CardHome
                    icon={<RiComputerLine size={25} />}
                    title="Our Product"
                    p1Text={
                        "Wether you are a small or large practice, we have a solution that will fit your needs. We offer a full suite of products to help you manage your practice and your patients."
                    }
                    p2Text1={"Visit our"}
                    p2Href="/pricing"
                    p2HrefText="pricing"
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
                    icon={<TfiBook size={25} />}
                    title="Our Story"
                    p1Text={
                        "We are a team of healthcare professionals and software engineers who are passionate about improving the healthcare industry. Our mission is to provide the best tools and resources to help you run your practice more efficiently."
                    }
                    p2Text1={"Read more"}
                    p2Href="/about"
                    p2HrefText="about us"
                    p2Text2={"and our mission."}
                />
            </BackgroundGradient>
            <BackgroundGradient
                animate={true}
                className="rounded-[22px] bg-white dark:bg-neutral-900 p-2"
            >
                <CardHome
                    icon={<MdOutlineLightbulb size={25} />}
                    title="Learn more"
                    p1Text={
                        "If you are interested in learning more about our products or how to implement it in your practice, you can read some of our blog posts. If you have any questions, feel free to contact us using the form below."
                    }
                    p2Text1={"Click"}
                    p2Href="/blog"
                    p2HrefText="here"
                    p2Text2={"to see some of our featured blog posts."}
                />
            </BackgroundGradient>
        </section>
    )
}
