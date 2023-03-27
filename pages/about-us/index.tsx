import { Container, Avatar, Group, Text, Divider } from "@mantine/core"
import React from "react"
import AboutAvatar from "../../components/mantine-Components/aboutAvatar"
import { useEffect, useState, useCallback } from "react"
import Link from "next/link"

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
            <Container size={width > 1024 ? "lg" : "md"}>
                <section className="my-8">
                    <h1 className="text-3xl font-bold pb-4">
                        About Us <Divider className="w-64 md:w-96 my-2" />
                    </h1>
                    <p className="text-lg">
                        As you may be able to tell, we are a family owned and
                        operated business. We developed this platform in our own{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500 font-bold dark:font-normal hover:underline"
                            href="https://midsouthneurology.com"
                        >
                            practice
                        </a>{" "}
                        to solve some of the problems we were having. We were
                        overwhelmed with the amount of time that we were
                        spending on filling out prior authorization forms,
                        responding to hundreds of phonecalls a day, manually
                        writing multiple page long notes, and trying to manage
                        all the complexities of our large amount of chronic care
                        patients. There was no solution to these problems that
                        we could find. So, we decided to develop our own. We
                        hope you find it as useful as we do.
                        {/* We needed an
                        easier way to manage the complexeties of our large
                        amount of Dementia patients. Using the standard E/M
                        visit, there simply was not enough time to cover all the
                        problems these patients were having. Thats when we
                        discovered the new{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500 font-bold dark:font-normal hover:underline"
                            href="https://www.alz.org/professionals/health-systems-medical-professionals/care-planning"
                        >
                            CPT-99483
                        </a>{" "}
                        code. The only problem was, the documentation required
                        for this code was extensive and there was no easy way
                        for us to implement it.
                         We also didn't want to outsource
                        our patients important problems to a third party
                        company.  */}
                        {/* We decided to take matters into our own hands and
                        develop a custom software platform to help streamline
                        and automate the process and save us time.
                        Since then,
                        we have been adding more and more features to the
                        platform and have been using it in our own practice. We
                        have had such a positive experience working on this
                        platform that we decided to share it with other
                        practices. We hope you find it as useful as we do. */}
                    </p>
                </section>
            </Container>
            <Container size={"lg"}>
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
                <Container size={width > 1024 ? "lg" : "md"}>
                    {" "}
                    <h1 className="text-2xl md:text-3xl font-bold pb-3 ">
                        Our Mission
                        <Divider className="w-64 md:w-96 my-2" />
                    </h1>
                    <p className="text-lg ">
                        Our mission with SmartPlan is to help small businesses
                        like ours save time and provide better patient care by
                        providing innovative solutions to healthcare providers.
                        We understand the challenges that come with managing a
                        medical practice and we believe that our platform can be
                        a powerful tool to help you overcome those challenges.
                        By saving time and improving the quality of care, we aim
                        to empower physicians to focus on what matters most -
                        their patients' health and wellbeing. At our company, we
                        are committed to making a positive impact on healthcare,
                        one patient at a time
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
                                medical field for over 5 years and has been a
                                developer for over 2 years. As the co-founder of
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
