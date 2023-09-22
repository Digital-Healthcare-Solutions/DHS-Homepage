import { Container, Avatar, Group, Text, Divider } from "@mantine/core"
import React from "react"
import AboutAvatar from "../../components/mantine-Components/aboutAvatar"
import { useEffect, useState, useCallback } from "react"
import Link from "next/link"
import Head from "next/head"

const AboutUs = () => {
    const [width, setWidth] = useState(window.innerWidth)

    const handleResize = useCallback(() => {
        setWidth(window.innerWidth)
    }, [])

    useEffect(() => {
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [handleResize])

    return (
        <div>
            <Head>
                <title>About Us</title>
                <meta
                    name="description"
                    content="About Us - Digital Healthcare Solutions"
                />
                <meta
                    name="keywords"
                    content="Digital Healthcare Solutions, Healthcare Solutions, Healthcare, Digital Healthcare, Healthcare Communication, Healthcare Communication Platform, Medical Phone System, Medical Phone, Alternative to faxing, Secure alternative to faxing medical records, Medical communication, Medical communication platform, Medical communication system, Medical communication software, Medical communication solution"
                />

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container size={width > 1024 ? "xl" : "md"}>
                <section className="my-8">
                    <h1 className="text-3xl font-bold pb-4">
                        About Us <Divider className="w-64 md:w-96 my-2" />
                    </h1>
                    <p className="text-lg">
                        Digital Healthcare Solutions is a healthcare tech
                        startup based in the US. We are a team of real
                        healthcare professionals who are passionate about
                        improving the quality of care and patient experience
                        through the use of innovative technology. We use all of
                        our technology in our own medical practice to ensure
                        that it is user friendly and provides real value to
                        healthcare providers.
                    </p>
                </section>
            </Container>
            <Container size={"xl"}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20 ">
                    <AboutAvatar
                        avatar="me.jpg"
                        nameFirst="Jacob"
                        nameLast="Owens"
                        title="Co-Founder / Developer"
                        email="jacobowens@digitalhealthcaresolutions.io"
                    />
                    <AboutAvatar
                        avatar={"/hahhahahhahahahaha.jpg"}
                        nameFirst="William"
                        nameLast="Owens, MD"
                        title="Co-Founder"
                        email="william@digitalhealthcaresolutions.io"
                    />
                </div>
            </Container>

            <section className="my-12 md:my-20 lg:my-28 ">
                <Container size={width > 1024 ? "xl" : "md"}>
                    {" "}
                    <h1 className="text-2xl md:text-3xl font-bold pb-3 ">
                        Our Mission
                        <Divider className="w-64 md:w-96 my-2" />
                    </h1>
                    <p className="text-lg ">
                        Our mission with Digital Healthcare Solutions is to help
                        small businesses save time and provide better patient
                        care by providing innovative solutions to healthcare
                        providers. We understand the challenges that come with
                        managing a medical practice and we believe that our
                        platform can be a powerful tool to help you overcome
                        those challenges. By saving time and improving the
                        quality of care, we aim to empower physicians to focus
                        on what matters most - their patients' health and
                        wellbeing. At our company, we are committed to making a
                        positive impact on healthcare, one patient at a time
                    </p>
                </Container>
            </section>
            <section className="my-12">
                {" "}
                <h1
                    className="text-2xl md:text-3xl font-bold pb-6 flex flex-col items-center"
                    id="Jacob"
                >
                    Our Team
                    {/* <Divider className="w-64 md:w-96 my-2" /> */}
                </h1>
                <Container size={"md"}>
                    {" "}
                    <div className="flex flex-col md:flex-row md:justify-around items-center mb-8 md:mb-20">
                        <Group noWrap>
                            <Avatar
                                src={"me.jpg"}
                                size={width > 1024 ? 250 : 150}
                                radius="md"
                            />
                            <Text
                                className={
                                    "text-sm sm:text-base md:pl-4 md:text-lg lg:text-xl"
                                }
                            >
                                Jacob is a Registered Nurse and a self taught
                                web developer. He has been working in the
                                medical field for over 4 years and has been a
                                developer for 2 years. As the co-founder of
                                Digital Healthcare Solutions, Jacob is the lead
                                developer and oversees the implementation of new
                                features and the maintenance of the platform.
                                Jacob is passionate about healthcare and
                                technology and is committed to making a positive
                                impact on the industry.
                            </Text>
                        </Group>
                    </div>{" "}
                </Container>
                <Container size={"md"}>
                    <div className="flex flex-col md:flex-row md:justify-around items-center">
                        <Group noWrap id="William">
                            <Text
                                className={
                                    "text-sm sm:text-base md:pl-4 md:text-lg lg:text-xl"
                                }
                            >
                                William is a board certified neurologist for
                                over 20 years and co-founder of Digital
                                Healthcare Solutions. He is the lead of research
                                development at the company and oversees the
                                development of innovative technology that
                                revolutionizes the way patients receive care.
                                William also continues to practice medicine,
                                providing top-quality care to his patients. His
                                dedication to the field of neurology and his
                                commitment to advancing healthcare technology
                                make him a respected leader in the industry.
                            </Text>
                            <Avatar
                                src={"/hahhahahhahahahaha.jpg"}
                                size={width > 1024 ? 250 : 150}
                                radius="md"
                            />
                        </Group>
                    </div>{" "}
                </Container>
            </section>
            <section className="my-16 ">
                <Container size={width > 1024 ? "lg" : "md"}>
                    {" "}
                    <h1 className="text-2xl md:text-3xl font-bold pb-3 ">
                        Our Vision for the Future
                        <Divider className="w-64 md:w-96 my-2" />
                    </h1>
                    <p className="text-lg ">
                        We believe that the future of healthcare is digital. We
                        are excited to see how technology will continue to
                        evolve and improve the lives of providers and patients
                        alike and we are committed to being a part of the
                        evolution towards a more efficient and effective health
                        care system.
                    </p>
                </Container>
            </section>
        </div>
    )
}

export default AboutUs
