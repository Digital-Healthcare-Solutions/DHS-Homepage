import {
    createStyles,
    Card,
    Text,
    SimpleGrid,
    UnstyledButton,
    Anchor,
    Group
} from "@mantine/core"
import { AiOutlineCreditCard, AiOutlineBank } from "react-icons/ai"
import {
    MdOutlineReceiptLong,
    MdRepeat,
    MdOutlineReportProblem
} from "react-icons/md"
import { BsCurrencyBitcoin, BsCashStack } from "react-icons/bs"
import Link from "next/link"

// const mockdata = [
//     { title: "Credit cards", icon: AiOutlineCreditCard, color: "violet" },
//     { title: "Banks nearby", icon: AiOutlineBank, color: "indigo" },
//     { title: "Transfers", icon: MdRepeat, color: "blue" },
//     { title: "Refunds", icon: MdOutlineReceiptLong, color: "green" },
//     { title: "Receipts", icon: MdOutlineReceiptLong, color: "teal" },
//     { title: "Taxes", icon: MdOutlineReceiptLong, color: "cyan" },
//     { title: "Reports", icon: MdOutlineReportProblem, color: "pink" },
//     { title: "Payments", icon: BsCurrencyBitcoin, color: "orange" },
//     { title: "Cashback", icon: BsCashStack, color: "orange" }
// ]

function CardHome({
    icon,
    title,
    p1Text,
    p2Text1,
    p2Text2,
    p2Href,
    p2HrefText
}) {
    return (
        <Card
            radius="md"
            className={"max-w-[400px] h-96 bg-white dark:bg-neutral-900"}
        >
            <div className="flex justify-center pb-3 text-blue-500">{icon}</div>
            <Group position="center">
                <h1 className={"text-xl"}>{title}</h1>
                {/* <Anchor size="xs" color="dimmed" sx={{ lineHeight: 1 }}>
                    + 21 other services
                </Anchor> */}
            </Group>
            <div className="mt-3 text-base sm:text-lg mx-5">
                <p>{p1Text}</p>
                <br />
                <p>
                    {p2Text1}{" "}
                    <Link
                        className="text-blue-500 hover:underline active:underline"
                        href={p2Href}
                    >
                        {p2HrefText}
                    </Link>{" "}
                    {p2Text2}
                </p>
            </div>
        </Card>
    )
}

export default CardHome
