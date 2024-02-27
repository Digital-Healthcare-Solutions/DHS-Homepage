import { ThemeIcon, Text, Title, Container, SimpleGrid } from "@mantine/core"
import { MdSettings } from "react-icons/md"

// export const MOCKDATA = [
//     {
//         icon: MdSettings,
//         title: "Extreme performance",
//         description:
//             "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit"
//     },
//     {
//         icon: MdSettings,
//         title: "Privacy focused",
//         description:
//             "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma"
//     },
//     {
//         icon: MdSettings,
//         title: "24/7 Support",
//         description:
//             "Rapidash usually can be seen casually cantering in the fields and plains, Skitty is known to chase around after its own tail"
//     }
// ]

interface FeatureProps {
    icon: React.ReactNode
    title: string
    description: string
}

type ThreeCardProductCopyProps = {
    features: FeatureProps[]
    title: string
    // subtitle: string
    tagline: string
}

export function Feature({ icon: Icon, title, description }: FeatureProps) {
    return (
        <div>
            <ThemeIcon variant="light" size={40} radius={40}>
                {Icon}
            </ThemeIcon>
            <Text className="mt-2 mb-4">{title}</Text>
            <Text className="text-sm text-gray-500 leading-6">
                {description}
            </Text>
        </div>
    )
}

function ThreeIconComponent({
    features = [],
    title = "",
    // subtitle = "",
    tagline = ""
}: ThreeCardProductCopyProps) {
    return (
        <Container className="pt-[calc(var(--mantine-spacing-xl)*4)] pb-[calc(var(--mantine-spacing-xl)*4)]">
            <Title className="font-bold text-center mb-[var(--mantine-spacing-md)]">
                {title}
            </Title>

            <Container size={560} p={0}>
                <Text size="sm" className="text-center">
                    {tagline}
                </Text>
            </Container>

            <SimpleGrid
                mt={30}
                cols={3}
                breakpoints={[
                    { maxWidth: 1200, cols: 2 },
                    { maxWidth: 800, cols: 1 }
                ]}
            >
                {features.map((feature) => (
                    <Feature key={feature.title} {...feature} />
                ))}
            </SimpleGrid>
        </Container>
    )
}

export default ThreeIconComponent
