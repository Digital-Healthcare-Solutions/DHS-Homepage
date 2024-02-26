import { Group, Paper, Text, ThemeIcon } from "@mantine/core"
import React from "react"
import { MdOutlineArrowOutward } from "react-icons/md"
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go"

const StatCard = ({ title, value, valueText, diff }) => {
    const DiffIcon = diff > 0 ? GoArrowUpRight : GoArrowDownRight
    return (
        <Paper
            className="w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 flex flex-col justify-around"
            withBorder
            p="md"
            radius="md"
            key={title}
        >
            <Group className="flex justify-between">
                <div>
                    <Text c="dimmed" tt="uppercase" fw={700} fz="sm">
                        {title}
                    </Text>
                    <Text fw={700} fz="sm">
                        {value} {valueText}
                    </Text>
                    <Text fw={400} fz="xs">
                        on average
                    </Text>
                </div>
                <ThemeIcon
                    color="gray"
                    variant="light"
                    className={diff > 0 ? "text-teal-500" : "text-red-500"}
                    size={38}
                    radius="md"
                >
                    <DiffIcon size="1.8rem" />
                </ThemeIcon>
            </Group>
            <Text c="dimmed" fz="md">
                <Text
                    component="span"
                    className={diff > 0 ? "text-teal-500" : "text-red-500"}
                    fw={700}
                >
                    {diff}%
                </Text>{" "}
                {diff > 0 ? "increase" : "decrease"} from before
            </Text>
        </Paper>
    )
}

export default StatCard
