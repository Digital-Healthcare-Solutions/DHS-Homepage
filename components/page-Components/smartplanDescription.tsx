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
                <h1 className="text-4xl font-bold mb-5">What is SmartPlan?</h1>

                <Text className="text-center pb-8 lg:w-1/2 " size="lg">
                    Smartplan is a cloud-based platform that allows physicians
                    and primary care providers to easily create and manage
                    comprehensive plans of care for patients with various
                    chronic diseases.
                </Text>
                {/* 
                <div className="right-16 xl:right-24  translate-y-36  absolute maxRandom:hidden ">
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
                            ? "opacity-100 rounded-xl shadow-md shadow-neutral-800"
                            : "opacity-60 rounded-xl shadow-md "
                    }
                >
                    <Image
                        className="rounded-xl "
                        src="/test.jpg"
                        alt="Smart Plan"
                        width={800}
                        height={800}
                        quality={100}
                        priority
                    />
                </div>
                <div className="flex flex-col items-center">
                    <h4 className="text-center py-8 lg:w-1/2 text-lg md:text-2xl">
                        Our web app provides everything you need to get started
                        billing codes 99483, 99490, and 99491 in a user
                        friendly, HIPPA compliant way.
                    </h4>
                    <Link href="https://smart-plan.io/login">
                        <ButtonPrimary onClick={""} className={""}>
                            View Demo
                        </ButtonPrimary>
                    </Link>
                </div>
            </div>{" "}
        </Container>
    )
}

export default SmartPlanDescription
