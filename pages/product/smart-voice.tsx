import { Container } from "@mantine/core"
import Image from "next/image"
import React from "react"

const SmartVoice = () => {
    return (
        <div className="py-10 bg-gradient-to-b to-blue-100 from-neutral-50 dark:from-neutral-900 dark:to-neutral-800">
            <Container size="lg">
                <h1 className="flex justify-center pb-8 w-full text-2xl md:text-3xl mb-6">
                    <Image
                        className="rounded-xl dark:brightness-150 mt-4 mb-2 "
                        src="/SmartVoiceLogo.png"
                        width={330}
                        height={330}
                        alt="Smart Voice Logo"
                    />
                    {/* <span className=" w-fit text-5xl ml-2 flex items-center text-transparent bg-clip-text bg-gradient-to-r  to-[#194767] from-[#518cba] font-semibold">
            IntelliCall
        </span> */}
                </h1>
                <div className="flex justify-between gap-8">
                    <Image
                        className="rounded-xl"
                        src="/phone.jpg"
                        width={300}
                        height={300}
                        alt="phone"
                    />
                    <div className="text-lg">
                        <h2 className="text-blue-500 underline underline-offset-4 font-semibold">
                            The Problem :
                        </h2>
                        <h3>
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quo sint quas eum saepe culpa aperiam magnam
                            quia qui, vero explicabo ducimus odit? Consectetur,
                            inventore magni qui facere perferendis neque porro
                            ad quae sapiente ex facilis at repudiandae excepturi
                            incidunt, impedit sint optio? Et tempora excepturi
                            blanditiis labore debitis corrupti nesciunt! Lorem
                            ipsum dolor sit, amet consectetur adipisicing elit.
                            Sunt molestias atque repellat incidunt autem
                            laboriosam velit dicta labore ullam, dolor libero a
                            ea itaque natus.
                        </h3>
                    </div>
                </div>
                <div className="flex justify-between gap-8 py-20">
                    <div className="text-lg">
                        <h2 className="text-blue-500 underline underline-offset-4 font-semibold">
                            Our Solution :
                        </h2>
                        <h3>
                            {" "}
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quo sint quas eum saepe culpa aperiam magnam
                            quia qui, vero explicabo ducimus odit? Consectetur,
                            inventore magni qui facere perferendis neque porro
                            ad quae sapiente ex facilis at repudiandae excepturi
                            incidunt, impedit sint optio? Et tempora excepturi
                            blanditiis labore debitis corrupti nesciunt! Lorem
                            ipsum dolor sit, amet consectetur adipisicing elit.
                            Sunt molestias atque repellat incidunt autem
                            laboriosam velit dicta labore ullam, dolor libero a
                            ea itaque natus.
                        </h3>
                    </div>{" "}
                    <Image
                        className="rounded-xl"
                        src="/voiceRecognition.jpg"
                        width={300}
                        height={300}
                        alt="Voice Recognition"
                    />
                </div>
            </Container>
        </div>
    )
}

export default SmartVoice
