import { Container, Divider, Timeline, Text } from "@mantine/core"
import React from "react"
import ProductCarousel from "../../components/mantine-Components/productCarousels"

const Features = () => {
    return (
        <div className="mt-12">
            {/* <h1 className="text-center text-2xl lg:text-4xl pb-10 pt-5 font-bold dark:font-normal">
                    Features
                </h1> */}
            <Container size="lg">
                <ProductCarousel />{" "}
            </Container>
            <Container size="md">
                <main className="my-10 text-lg tracking-wide">
                    <section id="1" className="py-5">
                        <h2 className="text-center text-xl lg:text-3xl pb-2">
                            Care Plans
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
                    </section>
                    <section id="2" className="py-5">
                        <h2 className="text-center text-xl lg:text-3xl pb-2">
                            AI powered dictation <Divider className="mt-2" />
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
                    </section>
                    <section id="3" className="py-5">
                        <h2 className="text-center text-xl lg:text-3xl pb-2">
                            Generate reports automatically{" "}
                            <Divider className="mt-2" />
                        </h2>
                        <p>
                            When you finish any of our care plans, a report will
                            be generated automatically. This report will be
                            saved under that patient's file and you can easily
                            access it at any time. You can also download the
                            report as a PDF or print it out if you'd like. Our
                            platform will also automatically generate a
                            Smartplan for that patient. This Smartplan will be
                            dynamically generated based on the patient's
                            answers. It will include all the scores from the
                            exams, educational materials that were discussed
                            with them during the exam, and any resources that
                            may be applicable to their situation. You can print
                            this report out and give it to your patient to take
                            home with them or send an anonymized version to them
                            via email.
                        </p>
                    </section>
                    <section id="4" className="py-5">
                        <h2 className="text-center text-xl lg:text-3xl pb-2">
                            Customize your security <Divider className="mt-2" />
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
                            in.
                        </p>
                    </section>
                    <section id="5" className="py-5">
                        <h2 className="text-center text-xl lg:text-3xl pb-2">
                            Advanced analytics <Divider className="mt-2" />
                        </h2>
                        <p>
                            We have built in advanced analytics tools that will
                            help you better understand your patients and
                            practice. These tools will help you identify trends
                            in your patient population and help you better
                            understand the factors that may be contributing to
                            their conditions.
                        </p>
                    </section>
                    <section id="6" className="py-5">
                        <h2 className="text-center text-xl lg:text-3xl pb-2">
                            Granular control over staff access{" "}
                            <Divider className="mt-2" />
                        </h2>
                        <p>
                            When you sign up for our platform, you will be given
                            an admin account. As an admin you have the ability
                            to control what each of your staff members can
                            access. You can give them access to all of your
                            patients or just a subset of them. You can also
                            invite new staff or remove existing staff members
                            from your account easily.
                        </p>
                    </section>
                </main>
            </Container>
        </div>
    )
}

export default Features
