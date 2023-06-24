import { Container, Divider, Timeline, Text } from "@mantine/core"
import Link from "next/link"
import React from "react"
import ProductCarousel from "../../components/mantine-Components/productCarousels"
import ButtonPrimary from "../../components/UI-Components/button-primary"
import Image from "next/image"

const Features = () => {
    return (
        <div className="mt-12">
            <Container size="lg">
                <ProductCarousel />{" "}
            </Container>
            <Container size="md">
                <main className="my-10 text-lg tracking-wide">
                    <section id="1" className="py-5">
                        <h2 className="text-center text-2xl lg:text-3xl pb-2">
                            Clinic-Connect <Divider className="mt-2" />
                        </h2>
                        <p>
                            Clinic-Connect is a peer to peer messaging platform
                            for healthcare professionals. It allows you to send
                            messages and referrals to other healthcare
                            professionals in realtime.
                        </p>
                        <div className="w-full">
                            <Image
                                src="/clinic-connect-home.jpeg"
                                alt="clinic-connect"
                                className="object-cover rounded-xl shadow-lg"
                                width={1000}
                                height={500}
                            />
                            <p className="flex justify-end text-xs pt-1">
                                Clinic-Connect home page
                            </p>
                        </div>
                        <p>
                            You can click on any of the chat rooms to enter the
                            chat room and start sending messages.
                        </p>
                    </section>
                    <section id="2" className="py-5">
                        <h2 className="text-center text-2xl lg:text-3xl pb-2">
                            AI powered call center (IntelliCall){" "}
                            <Divider className="mt-2" />
                        </h2>
                        <p>
                            Our Intelligent call center integrates with your
                            existing phone system and is as flexible as you need
                            it to be. When someone calls and leaves a voicemail,
                            first our system will automatically transcribe the
                            call to text, then it will use intelligent lookup to
                            determine the caller ID, caller phone type (mobile,
                            landline, etc..), and whether the caller is a
                            business or a consumer. After that, it will gather
                            the sentiment of the message and assign the message
                            to one of 8 labels. You can filter and sort the
                            messages to your applicable personal by these
                            labels. If the transcription is a little rough or
                            hard to understand, we allow you to listen to the
                            voicemail right in our app. After you're done, you
                            can conviently text the patient back (if they have a
                            mobile phone) or call them back right from your
                            browser.
                        </p>
                        <br />
                        <p>
                            Our system is also configurable to your needs. You
                            can choose your own greeting message that will be
                            read to the calling party if they do not get an
                            answer. You can also choose whether to call your
                            existing number first (so that someone will have a
                            chance to answer) or to immediately go to voicemail
                            transcription (this setting may be useful when you
                            are not in the office). We also have a useful AI
                            assisstant that can help you answer common medical
                            questions automatically. You can configure the
                            optimization settings to be more catered to
                            answering lab questions, medication questions, or
                            general medical questions.
                        </p>
                        {/* <div className="flex flex-col items-center justify-center py-8">
                            <h2 className="pb-5">
                                <Text size="xl" weight={700}>
                                    Watch Demo
                                </Text>
                            </h2>
                            <iframe
                                allow="autoplay;"
                                allowFullScreen
                                src="https://clipchamp.com/watch/KTGDfgZIhA6/embed"
                                className="w-full h-48 md:h-64 lg:h-96"
                            ></iframe>
                        </div> */}
                    </section>
                    <section id="3" className="py-5">
                        <h2 className="text-center text-2xl lg:text-3xl pb-2">
                            Chronic care management (SmartPlan)
                            <Divider className="mt-2" />
                        </h2>
                        <p>
                            Each care plan is designed to be a comprehensive
                            test for a specific condition. The care plan
                            includes a review of the patient&apos;s medical
                            history and current medications, a review of the
                            patient&apos;s current symptoms, a mental health
                            screening, a review of the patient&apos;s current
                            diet, and a review of some environmental factors
                            that may be contributing to the patient&apos;s
                            condition. The care plan also gives you a
                            recommended follow up time for the patient.
                        </p>
                        <br />
                        <p>
                            The goal of the care plan is to provide a roadmap
                            for the patient's care team to follow, with clear
                            steps and goals to help the patient achieve optimal
                            health outcomes. Regular monitoring and adjustment
                            of the care plan may be necessary to ensure that the
                            patient's needs are being met and that the treatment
                            approach remains effective over time.
                        </p>
                        <br />
                        <p>
                            Our software will automatically generate a concise
                            report for you as well as a detailed report for you
                            to give your patient before they leave. The report
                            will include a summary of the patient's condition, a
                            list of all questionaires performed and scores, a
                            list of recommended supplements, diet, lifestyle
                            changes, and 3 actionable, measurable, time based
                            goals for the patient to work on.
                        </p>
                    </section>
                    <section id="4" className="py-5">
                        <h2 className="text-center text-2xl lg:text-3xl pb-2">
                            Dictation (SmartVoice) <Divider className="mt-2" />
                        </h2>
                        <p>
                            Our AI powered dictation tool will transcribe your
                            audio into text quickly and accurately. It can
                            transcribe complex phrases, filter background noise,
                            accurately puncuate sentences, automatically remove
                            pauses and &quot;umms&quot; from statements, and
                            even translate other langauges to English. The model
                            has been custom trained to transcribe medical
                            terminology so you can be sure that your notes are
                            accurate. After you're done, you can save your
                            transcription to your notes so you can easily reuse
                            it later. We guarantee once you try it, you'll never
                            want to go back to Dragon again.
                        </p>
                        <div className="flex justify-center">
                            <Link href="/product/smart-voice">
                                <ButtonPrimary
                                    className="mt-5"
                                    onClick={() => {
                                        console.log("")
                                    }}
                                >
                                    Try it out
                                </ButtonPrimary>
                            </Link>
                        </div>

                        {/* <div className="flex flex-col items-center justify-center py-8">
                            <h2 className="pb-5">
                                <Text size="xl" weight={700}>
                                    Watch Demo
                                </Text>
                            </h2>
                            <iframe
                                allow="autoplay;"
                                allowFullScreen
                                src="https://clipchamp.com/watch/L5kmptIntkY/embed"
                                className="w-full h-48 md:h-64 lg:h-96"
                            ></iframe>
                        </div> */}
                    </section>
                    <section id="5" className="py-5">
                        <h2 className="text-center text-2xl lg:text-3xl pb-2">
                            Paperless Registration (SmartForm)
                            <Divider className="mt-2" />
                        </h2>
                        <p>
                            We have several different forms that you can use to
                            collect patient information. You can choose between
                            a full registration form that collects all of the
                            information you need to register a new patient and a
                            HRA (Health Risk Assessment) form that collects
                            information about the patient's current health risk
                            factors. Patient's will sign a consent form
                            electronically that is assigned to your practice.
                            After the patient fills out the form, you can view
                            the information in your dashboard and download the
                            information as a PDF or print it out.
                        </p>
                    </section>
                    <section id="6" className="py-5">
                        <h2 className="text-center text-2xl lg:text-3xl pb-2">
                            Security and Compliance <Divider className="mt-2" />
                        </h2>
                        <p>
                            We understand that every practice is different and
                            that you may have specific security requirements.
                            That's why we've built our platform to be
                            customizable but still extremely secure. You can
                            choose how far away from your practice you want your
                            users to be able to log in from. You can also choose
                            whether to allow VPN access or not on your account.
                            We utilize password hashing and salting algorithms
                            to make sure that your data is secure. We also have
                            industry standard password requirements to keep your
                            patient data safe. We have a built in two factor
                            authentication system that will send you a text
                            message with a code every time someone tries to log
                            in. We recently received HIPPA compliance status by
                            Compliancy Group. You can view our compliance
                            certificate{" "}
                            <a
                                href="https://app.digitalhealthcaresolutions.io/login"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="text-blue-500 hover:underline"
                            >
                                here.
                            </a>
                        </p>
                    </section>
                </main>
            </Container>
        </div>
    )
}

export default Features
