import {
    createStyles,
    Title,
    SimpleGrid,
    Text,
    Button,
    ThemeIcon,
    Grid,
    Col,
    Container
} from "@mantine/core"
import Image from "next/image"
import { AiOutlineCloudUpload } from "react-icons/ai"
import ButtonPrimary from "../../components/UI-Components/button-primary"

const features = [
    {
        icon: AiOutlineCloudUpload,
        title: "Lorem ipsum dolor sit amet",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sint quas eum saepe culpa aperiam magnam quia qui, vero explicabo ducimus odit? "
    },
    {
        icon: AiOutlineCloudUpload,
        title: "Lorem ipsum dolor sit amet",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sint quas eum saepe culpa aperiam magnam quia qui, vero explicabo ducimus odit? "
    },
    {
        icon: AiOutlineCloudUpload,
        title: "Lorem ipsum dolor sit amet",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sint quas eum saepe culpa aperiam magnam quia qui, vero explicabo ducimus odit?"
    },
    {
        icon: AiOutlineCloudUpload,
        title: "Lorem ipsum dolor sit amet",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sint quas eum saepe culpa aperiam magnam quia qui, vero explicabo ducimus odit?"
    }
]

const SmartPlan = () => {
    return (
        <div className="py-10 bg-gradient-to-b to-blue-100 from-neutral-50 dark:from-neutral-900 dark:to-neutral-800">
            <Container size="lg">
                <h1 className="flex justify-center pb-8 w-full text-2xl md:text-3xl mb-6">
                    <Image
                        className="rounded-xl dark:brightness-150 "
                        src="/smartplanLogo.png"
                        alt="Smart Plan"
                        width={300}
                        height={300}
                    />
                    {/* <span className=" w-fit text-5xl ml-2 flex items-center text-transparent bg-clip-text bg-gradient-to-r  to-[#194767] from-[#518cba] font-semibold">
            IntelliCall
        </span> */}
                </h1>
                <div className="flex justify-between gap-8">
                    <Image
                        className="rounded-xl brightness-150"
                        src="/carePlan.jpg"
                        width={300}
                        height={300}
                        alt="phone"
                    />
                    <div className="text-lg">
                        <h2 className="text-blue-500 underline underline-offset-4 font-semibold">
                            The Problem :
                        </h2>
                        <h3>
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quo sint quas eum saepe culpa aperiam magnam
                            quia qui, vero explicabo ducimus odit? Consectetur,
                            inventore magni qui facere perferendis neque porro
                            ad quae sapiente ex facilis at repudiandae excepturi
                            incidunt, impedit sint optio? Et tempora excepturi
                            blanditiis labore debitis corrupti nesciunt! Lorem
                            ipsum dolor sit, amet consectetur adipisicing elit.
                            Sunt molestias atque repellat incidunt autem
                            laboriosam velit dicta labore ullam, dolor libero a
                            ea itaque natus.
                        </h3>
                    </div>
                </div>
                <div className="flex justify-between gap-8 py-20">
                    <div className="text-lg">
                        <h2 className="text-blue-500 underline underline-offset-4 font-semibold">
                            Our Solution :
                        </h2>
                        <h3>
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quo sint quas eum saepe culpa aperiam magnam
                            quia qui, vero explicabo ducimus odit? Consectetur,
                            inventore magni qui facere perferendis neque porro
                            ad quae sapiente ex facilis at repudiandae excepturi
                            incidunt, impedit sint optio? Et tempora excepturi
                            blanditiis labore debitis corrupti nesciunt! Lorem
                            ipsum dolor sit, amet consectetur adipisicing elit.
                            Sunt molestias atque repellat incidunt autem
                            laboriosam velit dicta labore ullam, dolor libero a
                            ea itaque natus.
                        </h3>
                    </div>{" "}
                    <Image
                        className="rounded-xl"
                        src="/voiceRecognition.jpg"
                        width={300}
                        height={300}
                        alt="Voice Recognition"
                    />
                </div>

                <div className="py-10 ">
                    <Grid gutter={80}>
                        <Col span={12} md={5}>
                            <Title order={2}>
                                Smartplan makes testing your chronic care
                                management patients easy
                            </Title>
                            <Text className="py-6">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quo sint Lorem ipsum dolor sit
                                amet consectetur adipisicing elit. Ut, illum?
                            </Text>

                            <ButtonPrimary>Get started</ButtonPrimary>
                        </Col>
                        <Col span={12} md={7}>
                            <SimpleGrid
                                cols={2}
                                spacing={30}
                                breakpoints={[{ maxWidth: "md", cols: 1 }]}
                            >
                                {features.map((feature) => (
                                    <div key={feature.title}>
                                        <ThemeIcon
                                            size={44}
                                            radius="md"
                                            variant="gradient"
                                            gradient={{
                                                deg: 133,
                                                from: "blue",
                                                to: "cyan"
                                            }}
                                        >
                                            <feature.icon
                                                size={26}
                                                stroke={"1.5"}
                                            />
                                        </ThemeIcon>
                                        <Text fz="lg" mt="sm" fw={500}>
                                            {feature.title}
                                        </Text>
                                        <Text c="dimmed" fz="sm">
                                            {feature.description}
                                        </Text>
                                    </div>
                                ))}
                            </SimpleGrid>
                        </Col>
                    </Grid>
                </div>

                <div>
                    <h2 className="text-blue-500 text-3xl font-semibold text-center py-6">
                        How it works :
                    </h2>
                    <h3>
                        {" "}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quo sint quas eum saepe culpa aperiam magnam quia qui,
                        vero explicabo ducimus odit? Consectetur, inventore
                        magni qui facere perferendis neque porro ad quae
                        sapiente ex facilis at repudiandae excepturi incidunt,
                        impedit sint optio? Et tempora excepturi blanditiis
                        labore debitis corrupti nesciunt! Lorem ipsum dolor sit,
                        amet consectetur adipisicing elit. Sunt molestias atque
                        repellat incidunt autem laboriosam velit dicta labore
                        ullam, dolor libero a ea itaque natus.
                    </h3>
                </div>
            </Container>
        </div>
    )
}

export default SmartPlan
