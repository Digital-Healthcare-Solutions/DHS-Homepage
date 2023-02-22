import { Container, Avatar, Group, Text, Divider } from "@mantine/core"
import React from "react"
import AboutAvatar from "../../components/mantine-Components/aboutAvatar"
import { useEffect, useState } from "react"

const AboutUs = () => {
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])

    return (
        <div>
            <Container size={width > 1024 ? "lg" : "md"}>
                <section className="my-8">
                    <h1 className="text-3xl font-bold pb-4">
                        About Us <Divider className="w-64 md:w-96 my-2" />
                    </h1>
                    <p className="text-lg">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Repellendus quis est laborum accusantium maiores
                        molestias illo dolore ipsam amet, culpa eligendi quae
                        magnam consequuntur quas eaque, perspiciatis, mollitia
                        vitae? Odio!
                    </p>
                </section>
            </Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 m-2 sm:m-10 lg:m-20">
                <AboutAvatar
                    avatar="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
                    nameFirst="Jacob"
                    nameLast="Owens"
                    title="Co-Founder"
                    email="jacobowens@smart-plan.io"
                />
                <AboutAvatar
                    avatar="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
                    nameFirst="William"
                    nameLast="E. Owens, MD"
                    title="Co-Founder"
                    email="jacobowens@smart-plan.io"
                />
            </div>

            <section className="my-12 md:my-20 lg:my-28 ">
                <Container size={width > 1024 ? "lg" : "md"}>
                    {" "}
                    <h1 className="text-2xl md:text-3xl font-bold pb-3 ">
                        Our Mission
                        <Divider className="w-64 md:w-96 my-2" />
                    </h1>
                    <p className="text-lg ">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Repellendus quis est laborum accusantium maiores
                        molestias illo dolore ipsam amet, culpa eligendi quae
                        magnam consequuntur quas eaque, perspiciatis, mollitia
                        vitae? Odio!
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
                                src={
                                    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
                                }
                                size={width > 1024 ? 250 : 150}
                                radius="md"
                            />
                            <Text
                                className={
                                    "text-base sm:text-lg md:pl-4 lg:text-2xl"
                                }
                            >
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Repellendus quis est laborum
                                accusantium maiores molestias illo dolore ipsam
                                amet, culpa eligendi quae
                            </Text>
                        </Group>
                    </div>{" "}
                </Container>
                <Container size={"md"}>
                    <div className="flex flex-col md:flex-row md:justify-around items-center">
                        <Group noWrap id="William">
                            <Text
                                className={
                                    "text-base sm:text-lg md:pl-4 lg:text-2xl"
                                }
                            >
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Repellendus quis est laborum
                                accusantium maiores molestias illo dolore ipsam
                                amet, culpa eligendi quae
                            </Text>
                            <Avatar
                                src={
                                    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
                                }
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
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Repellendus quis est laborum accusantium maiores
                        molestias illo dolore ipsam amet, culpa eligendi quae
                        magnam consequuntur quas eaque, perspiciatis, mollitia
                        vitae? Odio!
                    </p>
                </Container>
            </section>
        </div>
    )
}

export default AboutUs
