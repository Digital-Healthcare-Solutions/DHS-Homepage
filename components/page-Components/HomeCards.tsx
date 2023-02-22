import { RiComputerLine } from "react-icons/ri"
import { TfiBook } from "react-icons/tfi"
import { BsCloudCheck } from "react-icons/bs"
import CardHome from "../mantine-Components/cardHomepage"

export default function HomeCards() {
    return (
        <section className="flex flex-col maxMd:items-center md:flex-row justify-around px-4 gap-4 pb-10 bg-gradient-to-b from-blue-50 to-blue-50 dark:from-neutral-800 dark:to-neutral-800">
            <CardHome
                icon={<RiComputerLine size={25} />}
                title="Our Product"
                p1Text={
                    " A care plan is a CPT code, and allows practitioners to provide detailed and comprehensive plans of care on a wide variety of patients without having to be directly involved in the assessment."
                }
                p2Text1={"Visit our"}
                p2Href="/product"
                p2HrefText="product"
                p2Text2={"page for more information."}
            />
            <CardHome
                icon={<TfiBook size={25} />}
                title="Our Story"
                p1Text={
                    "We are a family run business with two generations of medical experience. We developed SmartPlan to solve a specific need for us and we hope to solve those same needs for your practice."
                }
                p2Text1={"You can read more on the"}
                p2Href="/about-us"
                p2HrefText="about us"
                p2Text2={"page."}
            />
            <CardHome
                icon={<BsCloudCheck size={25} />}
                title="Security"
                p1Text={
                    "You can rest easy knowing your patient information is safe with us. We recently passed our HIPPA compliant audit by Compliancy Group."
                }
                p2Text1={"Click"}
                p2Href="https://smart-plan.io"
                p2HrefText="here"
                p2Text2={"to see our badge."}
            />
        </section>
    )
}
