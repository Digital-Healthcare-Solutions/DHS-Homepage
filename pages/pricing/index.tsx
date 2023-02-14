import Link from "next/link"
import ButtonPrimary from "../../components/UI-Components/button-primary"
import { useState } from "react"
import { useRouter } from "next/router"
import ButtonSecondary from "../../components/UI-Components/button-secondary"

const Pricing = () => {
    const router = useRouter()

    const [error, setError] = useState(null)
    const [oneTimePayment, setOneTimePayment] = useState(false)

    return (
        <section className="w-screen min-h-screen bg-gradient-to-tr dark:bg-gradient-to-t from-neutral-50 to-blue-400 dark:to-blue-400 dark:from-neutral-900 flex justify-center items-center text-white ">
            {" "}
            <div className="flex flex-col  drop-shadow-lg">
                {" "}
                <article className="flex flex-row justify-center items-center">
                    <ButtonSecondary
                        onClick={() => setOneTimePayment(false)}
                        className={
                            oneTimePayment
                                ? "bg-white text-blue-500 border border-[#3b82f6] px-4 mr-2 border-solid hover:bg-[#3b82f6] hover:text-white"
                                : "bg-[#3b82f6] border text-white mr-2 border-[#3b82f6] px-4 border-solid hover:bg-[#3b82f6]"
                        }
                    >
                        Monthly
                    </ButtonSecondary>
                    <ButtonSecondary
                        onClick={() => setOneTimePayment(true)}
                        className={
                            oneTimePayment
                                ? "bg-[#3b82f6] border text-white border-[#3b82f6] px-4 border-solid hover:bg-[#3b82f6]"
                                : "bg-white border border-[#3b82f6] px-4 border-solid hover:bg-[#3b82f6] hover:text-white text-blue-500"
                        }
                    >
                        Yearly
                    </ButtonSecondary>
                </article>
                {oneTimePayment ? (
                    <article className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                        <section className="bg-[#3b82f6] rounded-xl p-12 text-sm m-2 w-[333px] drop-shadow-menu">
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
                                className="bg-white text-[#3b82f6] hover:bg-[#ffffffd2] w-full font-bold font-sans"
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
                        <section className="bg-[#3b83f6] bg- rounded-xl pb-12 pl-12 pr-12 pt-4 text-sm m-2 w-[333px] drop-shadow-menu">
                            <div className="text-xs mb-2 bg-gradient-to-r from-white to-yellow-500 p-[3px] text-center w-28 rounded text-black font-bold tracking-wide animate-shine">
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
                                className="bg-white text-[#3b82f6] hover:bg-[#ffffffd2] w-full font-bold font-sans"
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
                        <section className="bg-[#3b82f6] rounded-xl p-12 text-sm m-2 w-[333px] drop-shadow-menu">
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
                                className="bg-white text-[#3b82f6] hover:bg-[#ffffffd2] w-full font-bold font-sans"
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
                    <article className="flex flex-row">
                        <section className="bg-[#3b82f6] rounded-xl p-12 text-sm m-2 w-[333px] drop-shadow-menu">
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
                                className="bg-white text-[#3b82f6] hover:bg-[#ffffffd2] w-full font-bold font-sans"
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
                        <section className="bg-[#3b83f6] bg- rounded-xl pb-12 pl-12 pr-12 pt-4 text-sm m-2 w-[333px] drop-shadow-menu">
                            <div className="text-xs mb-2 bg-gradient-to-r from-white to-yellow-500 p-[3px] text-center w-20 rounded text-black font-bold tracking-wide animate-shine">
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
                                className="bg-white text-[#3b82f6] hover:bg-[#ffffffd2] w-full font-bold font-sans"
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
                        <section className="bg-[#3b82f6] rounded-xl p-12 text-sm m-2 w-[333px] drop-shadow-menu">
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
                                className="bg-white text-[#3b82f6] hover:bg-[#ffffffd2] w-full font-bold font-sans"
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
