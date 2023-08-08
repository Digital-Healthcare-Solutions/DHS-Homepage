import { Container, Divider, Timeline, Text } from "@mantine/core"
import Link from "next/link"
import React from "react"
import ProductCarousel from "../../components/mantine-Components/productCarousels"
import ButtonPrimary from "../../components/UI-Components/button-primary"
import Image from "next/image"
import Head from "next/head"

const Features = () => {
    return (
        <div className="mt-12">
            <Head>
                <title>Product demos | Digital Healthcare Solutions</title>
                <meta
                    name="description"
                    content="Digital Healthcare Solutions is a software company that provides innovative solutions for healthcare professionals. Check out our product demos here."
                />
                <link rel="icon" href="/favicon.ico" />
                <meta name="author" content="Digital Healthcare Solutions" />
                <meta
                    name="keywords"
                    content="Digital Healthcare Solutions, Healthcare Solutions, Healthcare, Digital Healthcare, Healthcare Communication, Healthcare Communication Platform, Medical Phone System, Medical Phone, Alternative to faxing, Secure alternative to faxing medical records, Medical communication, Medical communication platform, Medical communication system, Medical communication software, Medical communication solution"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>

            <Container size="lg">
                <ProductCarousel />{" "}
            </Container>
            <Container size="md">
                <main className="my-10 text-lg tracking-wide">
                    <section id="1" className="py-5">
                        <h2
                            className="text-center sticky top-14 md:top-20 bg-white dark:bg-neutral-900
                         text-2xl lg:text-3xl pb-2"
                        >
                            Clinic-Connect <Divider className="mt-2" />
                        </h2>
                        <h1 className="text-xl pb-6 text-center">
                            Clinic-Connect is a peer to peer messaging platform
                            for healthcare professionals. It allows you to send
                            messages and referrals to other healthcare
                            professionals in realtime.
                        </h1>
                        <p className="pb-1 dark:text-gray-200">
                            When you first log in, you will see a list of chat
                            rooms that you are a part of and any new messages
                            that you have received. If you have any new connect
                            requests, you will see them here as well. You can
                            click on any of the chat rooms to enter the chat
                            room and start sending messages.
                        </p>
                        <div className="w-full pb-5">
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
                        <p className="pb-1 dark:text-gray-200">
                            Once inside the chat room, you can send a message
                            which will be received by all members of the chat
                            room instantly. Attach a file to your message by
                            clicking the paperclip icon. Any files that are
                            attached to the chat room will be available for
                            download by all members of the chat room.
                        </p>
                        <div className="w-full pb-5">
                            <Image
                                src="/demo-clinic-connect.png"
                                alt="clinic-connect-demo"
                                className="object-cover rounded-xl shadow-lg"
                                width={1000}
                                height={500}
                            />
                            <p className="flex justify-end text-xs pt-1 dark:text-gray-300 text-gray-600">
                                Inside the clinic-connect chatroom
                            </p>
                        </div>
                        <p className="pb-1 dark:text-gray-200">
                            To create a new connection with another clinic,
                            click on the pen icon in the upper left corner of
                            the screen.
                        </p>
                        <div className="w-full pb-5">
                            <Image
                                src="/create-request.png"
                                alt="clinic-connect-demo"
                                className="object-cover rounded-xl shadow-lg"
                                width={1000}
                                height={500}
                            />
                            <p className="flex justify-end text-xs pt-1 dark:text-gray-300 text-gray-600">
                                Creating a new clinic connection
                            </p>
                        </div>

                        <p className="pb-1 dark:text-gray-200">
                            You can search for clinics by business name, city,
                            state, zip, provider name, or provider specialty.
                            Once you find the clinic you are looking for, click
                            on the &quot;Send Connection Request&quot; button to
                            send the request. The other clinic will receive your
                            request and can choose to accept or deny it. If they
                            accept, you will then be able to communicate with
                            them in realtime.
                        </p>
                        <div className="w-full pb-5">
                            <Image
                                src="/clinic-connection-demo.png"
                                alt="clinic-connect-demo"
                                className="object-cover rounded-xl shadow-lg"
                                width={1000}
                                height={500}
                            />
                            <p className="flex justify-end text-xs pt-1">
                                Creating a new clinic connection
                            </p>
                        </div>
                        <p className="pb-1 dark:text-gray-300">
                            You can also create custom chatrooms with members of
                            other clinics that your clinic is connected with. To
                            create a new direct connection, click on the pen
                            icon in the upper right corner of the screen.
                        </p>
                        <div className="w-full pb-5">
                            <Image
                                src="/createDM.png"
                                alt="clinic-connect-demo"
                                className="object-cover rounded-xl shadow-lg"
                                width={1000}
                                height={500}
                            />
                            <p className="flex justify-end text-xs pt-1">
                                Creating a new direct connection
                            </p>
                        </div>
                        <p className="pb-1 dark:text-gray-300">
                            You can search for any member of any clinic that
                            your clinic is connected with. Once you find the
                            member you are looking for, click on them to add
                            them to the chatroom. You can add as many members as
                            you like. You can also give your new chatroom a
                            name. Once you are done, click the
                            &quot;Create&quot; button to create the chatroom.
                            You will then be able to send messages to all
                            members of the chatroom.
                        </p>
                        <div className="w-full pb-5">
                            <Image
                                src="/direct-connection-demo-create.jpeg"
                                alt="clinic-connect-demo"
                                className="object-cover rounded-xl shadow-lg"
                                width={1000}
                                height={500}
                            />
                            <p className="flex justify-end text-xs pt-1">
                                Creating a new direct connection
                            </p>
                        </div>

                        <p className="pb-1 dark:text-gray-300">
                            The new chatroom will only be visible to the members
                            of the chatroom. If you want to add more members to
                            the chatroom, click on the &quot;Add Members&quot;
                            button. If you want to leave the chatroom, click on
                            the &quot;Leave Chatroom&quot; button. You can
                            create as many direct connections as you need.
                        </p>
                        <div className="w-full pb-5">
                            <Image
                                src="/direct-connection-demo.png"
                                alt="clinic-connect-demo"
                                className="object-cover rounded-xl shadow-lg"
                                width={1000}
                                height={500}
                            />
                            <p className="flex justify-end text-xs pt-1">
                                Inside the direct-connection chatroom
                            </p>
                        </div>
                    </section>
                    <section id="2" className="py-5">
                        <h2
                            className="text-center sticky top-14 md:top-20 bg-white dark:bg-neutral-900
                         text-2xl lg:text-3xl pb-2"
                        >
                            IntelliCall
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
                        <h2 className="text-center sticky top-14 md:top-20 bg-white dark:bg-neutral-900 text-2xl lg:text-3xl pb-2">
                            SmartPlan
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
                        <h2 className="text-center sticky top-14 md:top-20 bg-white dark:bg-neutral-900 text-2xl lg:text-3xl pb-2">
                            SmartVoice <Divider className="mt-2" />
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
                            it later. We guarantee once you try it, you&apos;ll
                            never go back to typing notes again.
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
                        <h2 className="text-center sticky top-14 md:top-20 bg-white dark:bg-neutral-900 text-2xl lg:text-3xl pb-2">
                            SmartForm
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
                        <h2 className="text-center sticky top-14 md:top-20 bg-white dark:bg-neutral-900 text-2xl lg:text-3xl pb-2">
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
