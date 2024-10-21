import React from "react"

const EchoSettingsVideo = () => {
    return (
        <div className="flex flex-col justify-center items-center py-20">
            <h2 className="p-5 text-2xl font-semibold">
                Customize your notes to fit exactly how you like them
            </h2>
            <video
                className="w-[960px] h-[540px]"
                // controls
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/echoSettings.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default EchoSettingsVideo
