import Link from "next/link"
import ButtonPrimary from "../../components/UI-Components/button-primary"
import { useState } from "react"
import { useRouter } from "next/router"
import ButtonSecondary from "../../components/UI-Components/button-secondary"
import { motion } from "framer-motion"
import { Button } from "@mantine/core"

const Pricing = () => {
    const router = useRouter()

    const [error, setError] = useState(null)
    const [oneTimePayment, setOneTimePayment] = useState(false)

    return (
        <section className="bg-gradient-to-r dark:bg-gradient-to-r from-blue-300 to-blue-500 dark:to-neutral-800 dark:from-neutral-900 flex justify-center items-center py-20">
            {" "}
            <div className="flex flex-col items-center  drop-shadow-lg">
                <h1 className="flex flex-col items-center mx-3">
                    <div className="text-2xl w-fit md:text-4xl max-w-5xl text-center pb-4">
                        We offer a plan for all business sizes. Choose the one
                        that fits yours best.
                    </div>
                    <div className="text-xl md:text-2xl w-fit max-w-3xl text-center font-bold">
                        We are currently in beta. Please use the code
                        <span className="text-green-500 font-sans">
                            {" "}
                            "BETA2023"{" "}
                        </span>
                        to get 50% off your first year. Or you can contact us{" "}
                        <Link
                            className="text-white dark:text-blue-300 hover:underline"
                            href="/#contact"
                        >
                            here
                        </Link>{" "}
                        for more information.
                    </div>
                </h1>
                <article className="flex flex-row justify-center items-center mb-4 mt-10">
                    <Button
                        onClick={() => setOneTimePayment(false)}
                        variant={oneTimePayment ? "light" : "filled"}
                        className={
                            oneTimePayment
                                ? "bg-blue-200 text-black dark:hover:bg-blue-200 "
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
                                : "bg-blue-200 text-black dark:hover:bg-blue-200 "
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
                                    $3,000
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
                            <div className="py-4 mb-2 flex flex-row items-center">
                                <span className="text-3xl pr-1 font-sans font-bold">
                                    $4500
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
                            <div className="py-5 flex flex-row items-center">
                                <div className="flex flex-row items-end">
                                    {" "}
                                    <span className="text-3xl pr-1 font-sans font-bold">
                                        <span className="text-sm flex flex-col justify-center">
                                            starting at
                                        </span>
                                        {"   "}
                                        $10,000
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
                                    $299
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
                            <div className="py-4 mb-2 flex flex-row items-center">
                                <span className="text-3xl pr-1 font-sans font-bold">
                                    $499
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
                            <div className="py-5 flex flex-row items-center">
                                <div className="flex flex-row items-end">
                                    {" "}
                                    <span className="text-3xl pr-1 font-sans font-bold">
                                        <span className="text-sm flex flex-col justify-center">
                                            starting at
                                        </span>
                                        {"   "}
                                        $999
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
