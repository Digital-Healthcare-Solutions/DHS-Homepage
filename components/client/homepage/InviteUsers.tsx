import Image from "next/image"
import React from "react"

const InviteUsers = () => {
  return (
    <div
      className="container max-w-6xl mx-auto flex flex-col justify-center items-center gap-5"
      id="team-collaboration"
    >
      <video
        className="w-[900px] h-[640px]"
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
