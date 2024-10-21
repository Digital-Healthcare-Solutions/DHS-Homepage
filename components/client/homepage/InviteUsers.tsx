import Image from "next/image"
import React from "react"

const InviteUsers = () => {
    return (
        <div className="container mx-auto flex flex-col md:flex-row justify-center items-center py-20 gap-5">
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

            <Image
                src="/inviteUsers.svg"
                alt="Invite Users"
                width={700}
                height={540}
            />
        </div>
    )
}

export default InviteUsers
