import Image from "next/image"
import React from "react"

const Devices = () => {
    return (
        <div className="flex flex-col justify-center items-center py-20">
            <h2 className="text-4xl md:text-6xl font-semibold">
                Works on Any Device
            </h2>

            <Image
                src="/devices.svg"
                alt="Mobile and Laptop devices"
                width={1000}
                height={540}
                className="hover:scale-105 transform transition-transform duration-300"
            />
        </div>
    )
}

export default Devices
