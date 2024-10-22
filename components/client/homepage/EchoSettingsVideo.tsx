import { MoveDown } from "lucide-react"
import React from "react"

const EchoSettingsVideo = () => {
    return (
        <div
            className="flex flex-col justify-center items-center py-20"
            id="settings-demo"
        >
            <h2 className="p-10 text-4xl font-semibold">
                Customize your notes to to perfectly suit your style.
            </h2>
            <video
                className="w-[960px] h-[540px]"
                controls
                autoPlay
                loop
                muted
                playsInline
                //pause on click
            >
                <source src="/echoSettings.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <p className="text-lg p-5">
                Give it a try below <MoveDown className="size-5 inline-block" />
            </p>
        </div>
    )
}

export default EchoSettingsVideo
