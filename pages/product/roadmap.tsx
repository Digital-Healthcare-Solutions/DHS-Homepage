import { Timeline, Text, Container, ThemeIcon, Divider } from "@mantine/core"
import { BsPatchCheck } from "react-icons/bs"
import { BiCheck } from "react-icons/bi"
const Roadmap = () => {
    const icon = (
        <ThemeIcon radius="xl" size={24} color="green">
            <BiCheck size={22} />
        </ThemeIcon>
    )

    return (
        <Container>
            <h1 className="flex flex-col text-2xl justify-center items-center mt-12">
                <Text weight={600}>Our Product Roadmap</Text>
                <Divider className="w-56 mt-2" />
            </h1>
            <main className="flex justify-center my-10 text-base md:text-xl">
                <Timeline color="green" active={1} align="right">
                    <Timeline.Item
                        bullet={icon}
                        className="pb-5"
                        title=" Initial Beta launch of the product"
                    >
                        <Text color="dimmed"> (Febuary, 12th 2023)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        // bullet={icon}
                        className="pb-5"
                        title="Adding new care plans to the product "
                    >
                        <Text color="dimmed">March, 12th 2023</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        // bullet={icon}
                        className="pb-5"
                        title="Adding patient portal to the product "
                    >
                        <Text color="dimmed">April, 12th 2023</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        // bullet={icon}
                        className="pb-5"
                        title="Adding embedded patient registration to the product "
                    >
                        <Text color="dimmed">May, 12th 2023</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        // bullet={icon}
                        className="pb-5"
                        title="Adding embedded patient scheduling to the product "
                    >
                        <Text color="dimmed">June, 12th 2023</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        className="pb-5"
                        title="Adding embedded patient billing to the product "
                    >
                        <Text color="dimmed">July, 12th 2023</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        className="pb-5"
                        title="Adding embedded patient messaging to the product"
                    >
                        <Text color="dimmed">August, 12th 2023</Text>
                    </Timeline.Item>

                    <Timeline.Item
                        className="pb-5"
                        title="V.1.0 launch of the product "
                    >
                        <Text color="dimmed">September, 12th 2023</Text>
                    </Timeline.Item>
                </Timeline>
            </main>
        </Container>
    )
}

export default Roadmap
