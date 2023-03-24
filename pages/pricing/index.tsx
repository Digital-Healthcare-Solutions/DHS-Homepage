import Link from "next/link"
import ButtonPrimary from "../../components/UI-Components/button-primary"
import { useState } from "react"
import { useRouter } from "next/router"
import ButtonSecondary from "../../components/UI-Components/button-secondary"
import { motion } from "framer-motion"
import { Button, Alert, Paper, Text, ThemeIcon, Group } from "@mantine/core"
import { IoAlertCircleOutline } from "react-icons/io5"
import { BsArrowDownRight } from "react-icons/bs"

const Pricing = () => {
    const router = useRouter()

    const [error, setError] = useState(null)
    const [oneTimePayment, setOneTimePayment] = useState(false)

    return (
        <section className="bg-gradient-to-b from-white to-neutral-200 dark:to-neutral-800 dark:from-neutral-900 flex justify-center items-center py-20">
            {" "}
            <div className="flex flex-col items-center  drop-shadow-lg">
                <h1 className="flex flex-col items-center mx-3">
                    <div className="text-2xl w-fit md:text-4xl max-w-5xl text-center pb-10 line tracking-wide">
                        We offer a variety of plans to fit your business' needs.
                    </div>
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
                                    If you you would like to be part of our
                                    closed beta program to get free testing
                                    access to our platform for a limited time.
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

                    {/* <Paper
                        withBorder
                        className="p-4 mt-4 flex flex-row w-80 justify-between items-center"
                    >
                        <Text size="xl" weight={700}>
                            Number of positions left:{"  "}
                        </Text>
                        <Text className="text-red-500" size="xl">
                            4
                        </Text>{" "}
                        <BsArrowDown size={20} className="text-red-500 mr-1" />
                    </Paper> */}
                </h1>
                <article className="flex flex-row justify-center items-center mb-4 mt-10">
                    <Button
                        onClick={() => setOneTimePayment(false)}
                        variant={oneTimePayment ? "light" : "filled"}
                        className={
                            oneTimePayment
                                ? "bg-neutral-400 opacity-75 text-black dark:hover:bg-blue-100 dark:bg-blue-200  hover:bg-neutral-200 hover:opacity-100"
                                : "text-black  bg-white font-bold hover:bg-white "
                        }
                    >
                        Monthly
                    </Button>
                    <Button
                        onClick={() => setOneTimePayment(true)}
                        variant={oneTimePayment ? "filled" : "light"}
                        className={
                            oneTimePayment
                                ? "text-black  bg-white font-bold hover:bg-white "
                                : "bg-neutral-400 opacity-75 text-black dark:hover:bg-blue-100 dark:bg-blue-200  hover:bg-neutral-200 hover:opacity-100"
                        }
                    >
                        Yearly
                    </Button>
                </article>
                {oneTimePayment ? (
                    <article className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                        <section className="bg-white dark:bg-[#3b83f6] rounded-xl p-8 text-sm md:text-base m-2 max-w-[270px] xs:max-w-[325px] sm:max-w-[400px] drop-shadow-menu border-2 border-blue-500 text-neutral-800 dark:text-neutral-100 font-sans">
                            {" "}
                            <h1 className="text-2xl font-sans font-medium pb-4">
                                Base Plan
                            </h1>
                            <p>
                                Our base plan is for small clinics with 1
                                Provider and a few staff members who will be
                                administering a relatively low number of tests.
                            </p>
                            <div className="py-4 mb-2 flex flex-row items-center">
                                <span className="text-3xl pr-1 font-sans font-bold">
                                    $0
                                </span>
                                <span className="flex flex-col text-xs">
                                    <div>per</div>
                                    <div>year</div>{" "}
                                </span>
                            </div>
                            <ButtonSecondary
                                onClick={() =>
                                    router.push("https://smart-plan.io")
                                }
                                className="bg-white text-[#3b82f6] hover:bg-[#e9e9ead2] w-full font-bold ring-1 ring-blue-500 "
                            >
                                Get Started today
                            </ButtonSecondary>
                            <div className="pt-3">
                                <p className="pb-1">This plan includes:</p>
                                <ul className="list-disc pl-4">
                                    {/* <li className="py-1">20 patient tests per billing cycle</li> */}
                                    <li>1 Provider/Admin account</li>
                                    <li className="py-1">
                                        Able to create 1 additional staff
                                        account
                                    </li>
                                    <li>Access to our dementia care plan</li>
                                    <li>
                                        Unlimited access to our AI dictation
                                        tool
                                    </li>{" "}
                                    <li>
                                        Complete just 1 test per month and it
                                        pays for itself
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section className="bg-white dark:bg-[#3b83f6]  bg- rounded-xl pb-8 pl-8 pr-8 pt-4 text-sm md:text-base m-2  max-w-[270px] xs:max-w-[325px]  sm:max-w-[400px] drop-shadow-menu  border-2 border-blue-500 text-neutral-800 dark:text-neutral-100 font-sans">
                            <div className="text-xs mb-2 bg-gradient-to-r from-yellow-200 to-yellow-500 dark:from-neutral-100 dark:to-yellow-500 p-[3px] text-center w-28 rounded text-black font-bold tracking-wide animate-shine">
                                Our best deal !
                            </div>
                            <h1 className="text-2xl font-sans font-medium pb-4">
                                Premium Plan
                            </h1>
                            <p>
                                Our Premium plan is for medium sized clinics
                                that require increased testing capabilities and
                                more staff member access.
                            </p>
                            <div className="py-2 mb-2 flex flex-row items-center">
                                <span className="text-3xl pr-1 font-sans font-bold">
                                    $0
                                </span>
                                <span className="flex flex-col text-xs">
                                    <div>per</div>
                                    <div>year</div>{" "}
                                </span>
                            </div>
                            <ButtonSecondary
                                onClick={() =>
                                    router.push("https://smart-plan.io")
                                }
                                className="bg-white text-[#3b82f6] hover:bg-[#e9e9ead2] w-full font-bold ring-1 ring-blue-500 "
                            >
                                Get Started today
                            </ButtonSecondary>
                            <div className="pt-3">
                                <p className="pb-1">This plan includes:</p>
                                <ul className="list-disc pl-4">
                                    {/* <li className="py-1">50 patient tests per billing cycle</li> */}
                                    <li>1 Provider/Admin account</li>
                                    <li className="py-1">
                                        Create 4 additional Staff accounts
                                    </li>
                                    <li>Access to all of our care plans</li>
                                    <li>
                                        Unlimited access to our AI dictation
                                        tool
                                    </li>{" "}
                                </ul>
                            </div>
                        </section>
                        <section className="bg-white dark:bg-[#3b83f6] rounded-xl p-8 text-sm md:text-base m-2 max-w-[270px] xs:max-w-[325px]  sm:max-w-[400px] drop-shadow-menu border-2 border-blue-500 text-neutral-800 dark:text-neutral-100 font-sans">
                            <h1 className="text-2xl font-sans font-medium pb-4">
                                Enterprise Plan
                            </h1>
                            <p>
                                Our Enterprise plan is for large organizations
                                who require a larger amount of staff access and
                                custom solutions.
                            </p>
                            <div className="py-2 flex flex-row items-center">
                                <div className="flex flex-row items-end">
                                    {" "}
                                    <span className="text-3xl pr-1 font-sans font-bold">
                                        <span className="text-sm flex flex-col justify-center">
                                            starting at
                                        </span>
                                        {"   "}
                                        $0
                                    </span>
                                    <span className="flex flex-col text-xs">
                                        <div>per</div>
                                        <div>year</div>{" "}
                                    </span>
                                </div>
                            </div>
                            <ButtonSecondary
                                onClick={() =>
                                    router.push("https://smart-plan.io")
                                }
                                className="bg-white text-[#3b82f6] hover:bg-[#e9e9ead2] w-full font-bold ring-1 ring-blue-500 "
                            >
                                Get Started today
                            </ButtonSecondary>
                            <div className="pt-3">
                                <p className="pb-1">This plan includes:</p>
                                <ul className="list-disc pl-4">
                                    <li>
                                        Can contact us to create extra admin
                                        accounts
                                    </li>
                                    <li className="py-1">
                                        Unlimited Staff Members
                                    </li>
                                    <li>
                                        Unlimited access to our AI dictation
                                        tool
                                    </li>{" "}
                                    <li>Access to all of our care plans</li>
                                    <li>
                                        We can create custom care plans for your
                                        practice to use on request
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </article>
                ) : (
                    <article className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                        <section className="bg-white dark:bg-[#3b83f6] rounded-xl p-8 text-sm md:text-base m-2  max-w-[270px] xs:max-w-[325px] sm:max-w-[400px] drop-shadow-menu border-2 border-blue-500 text-neutral-800 dark:text-neutral-100 font-sans">
                            <h1 className="text-2xl font-sans font-medium pb-4">
                                Base Plan
                            </h1>
                            <p>
                                Our base plan is for small clinics with 1
                                Provider and a few staff members who will be
                                administering a relatively low number of tests.
                            </p>
                            <div className="py-4 mb-2 flex flex-row items-center">
                                <span className="text-3xl pr-1 font-sans font-bold">
                                    $0
                                </span>
                                <span className="flex flex-col text-xs">
                                    <div>per</div>
                                    <div>month</div>{" "}
                                </span>
                            </div>
                            <ButtonSecondary
                                onClick={() =>
                                    router.push("https://smart-plan.io")
                                }
                                className="bg-white text-[#3b82f6] hover:bg-[#e9e9ead2] w-full font-bold ring-1 ring-blue-500 "
                            >
                                Get Started today
                            </ButtonSecondary>
                            <div className="pt-3">
                                <p className="pb-1">This plan includes:</p>
                                <ul className="list-disc pl-4">
                                    {/* <li className="py-1">20 patient tests per billing cycle</li> */}
                                    <li>1 Provider/Admin account</li>
                                    <li className="py-1">
                                        Able to create 1 additional staff
                                        account
                                    </li>
                                    <li>Access to our dementia care plan</li>
                                    <li>
                                        Unlimited access to our AI dictation
                                        tool
                                    </li>{" "}
                                    <li>
                                        Complete just 1 test per month and it
                                        pays for itself
                                    </li>
                                </ul>
                            </div>
                        </section>
                        <section className="bg-white dark:bg-[#3b83f6]  bg- rounded-xl pb-8 pl-8 pr-8 pt-4 text-sm md:text-base m-2  max-w-[270px] xs:max-w-[325px] sm:max-w-[400px] drop-shadow-menu  border-2 border-blue-500 text-neutral-800 dark:text-neutral-100 font-sans">
                            <div className="text-xs mb-2 bg-gradient-to-r from-yellow-200 to-yellow-500 dark:from-neutral-100 dark:to-yellow-500 p-[3px] text-center w-28 rounded text-black font-bold tracking-wide animate-shine">
                                Best Value
                            </div>
                            <h1 className="text-2xl font-sans font-medium pb-4">
                                Premium Plan
                            </h1>
                            <p>
                                Our Premium plan is for medium sized clinics
                                that require increased testing capabilities and
                                more staff member access.
                            </p>
                            <div className="py-2 mb-2 flex flex-row items-center">
                                <span className="text-3xl pr-1 font-sans font-bold">
                                    $0
                                </span>
                                <span className="flex flex-col text-xs">
                                    <div>per</div>
                                    <div>month</div>{" "}
                                </span>
                            </div>
                            <ButtonSecondary
                                onClick={() =>
                                    router.push("https://smart-plan.io")
                                }
                                className="bg-white text-[#3b82f6] hover:bg-[#e9e9ead2] w-full font-bold ring-1 ring-blue-500 "
                            >
                                Get Started today
                            </ButtonSecondary>
                            <div className="pt-3">
                                <p className="pb-1">This plan includes:</p>
                                <ul className="list-disc pl-4">
                                    {/* <li className="py-1">50 patient tests per billing cycle</li> */}
                                    <li>1 Provider/Admin account</li>
                                    <li className="py-1">
                                        Create 4 additional Staff accounts
                                    </li>
                                    <li>Access to all of our care plans</li>
                                    <li>
                                        Unlimited access to our AI dictation
                                        tool
                                    </li>{" "}
                                </ul>
                            </div>
                        </section>
                        <section className="bg-white dark:bg-[#3b83f6] rounded-xl p-8 text-sm md:text-base m-2  max-w-[270px] xs:max-w-[325px] xs sm:max-w-[400px] drop-shadow-menu border-2 border-blue-500 text-neutral-800 dark:text-neutral-100 font-sans">
                            <h1 className="text-2xl font-sans font-medium pb-4">
                                Enterprise Plan
                            </h1>
                            <p>
                                Our Enterprise plan is for large organizations
                                who require a larger amount of staff access and
                                custom solutions.
                            </p>
                            <div className="py-2 flex flex-row items-center">
                                <div className="flex flex-row items-end">
                                    {" "}
                                    <span className="text-3xl pr-1 font-sans font-bold">
                                        <span className="text-sm flex flex-col justify-center">
                                            starting at
                                        </span>
                                        {"   "}
                                        $0
                                    </span>
                                    <span className="flex flex-col text-xs">
                                        <div>per</div>
                                        <div>month</div>{" "}
                                    </span>
                                </div>
                            </div>
                            <ButtonSecondary
                                onClick={() =>
                                    router.push("https://smart-plan.io")
                                }
                                className="bg-white text-[#3b82f6] hover:bg-[#e9e9ead2] w-full font-bold ring-1 ring-blue-500 "
                            >
                                Get Started today
                            </ButtonSecondary>
                            <div className="pt-3">
                                <p className="pb-1">This plan includes:</p>
                                <ul className="list-disc pl-4">
                                    <li>
                                        Can contact us to create extra admin
                                        accounts
                                    </li>
                                    <li className="py-1">
                                        Unlimited Staff Members
                                    </li>
                                    <li>
                                        Unlimited access to our AI dictation
                                        tool
                                    </li>{" "}
                                    <li>Access to all of our care plans</li>
                                    <li>
                                        We can create custom care plans for your
                                        practice to use on request
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </article>
                )}
            </div>
            {/* {error && <p className="text-red-500">{error}</p>} */}
        </section>
    )
}

export default Pricing
