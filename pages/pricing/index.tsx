import Link from "next/link"
import ButtonPrimary from "../../components/UI-Components/button-primary"
import { useState } from "react"
import { useRouter } from "next/router"
import ButtonSecondary from "../../components/UI-Components/button-secondary"
import { AnimatePresence, motion } from "framer-motion"
import {
    Button,
    Alert,
    Paper,
    Text,
    ThemeIcon,
    Group,
    Tooltip,
    ActionIcon
} from "@mantine/core"
import { IoAlertCircleOutline } from "react-icons/io5"
import {
    BsArrowDown,
    BsArrowDownRight,
    BsClipboardData,
    BsQuestionCircle
} from "react-icons/bs"
import {
    MdOutlineExpandLess,
    MdOutlineExpandMore,
    MdOutlinePhone
} from "react-icons/md"

const Pricing = () => {
    const router = useRouter()

    const [error, setError] = useState(null)
    const [oneTimePayment, setOneTimePayment] = useState(false)
    const [showIntellicall, setShowIntellicall] = useState(true)
    const [showSmartPlan, setShowSmartPlan] = useState(true)
    const [expandIntellicall, setExpandIntellicall] = useState(false)
    const [expandSmartPlan, setExpandSmartPlan] = useState(false)

    return (
        <section className="bg-gradient-to-b from-white to-neutral-200 dark:to-neutral-800 dark:from-neutral-900 flex justify-center items-center py-20">
            {" "}
            <div className="flex flex-col items-center  drop-shadow-lg">
                <h1 className="flex flex-col items-center mx-3">
                    {/* <div className="text-2xl w-fit md:text-4xl max-w-5xl text-center pb-10 line tracking-wide">
                    We offer a variety of plans to fit your business' needs.
                </div> */}
                    <Alert
                        icon={
                            window.innerWidth < 1024 ? (
                                ""
                            ) : (
                                <IoAlertCircleOutline size={25} />
                            )
                        }
                        title="Good news!"
                        radius="md"
                        variant="outline"
                        color="green"
                        className="py-8"
                    >
                        <h2 className="flex flex-col items-center">
                            <div className="text-xl md:text-2xl w-fit max-w-3xl text-center font-bold">
                                {/* Please use the code
                        <span className="text-green-700 dark:text-green-500 font-sans">
                            {" "}
                            BETA2023{" "}
                        </span>
                        to get 50% off your first 6 months. Or you can */}
                                <div>
                                    We are currently in beta. Contact us{" "}
                                    <Link
                                        className="text-blue-500  hover:underline"
                                        href="/#contact"
                                    >
                                        here
                                    </Link>{" "}
                                    to talk to one of our sales reps to get a
                                    beta discount code.
                                </div>
                            </div>
                            {/* <Paper
                                withBorder
                                p="md"
                                radius="md"
                                className="mt-5"
                            >
                                <Group position="apart">
                                    <div>
                                        <Text
                                            color="dimmed"
                                            transform="uppercase"
                                            weight={700}
                                            size="xs"
                                        >
                                            Positions left:{"  "}
                                        </Text>
                                        <Text weight={700} size="xl">
                                            4
                                        </Text>
                                    </div>
                                    <ThemeIcon
                                        color="gray"
                                        variant="light"
                                        size={38}
                                        radius="md"
                                    >
                                        <BsArrowDownRight
                                            className="text-red-500"
                                            size={28}
                                        />
                                    </ThemeIcon>
                                </Group>
                                <Text color="dimmed" size="sm" mt="md">
                                    <Text
                                        component="span"
                                        color={"red"}
                                        weight={700}
                                    >
                                        -20%
                                    </Text>{" "}
                                    decreased from previous
                                </Text>
                            </Paper> */}
                        </h2>
                    </Alert>
                </h1>

                <article className="flex flex-col lg:flex-row w-5/6 xl:w-3/4 text-white  mt-10">
                    <section className="bg-[#3b82f6] rounded-xl p-6 xl:p-12 text-base m-2 w-full lg:w-1/3 drop-shadow-menu">
                        <h1 className="text-3xl font-sans font-medium pb-4">
                            Base Plan
                        </h1>
                        <p>
                            {" "}
                            We believe in a more connected healthcare system.
                            That&apos;s why all clinics can sign up for free
                            access to Clinic-Connect.
                        </p>
                        <div className="py-4 mb-2 flex flex-row items-center">
                            <span className="text-3xl pr-1 font-sans font-bold">
                                FREE
                            </span>
                        </div>
                        <button
                            onClick={() =>
                                router.push(
                                    "https://app.digitalhealthcaresolutions.io/login"
                                )
                            }
                            className="bg-white text-[#3b82f6] hover:bg-[#e9e9ead2] w-full font-bold ring-1 ring-blue-500 py-2 rounded-md"
                        >
                            Get Started today
                        </button>
                        <div className="pt-3">
                            <p className="pb-1">This plan includes:</p>
                            <ul className="list-disc pl-4">
                                <li>
                                    Access to Clinic-Connect (limited features)
                                </li>
                                <li>Unlimited chatrooms</li>
                                <li>
                                    1 admin account (can create 2 additional
                                    staff accounts)
                                </li>
                                <li>
                                    Up to 3 doctors listed under your clinic
                                </li>{" "}
                            </ul>
                        </div>
                    </section>
                    <section className="bg-[#3b83f6] bg- rounded-xl p-6 xl:p-12 text-base m-2 w-full lg:w-1/3 drop-shadow-menu">
                        <h1 className="text-3xl font-sans font-medium pb-4">
                            Premium Plan
                        </h1>
                        <p>
                            Our Premium plan expands on the features of
                            Clinic-Connect as well as giving you access to our
                            dictation tool and e-paperwork.
                        </p>
                        <div className="py-4 mb-2 flex flex-row items-center">
                            <span className="text-3xl pr-1 font-sans font-bold">
                                $100
                            </span>
                            <span className="flex flex-col text-xs">
                                <div>per</div>
                                <div>month</div>{" "}
                            </span>
                        </div>
                        <button
                            onClick={() =>
                                router.push(
                                    "https://app.digitalhealthcaresolutions.io/login"
                                )
                            }
                            className="bg-white text-[#3b82f6] hover:bg-[#e9e9ead2] w-full font-bold ring-1 ring-blue-500 py-2 rounded-md"
                        >
                            Get Started today
                        </button>
                        <div className="pt-3">
                            <p className="pb-1">This plan includes:</p>
                            <ul className="list-disc pl-4">
                                <li>Everything included in the free plan</li>
                                <li>
                                    Extra features of Clinic-Connect (custom
                                    clinic branding, custom referral forms,
                                    scanner access, Ava (AI assistant), phone
                                    and video chat with other clinics and more)
                                </li>
                                <li>Unlimited staff accounts</li>
                                <li>
                                    Up to 10 doctors listed under your clinic
                                </li>{" "}
                                <li>Unlimited access to our dictation tool</li>
                                <li>
                                    Access to SmartForm (our
                                    e-paperwork/registration tool)
                                </li>
                            </ul>
                        </div>
                    </section>
                    <article className="flex flex-col w-full lg:w-1/3">
                        <h1 className="text-2xl font-sans font-medium pb-3 text-center dark:text-neutral-200 text-neutral-700 underline underline-offset-8">
                            Add-ons
                        </h1>
                        <section className="bg-[#3b82f6] rounded-xl p-3 text-sm m-2 drop-shadow-menu">
                            <section>
                                <h2 className="text-3xl font-sans font-medium pb-2 flex justify-center items-center">
                                    Intellicall{" "}
                                    <MdOutlinePhone
                                        size={30}
                                        className="ml-2"
                                    />
                                </h2>
                                <AnimatePresence>
                                    {showIntellicall && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{
                                                opacity: 1,
                                                height: "auto"
                                            }}
                                            exit={{ opacity: 0, height: 0 }}
                                        >
                                            <h4 className="text-lg text-center pb-2">
                                                Real-time patient communication
                                            </h4>
                                            <div>
                                                Intellicall supercharges your
                                                current phone system by
                                                transcribing voicemails into
                                                text, displaying them in a user
                                                friendly interface and allowing
                                                you to text patients back from
                                                your clinic phone number. This
                                                powerful add-on will save your
                                                staff time, help you improve
                                                no-show rates and improve
                                                patient satisfaction by allowing
                                                them to communicate with your
                                                clinic the way they prefer.{" "}
                                            </div>{" "}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                                <div className="flex flex-row items-center justify-end mt-1">
                                    <ButtonSecondary
                                        onClick={() => {
                                            setExpandIntellicall(
                                                !expandIntellicall
                                            )
                                            setExpandSmartPlan(false)
                                            setShowSmartPlan(!showSmartPlan)
                                            setShowIntellicall(true)
                                        }}
                                        className="hover:bg-blue-600"
                                    >
                                        {expandIntellicall
                                            ? "Hide"
                                            : "Read More"}
                                        {expandIntellicall ? (
                                            <MdOutlineExpandLess />
                                        ) : (
                                            <MdOutlineExpandMore />
                                        )}
                                    </ButtonSecondary>
                                </div>

                                <AnimatePresence>
                                    {expandIntellicall && (
                                        <motion.section
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{
                                                opacity: 1,
                                                height: "auto"
                                            }}
                                            exit={{ opacity: 0, height: 0 }}
                                        >
                                            <div>
                                                <p className="pb-1">
                                                    This add-on includes:
                                                </p>
                                                <ul className="list-disc pl-4">
                                                    <li>
                                                        Easily read voicemails
                                                        and respond to patients
                                                        via text
                                                    </li>
                                                    <li>
                                                        Call forwarding to your
                                                        clinic phone number
                                                    </li>
                                                    <li>
                                                        Call patients back right
                                                        from the app
                                                    </li>
                                                    <li>
                                                        Messages are categorized
                                                        by call type and can be
                                                        searched
                                                    </li>
                                                    <li>
                                                        Ava (our AI assistant)
                                                        helps your staff answer
                                                        common medical questions
                                                        and can be trained to
                                                        answer questions
                                                        specific to your clinic
                                                    </li>
                                                    <li>
                                                        A variety of additional
                                                        settings to customize
                                                        your phone system
                                                    </li>
                                                </ul>{" "}
                                                <div className="flex justify-start items-center">
                                                    Intellicall pricing is based
                                                    on usage.{" "}
                                                    <Tooltip
                                                        label='Our pricing is based on usage "tokens". Token usage is broken down as follows: Each text message sent or received counts as 0.33 tokens (2.5 cents), caller name lookups (new callers) are 0.13 tokens (1 cent) and every 1 minute of phone calls made or received count as 1 token (7.5 cents). Each token is billed as $0.075 for the first 2500 tokens, $0.07 for tokens 2500-5000 and $0.065 for each token after that. For example, if you send 200 text  messages and make 500 minutes of phone calls with 150 callers, you would be billed $57.45 ($0.075 x 200 x 0.33 + $0.075 x 500 + 0.01 x 150).'
                                                        // transition="slide-down"
                                                        position="bottom"
                                                        multiline
                                                        width={220}
                                                        withArrow
                                                        events={{
                                                            hover: true,
                                                            focus: true,
                                                            touch: true
                                                        }}
                                                    >
                                                        <ActionIcon className="text-xl text-white hover:bg-blue-100  hover:bg-opacity-10 flex justify-center rounded-md ml-2">
                                                            <BsQuestionCircle />
                                                        </ActionIcon>
                                                    </Tooltip>
                                                </div>
                                            </div>
                                        </motion.section>
                                    )}
                                </AnimatePresence>
                            </section>
                        </section>
                        <section className="bg-[#3b82f6] rounded-xl p-3 text-sm m-2 drop-shadow-menu">
                            <div className="text-3xl font-sans font-medium pb-3 flex justify-center items-center">
                                SmartPlan
                                <BsClipboardData size={28} className="ml-2" />
                            </div>

                            <AnimatePresence>
                                {showSmartPlan && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                    >
                                        {" "}
                                        <h4 className="text-lg text-center pb-2">
                                            Chronic care management made easy
                                        </h4>
                                        <div>
                                            SmartPlan is a simple way to manage
                                            your chronic care patients and get
                                            reimbursed for the work you are
                                            already doing. SmartPlan does all
                                            the work for you, from tracking time
                                            spent on chronic care management to
                                            generating the billing codes you
                                            need to get paid.
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <div className="flex flex-row items-center justify-end mt-1 ">
                                <ButtonSecondary
                                    onClick={() => {
                                        setExpandIntellicall(false)
                                        setExpandSmartPlan(!expandSmartPlan)
                                        setShowSmartPlan(true)
                                        setShowIntellicall(!showIntellicall)
                                    }}
                                    className="hover:bg-blue-600"
                                >
                                    {expandSmartPlan ? "Hide" : "Read More"}
                                    {expandSmartPlan ? (
                                        <MdOutlineExpandLess />
                                    ) : (
                                        <MdOutlineExpandMore />
                                    )}
                                </ButtonSecondary>
                            </div>
                            <AnimatePresence>
                                {expandSmartPlan && (
                                    <motion.section
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                    >
                                        {" "}
                                        <div>
                                            <p className="pb-1">
                                                This add-on includes:
                                            </p>
                                            <ul className="list-disc pl-4">
                                                <li>
                                                    Care plans for 20+ chronic
                                                    conditions including
                                                    Dementia, Parkinson&apos;s,
                                                    Migraines, Annual Wellness
                                                    Visits, Diabetes, COPD, CHF
                                                    and more
                                                </li>
                                                <li>
                                                    Automatically generate a
                                                    report to submit for for
                                                    reimbursement
                                                </li>
                                                <li>
                                                    Automatically generate a
                                                    patient handout
                                                </li>
                                                <li>
                                                    Auto flag medications that
                                                    may be causing side effects
                                                </li>
                                                <li>
                                                    Automatically flag
                                                    conditions that require
                                                    additional attention such as
                                                    suicidal ideation,
                                                    depression, falling often,
                                                    driving ability, and more
                                                </li>

                                                <li>
                                                    Ability to send
                                                    questionaires to patients to
                                                    answer before their
                                                    appointment
                                                </li>
                                                <li>
                                                    Automatically remind you
                                                    when patient is due for a
                                                    follow-up care plan
                                                </li>
                                            </ul>
                                            <div className="flex items-center justify-start py-1">
                                                SmartPlan is billed as a monthly
                                                subscription
                                                <Tooltip
                                                    label='"We charge $300 per month per practice. This includes unlimited care plans for all providers in each practice'
                                                    position="bottom"
                                                    multiline
                                                    width={220}
                                                    withArrow
                                                    events={{
                                                        hover: true,
                                                        focus: true,
                                                        touch: true
                                                    }}
                                                >
                                                    <ActionIcon className="text-xl text-white hover:bg-blue-100  hover:bg-opacity-10 flex justify-center rounded-md ml-2">
                                                        <BsQuestionCircle />
                                                    </ActionIcon>
                                                </Tooltip>
                                            </div>
                                        </div>
                                    </motion.section>
                                )}
                            </AnimatePresence>
                        </section>
                    </article>
                </article>
            </div>
        </section>
    )
}

export default Pricing
