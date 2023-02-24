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
                <Timeline color="green" active={3} align="right">
                    <Timeline.Item
                        bullet={icon}
                        className="pb-5"
                        title="Alpha use of SmartPlan"
                    >
                        <Text color="dimmed"> (December 10th 2022)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={icon}
                        className="pb-5"
                        title=" Received HIPPA compliance certification from Compliancy Group"
                    >
                        <Text color="dimmed"> (January 30th 2022)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        bullet={icon}
                        className="pb-5"
                        title="Beta launch"
                    >
                        <Text color="dimmed"> (Febuary 24th 2023)</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        // bullet={icon}
                        className="pb-5"
                        title="Adding new care plans "
                    >
                        <Text color="dimmed">March 30th 2023</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        // bullet={icon}
                        className="pb-5"
                        title="Adding patient portal"
                    >
                        <Text color="dimmed">April 2023</Text>
                    </Timeline.Item>
                    <Timeline.Item
                        // bullet={icon}
                        className="pb-5"
                        title="Adding online patient registration for providers to the product "
                    >
                        <Text color="dimmed">June 2023</Text>
                    </Timeline.Item>

                    <Timeline.Item
                        className="pb-5"
                        title="v 1.0 launch of the product "
                    >
                        <Text color="dimmed">July 12th 2023</Text>
                    </Timeline.Item>
                </Timeline>
            </main>
        </Container>
    )
}

export default Roadmap
