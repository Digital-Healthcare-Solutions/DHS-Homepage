import {
    Image,
    Text,
    Container,
    ThemeIcon,
    Title,
    SimpleGrid
} from "@mantine/core"
import { ReactNode } from "react"
import { MdSettings } from "react-icons/md"

type DataItem = {
    title: string
    description: string
    icon: ReactNode
}

type ProductCopyProps = {
    title: string
    subtitle: string
    description: string
    data: DataItem[]
}

function ProductCopy({ title, subtitle, description, data }: ProductCopyProps) {
    const items = data.map((item) => (
        <div key={item.title} className="flex mb-4">
            <ThemeIcon
                variant="light"
                className="p-2 mr-4"
                size={60}
                radius="md"
            >
                {item.icon}
            </ThemeIcon>
            <div>
                <Text
                    component="span"
                    className="font-semibold text-lg mb-2 block"
                >
                    {item.title}
                </Text>
                <Text className="text-gray-600 dark:text-neutral-400">
                    {item.description}
                </Text>
            </div>
        </div>
    ))

    return (
        <Container size={1250} className="pt-10 pb-28">
            <Text className="text-center uppercase font-bold  text-blue-500 tracking-wider text-xl">
                {/* The Clinic Connect ecosystem */}
                {subtitle}
            </Text>

            <Title order={2} className="text-center mt-8 leading-none text-4xl">
                {/* Clinic Connect is a multichannel platform that connects
                healthcare professionals */}
                {title}
            </Title>

            <Container
                size={660}
                p={0}
                className="text-center text-gray-600 dark:text-neutral-400 my-5 "
            >
                <Text>
                    {/* Clinic Connect is a multichannel platform that allows you to
                    send and receive secure messages, faxes, and referrals. We
                    also provide a web referral portal that can be integrated
                    into your website.{" "} */}
                    {description}
                </Text>
            </Container>

            <SimpleGrid
                className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8"
                spacing={50}
                mt="8"
            >
                {items}
            </SimpleGrid>
        </Container>
    )
}

export default ProductCopy
