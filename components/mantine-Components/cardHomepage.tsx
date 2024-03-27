import {
    createStyles,
    Card,
    Text,
    SimpleGrid,
    UnstyledButton,
    Anchor,
    Group,
    Button
} from "@mantine/core"
import { AiOutlineCreditCard, AiOutlineBank } from "react-icons/ai"
import {
    MdOutlineReceiptLong,
    MdRepeat,
    MdOutlineReportProblem
} from "react-icons/md"
import { BsCurrencyBitcoin, BsCashStack } from "react-icons/bs"
import Link from "next/link"

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
            className={
                "max-w-[400px] h-96 bg-white dark:bg-neutral-900 flex flex-col justify-between items-center pb-12"
            }
        >
            <div>
                <div className="flex justify-center pb-5 text-blue-500 dark:text-blue-500">
                    {icon}
                </div>
                <Group position="center">
                    <h1 className={"text-xl"}>{title}</h1>
                </Group>
                <p className="mt-3 text-base sm:text-lg mx-5">{p1Text}</p>
            </div>
            <Link href={p2Href}>
                <button className="text-base text-blue-500 dark:text-blue-400 p-3 border-blue-500 dark:border-blue-400 border font-rubik font-semibold rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800">
                    {p2HrefText}
                </button>
            </Link>
        </Card>
    )
}

export default CardHome
