import Image from "next/image"
import React from "react"
import { Overlay, Container, Text } from "@mantine/core"
import { CiMedicalCross } from "react-icons/ci"
import { IoMedicalOutline } from "react-icons/io5"
import { CiMedicalCase } from "react-icons/ci"
import ButtonSecondary from "../UI-Components/button-secondary"
import ButtonPrimary from "../UI-Components/button-primary"
import Link from "next/link"

const SmartPlanDescription = () => {
    const theme = localStorage.getItem("theme")

    return (
        <Container size="lg">
            <div className="flex flex-col items-center mt-16 ">
                <h1 className="text-4xl font-bold mb-5">
                    What is Digital Healthcare Solutions ?
                </h1>

                <Text className="text-center pb-8 lg:w-1/2 " size="lg">
                    We are a healthcare software company that provides a
                    cloud-based practice management platform for medical
                    professionals.
                </Text>

                {/* <div className="right-16 xl:right-24  translate-y-36  absolute maxRandom:hidden ">
                    <CiMedicalCross size={40} className=" text-blue-500" />
                </div>
                <div className="right-32 xl:right-44  2xl:right-56  translate-y-72 absolute maxRandom:hidden ">
                    <IoMedicalOutline size={40} className=" text-blue-500" />
                </div>
                <div className=" right-16 xl:right-24 translate-y-[425px] absolute maxRandom:hidden ">
                    <CiMedicalCase size={40} className=" text-blue-500" />
                </div>
                <div className="right-32 xl:right-44  2xl:right-56 translate-y-[565px]  absolute maxRandom:hidden ">
                    <CiMedicalCross size={40} className="text-blue-500" />
                </div>

                <div className="left-16 xl:left-24  translate-y-36  absolute maxRandom:hidden ">
                    <CiMedicalCase size={40} className=" text-blue-500" />
                </div>
                <div className="left-32 xl:left-44  2xl:left-56  translate-y-72 absolute maxRandom:hidden ">
                    <CiMedicalCross size={40} className=" text-blue-500" />
                </div>
                <div className=" left-16 xl:left-24 translate-y-[425px] absolute maxRandom:hidden ">
                    <IoMedicalOutline size={40} className=" text-blue-500" />
                </div>
                <div className="left-32 xl:left-44  2xl:left-56 translate-y-[565px]  absolute maxRandom:hidden ">
                    <CiMedicalCase size={40} className=" text-blue-500" />
                </div> */}
                <div
                    className={
                        theme === "light"
                            ? "opacity-100 rounded-xl shadow-lg shadow-gray-300 "
                            : "opacity-90 rounded-xl shadow-lg shadow-gray-700 "
                    }
                >
                    <Image
                        className="rounded-xl "
                        src="/homePageGraphic.jpg"
                        alt="Smart Plan"
                        width={800}
                        height={800}
                        quality={100}
                        priority
                    />
                    {/* <p className="flex flex-row justify-end mr-2 text-xs text-gray-400">
                        Image by macrovector on Freepik
                    </p> */}
                </div>

                <div className="flex flex-col items-center">
                    <h4 className="text-center py-8 lg:w-1/2 text-lg md:text-2xl">
                        See how our customized solutions can help you save time,
                        maximize revenue and increase patient satisfaction.
                        {/* Our web app provides everything you need to get started
                        billing codes 99483, 99490, and 99491 in a user
                        friendly, HIPPA compliant way. */}
                    </h4>
                    <Link href="/product/demos">
                        <ButtonPrimary
                            onClick={() => console.log("")}
                            className={""}
                        >
                            View Demos
                        </ButtonPrimary>
                    </Link>
                </div>
            </div>{" "}
        </Container>
    )
}

export default SmartPlanDescription
