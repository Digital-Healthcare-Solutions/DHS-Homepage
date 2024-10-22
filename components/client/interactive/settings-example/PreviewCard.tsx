"use client"

import React from "react"
import {
    ElementType,
    ObjectiveElementType,
    PhysicalExamConfig,
    PhysicalExamElementType,
    ROSConfig,
    ROSElementType
} from "./noteTypes"

const TablePreview = ({
    columnCount,
    rowCount
}: {
    columnCount: 3 | 4
    rowCount: number
}) => (
    <div className="border border-gray-300 dark:border-neutral-600 rounded">
        <div className="flex border-b border-gray-300 dark:border-neutral-600">
            {Array.from({ length: columnCount }).map((_, index) => (
                <div
                    key={index}
                    className={`p-2 ${`w-${
                        columnCount === 3 ? "1/3" : "1/4"
                    }`}`}
                >
                    <div className="h-2 bg-gray-300 dark:bg-neutral-600 rounded w-1/3"></div>
                </div>
            ))}
        </div>
        {Array.from({ length: rowCount }).map((_, rowIndex) => (
            <div key={rowIndex} className="flex">
                {Array.from({ length: columnCount }).map((_, colIndex) => (
                    <div
                        key={colIndex}
                        className={`p-2 ${`w-${
                            columnCount === 3 ? "1/3" : "1/4"
                        }`}`}
                    >
                        <div className="h-2 bg-gray-300 dark:bg-neutral-600 rounded w-full"></div>
                    </div>
                ))}
            </div>
        ))}
    </div>
)

const FormattedSystemPreview = ({
    system,
    format
}: {
    system: string
    format: "paragraphs" | "bullets"
}) => (
    <div className="flex items-start space-x-2 w-full">
        {format === "bullets" && (
            <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-neutral-600 flex-shrink-0 mt-1.5"></div>
        )}
        <div className="flex items-center gap-2 w-full">
            <span className="text-sm font-medium capitalize ">
                {system === "allergicImmunologic"
                    ? "Allergic/Immunologic"
                    : system === "hematologicLymphatic"
                    ? "Hematologic/Lymphatic"
                    : system}
                :{" "}
            </span>
            <div className="h-2 bg-gray-300 dark:bg-neutral-600 rounded w-full inline-block"></div>
        </div>
    </div>
)

const ROSPreview = ({
    rosConfig,
    format
}: {
    rosConfig: ROSConfig
    format: "paragraphs" | "bullets"
}) => {
    const visibleSystems = Object.entries(rosConfig).filter(
        ([_, config]) => !config.hidden
    )

    return (
        <div className="space-y-2">
            {visibleSystems.map(([system, _], index) => (
                <FormattedSystemPreview
                    key={system}
                    system={system}
                    format={format}
                />
            ))}
        </div>
    )
}

const PhysicalExamPreview = ({
    physicalExam,
    format
}: {
    physicalExam: PhysicalExamConfig
    format: "paragraphs" | "bullets"
}) => {
    const visibleSystems = Object.entries(physicalExam).filter(
        ([_, config]) => !config.hidden
    )

    return (
        <div className="space-y-2">
            {visibleSystems.map(([system, _], index) => (
                <FormattedSystemPreview
                    key={system}
                    system={system}
                    format={format}
                />
            ))}
        </div>
    )
}

const FormatPreview = ({
    format,
    detailLevel,
    element
}: {
    format: "paragraphs" | "bullets" | "numbered" | "table"
    detailLevel: "normal" | "high"
    element: ElementType
}) => {
    const lineCount =
        element.type === "chiefComplaint" && detailLevel === "normal"
            ? 1
            : element.type === "chiefComplaint" && detailLevel === "high"
            ? 2
            : detailLevel === "high"
            ? 4
            : 2

    if (element.type === "ros") {
        return (
            <ROSPreview
                rosConfig={(element as ROSElementType).rosConfig}
                format={format as "paragraphs" | "bullets"}
            />
        )
    }

    if (element.type === "physicalExam") {
        return (
            <PhysicalExamPreview
                physicalExam={(element as PhysicalExamElementType).physicalExam}
                format={format as "paragraphs" | "bullets"}
            />
        )
    }

    if (element.type === "objective") {
        return (
            <PhysicalExamPreview
                physicalExam={(element as ObjectiveElementType).physicalExam}
                format={format as "paragraphs" | "bullets"}
            />
        )
    }

    if (format === "table") {
        const columnCount = element.type === "labData" ? 4 : 3
        return <TablePreview columnCount={columnCount} rowCount={lineCount} />
    }

    return (
        <div className="space-y-2">
            {Array.from({ length: lineCount }).map((_, index) => (
                <div key={index} className="flex items-center space-x-2">
                    {format === "bullets" && (
                        <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-neutral-600 flex-shrink-0"></div>
                    )}
                    {format === "numbered" && (
                        <span className="text-gray-500 dark:text-neutral-400 text-sm flex-shrink-0 w-5">
                            {index + 1}.
                        </span>
                    )}
                    <div
                        className={`h-2 bg-gray-300 dark:bg-neutral-600 rounded flex-grow ${
                            index === lineCount - 1 ? "w-3/4" : "w-full"
                        }`}
                    ></div>
                </div>
            ))}
        </div>
    )
}

const CardContent = ({ element }: { element: ElementType }) => {
    const formatOption =
        "formatOption" in element ? element.formatOption : "paragraphs"
    const detailLevel =
        "detailLevel" in element ? element.detailLevel : "normal"

    return (
        <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-lg">{element.name}</h1>
            <FormatPreview
                format={formatOption}
                detailLevel={detailLevel}
                element={element}
            />
        </div>
    )
}

const PreviewCard = ({ element }: { element: ElementType }) => {
    return (
        <div className="rounded-lg p-4 ">
            <CardContent element={element} />
        </div>
    )
}

export default PreviewCard
