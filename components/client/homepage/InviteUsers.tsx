import Image from "next/image"
import React from "react"

const InviteUsers = () => {
    return (
        <div
            className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center py-20 gap-5"
            id="team-collaboration"
        >
            <div>
                <h2 className="text-4xl font-semibold pb-5">
                    Invite your team to collaborate.
                </h2>
                <p className="text-lg text-muted-foreground">
                    Seamlessly share and collaborate on patient notes between
                    nurses and doctors, enhancing communication and care
                    coordination.
                </p>
            </div>
            <video
                className="w-[700px] h-[540px]"
                // controls
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/inviteUsers2.mp4 " type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* inviteUsers2.mp4 */}
            {/* <Image
                src="/inviteUsers.svg"
                alt="Invite Users"
                width={700}
                height={540}
            /> */}
        </div>
    )
}

export default InviteUsers
