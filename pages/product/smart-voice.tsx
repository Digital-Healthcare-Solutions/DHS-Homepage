import {
    Container,
    Loader,
    Textarea,
    TextInput,
    ThemeIcon,
    Title
} from "@mantine/core"
import Image from "next/image"
import { BsArrowDown, BsArrowRight, BsMic } from "react-icons/bs"
import { useEffect, useState } from "react"
import { showNotification } from "@mantine/notifications"
import { useFormik } from "formik"
import * as Yup from "yup"
import ButtonSecondary from "../../components/UI-Components/button-secondary"
import ButtonPrimary from "../../components/UI-Components/button-primary"
import Link from "next/link"
import styles from "../../styles/circle.module.css"
import Head from "next/head"
import FeatureHeaderSparkle from "../../components/page-Components/featureHeaderSparkle"

const SmartVoice = () => {
    const [loading, setLoading] = useState(false)
    const [recording, setRecording] = useState(false)
    const [text, setText] = useState("")
    const [error, setError] = useState("")
    const [width, setWidth] = useState(0)

    console.log(window.innerWidth)
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            businessName: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Required"),
            email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            businessName: Yup.string().required("Required")
        }),
        onSubmit: () => {
            subscribeToLaunch(
                formik.values.name,
                formik.values.email,
                formik.values.businessName
            )
        }
    })

    const APIcount = localStorage.getItem("transcriptionCount")

    useEffect(() => {
        if (APIcount === null) {
            localStorage.setItem("transcriptionCount", "0")
        }
        APIcount && recording
            ? localStorage.setItem(
                  "transcriptionCount",
                  `${parseInt(localStorage.getItem("transcriptionCount")) + 1}`
              )
            : parseInt(APIcount) > 0
            ? localStorage.setItem("transcriptionCount", APIcount)
            : localStorage.setItem("transcriptionCount", "0")
    }, [recording])

    async function getLocalStream() {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            console.log("getUserMedia supported.")
            let options: any
            let type: any
            let fileName: any
            if (MediaRecorder.isTypeSupported("audio/mp4")) {
                options = { mimeType: "audio/mp4;codecs=mp4a" }
                type = "audio/mp4;codecs=mp4a"
                fileName = "audio.mp4"
            } else if (MediaRecorder.isTypeSupported("audio/webm")) {
                options = { mimeType: "audio/webm" }
                type = "audio/webm"
                fileName = "audio.webm"
            } else {
                alert("no suitable mimetype found for this device")
            }
            navigator.mediaDevices
                .getUserMedia({ audio: true, video: false })
                .then((stream) => {
                    const mediaRecorder = new MediaRecorder(stream, options)

                    console.log(mediaRecorder)
                    const chunks = []
                    mediaRecorder.addEventListener("dataavailable", (event) => {
                        chunks.push(event.data)
                        console.log(chunks)
                        const audioData = new Blob(chunks, {
                            type: type
                        })
                        const formData = new FormData()
                        formData.append("file", audioData, fileName)

                        mediaRecorder.onstop = () => {
                            console.log("stopped")
                            fetchAudio(formData)
                        }
                        mediaRecorder.onerror = (e) => {
                            alert(e)
                        }
                    })
                    mediaRecorder.start(500)
                    console.log(mediaRecorder)

                    document
                        .getElementById("stop")
                        .addEventListener("click", function stopClick() {
                            mediaRecorder.stop()
                            console.log(mediaRecorder)
                            setRecording(false)
                            this.removeEventListener("click", stopClick)
                        })
                })
                .catch((err) => {
                    alert("The following error occured: " + err)
                })
        } else {
            alert("Your browser does not support this feature")
        }
    }

    async function fetchAudio(audiodata: any) {
        if (parseInt(APIcount) >= 20) {
            showNotification({
                title: "Error",
                message:
                    "You have reached your limit of 20 transcriptions. You should sign up if you need some more! ;)",
                color: "red",
                autoClose: 5000
            })
            return
        }
        setLoading(true)
        const response = await fetch(
            "https://xmks-s250-ypw0.n7.xano.io/api:PkXylm3k/homepage/dictation",
            {
                method: "POST",
                body: audiodata
            }
        )

        const data = await response.json()
        console.log(data)
        if (response.ok) {
            setText((prevTranscription) => prevTranscription + data + " ")
            setLoading(false)
        }
        if (!response.ok) {
            setError(data.message)
            showNotification({
                title: "Error",
                message: data.message,
                color: "red",
                autoClose: 5000
            })
            setRecording(false)
        }
    }

    const handleRecord = () => {
        setRecording(true)
        getLocalStream()
    }

    const subscribeToLaunch = async (
        name: string,
        email: string,
        business: string
    ) => {
        const res = await fetch(
            "https://xmks-s250-ypw0.n7.xano.io/api:5iYyLrKQ/subscribeToLaunchList",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    business
                })
            }
        )
        const data = await res.json()
        if (res.ok) {
            showNotification({
                title: "Success",
                message:
                    "Thanks for your interest! A representative will be in touch soon.",
                color: "green",
                autoClose: 5000
            })
            formik.resetForm()
        } else {
            showNotification({
                title: "Error",
                message: data.message,
                color: "red",
                autoClose: 5000
            })
        }
        return data
    }

    return (
        <div className="py-10 ">
            <Head>
                <title>
                    SmartVoice | Digital Healthcare Solutions | Smart Dictation
                    Software
                </title>
                <meta
                    name="description"
                    content="SmartVoice is a dictation tool that allows for easy and accurate transcriptions of medical notes. It is a HIPAA compliant, secure, and easy to use tool that can be used by doctors, nurses, and other healthcare professionals."
                />
                <meta
                    name="keywords"
                    content="smartvoice, smart voice, smartvoice dictation, smart voice dictation, smartvoice transcription, smart voice transcription, smartvoice dictation software, smart voice dictation software, smartvoice transcription software, smart voice transcription software, smartvoice healthcare, smart voice healthcare, smartvoice healthcare solutions, smart voice healthcare solutions, smartvoice digital healthcare, free dication software, free dictation software, free transcription software, free dictation software for doctors, free dictation software for nurses, free dictation software for healthcare professionals, free dictation software for healthcare, free dictation software for medical professionals, dictations, medical dictations, medical dictation software, medical dictation software for doctors, medical dictation software for nurses, medical dictation software for healthcare professionals, medical dictation software for healthcare, medical dictation software for medical professionals"
                />
                <meta name="author" content="SmartVoice" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <Container size="lg">
                <FeatureHeaderSparkle title="SmartVoice" />

                <section className="flex flex-col lg:flex-row items-start gap-20">
                    <div className="flex flex-col items-center justify-between gap-8">
                        <div className="text-lg max-w-lg">
                            <h2 className="text-blue-500 underline underline-offset-4 font-semibold">
                                The Problem :
                            </h2>
                            <h3>
                                Don't get stuck in the past with outdated
                                note-taking methods! Hand writing or typing
                                notes is slow, tedious, and error-prone, while
                                existing dictation tools can be complicated and
                                expensive. As a medical professional, you need a
                                solution that's both efficient and affordable.
                            </h3>
                        </div>{" "}
                        <Image
                            className="rounded-xl shadow-lg dark:shadow-gray-700"
                            src="/drTyping.jpg"
                            width={300}
                            height={300}
                            alt="Doctor typing on a laptop"
                            priority={true}
                        />
                    </div>
                    <div className="flex flex-col items-center justify-between gap-8 ">
                        <div className="text-lg max-w-lg">
                            <h2 className="text-blue-500 underline underline-offset-4 font-semibold">
                                Our Solution :
                            </h2>
                            <h3>
                                Our software uses advanced speech recognition
                                technology to transcribe your spoken words into
                                text in real time, eliminating the need for
                                manual note-taking or inelligible notes. With
                                SmartVoice, you can focus on what really
                                matters: providing quality patient care.
                            </h3>
                        </div>{" "}
                        <Image
                            className="rounded-xl shadow-lg dark:shadow-gray-700"
                            src="/voiceRecognition.jpg"
                            width={400}
                            height={400}
                            alt="Voice Recognition"
                            priority={true}
                        />
                    </div>
                </section>
                <div>
                    <h2 className="text-blue-500  font-semibold text-3xl text-center pt-20">
                        Try it out!
                    </h2>
                    {/* <p className="py-5 text-xs text-center">
                        Note: This demo implementation is limited to 20 attempts
                        per user. This demo is not HIPPA compliant and is not
                        intended for use in a clinical setting.
                    </p> */}
                    <div className="flex justify-center ">
                        <Textarea
                            disabled={parseInt(APIcount) > 20}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder={
                                recording
                                    ? "Recording..."
                                    : loading
                                    ? "Loading..."
                                    : parseInt(APIcount) > 20
                                    ? "All out of transcriptions!"
                                    : "Your transcript will appear here"
                            }
                            className="w-[66%] lg:mt-4"
                            minRows={4}
                            maxRows={10}
                            autosize={true}
                            description="Try your most difficult voice commands here! Even complicated medical terms! ( limited to 20 attempts per user. )"
                        />
                        {loading ? (
                            <div className="flex justify-end">
                                <Loader
                                    type="ThreeDots"
                                    color="#00BFFF"
                                    height={20}
                                    width={20}
                                    className="absolute -translate-x-5  translate-y-14 lg:translate-y-12"
                                />
                            </div>
                        ) : null}
                    </div>

                    {recording ? (
                        <section className="flex flex-row justify-center pt-6">
                            <div className={styles.item}></div>
                            <button
                                id="stop"
                                className={styles.circle3}
                                //   onClick={handleStopRecord}
                            >
                                <BsMic
                                    size={25}
                                    className=" text-blue-500 z-50"
                                />
                            </button>
                            <div
                                className={styles.circle}
                                style={{ animationDelay: "0s" }}
                            ></div>
                            <div
                                className={styles.circle}
                                style={{ animationDelay: "1s" }}
                            ></div>
                            <div className={styles.circle}></div>
                        </section>
                    ) : (
                        <section
                            className={
                                parseInt(APIcount) > 20
                                    ? "flex flex-row justify-center text-white z-50 hover:text-blue-500  pt-6 cursor-not-allowed"
                                    : "flex flex-row justify-center text-white z-50 hover:text-blue-500  pt-6"
                            }
                        >
                            <button
                                disabled={parseInt(APIcount) > 20 || loading}
                                className={styles.circle2}
                                onClick={handleRecord}
                            >
                                <BsMic size={25} />
                            </button>
                        </section>
                    )}
                    {/* <div className="flex justify-center mt-3">
                        {!recording ? (
                            <ThemeIcon
                                className={
                                    parseInt(APIcount) > 20
                                        ? "bg-gray-600 text-white hover:bg-gray-600 cursor-not-allowed"
                                        : "mt-5 hover:bg-white bg-blue-500 text-white hover:text-blue-500 cursor-pointer"
                                }
                                variant="filled"
                                size={50}
                                radius={100}
                                onClick={
                                    parseInt(APIcount) > 20
                                        ? () => {}
                                        : handleRecord
                                }
                            >
                                <BsMic size={22} />
                            </ThemeIcon>
                        ) : (
                            <ThemeIcon
                                className="mt-5 hover:bg-red-500 bg-white text-blue-500 hover:text-white cursor-pointer"
                                variant="filled"
                                size={50}
                                radius={100}
                                id="stop"
                            >
                                <BsMic size={22} />
                            </ThemeIcon>
                        )}
                    </div>*/}
                </div>

                <form
                    className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-20 my-24 bg-blue-500  rounded-xl px-0 py-8"
                    onSubmit={formik.handleSubmit}
                >
                    <Title
                        order={2}
                        sx={(theme) => ({
                            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
                            marginTop: "64px"
                        })}
                        className=" text-white font-black items-center justify-center flex flex-col h-full"
                    >
                        <span className="text-white text-4xl">
                            Interested ?
                        </span>{" "}
                        <div className="flex text-xl justify-center items-center pt-3 text-white">
                            Request a Demo
                            <BsArrowDown className="ml-2 block lg:hidden" />
                            <BsArrowRight className="ml-2 hidden lg:block" />
                        </div>
                        <p className="text-lg py-4 text-white">or</p>
                        <div className="flex justify-center">
                            <Link href="/#contact">
                                <ButtonSecondary
                                    onClick={() => console.log("clicked")}
                                    className="text-lg bg-white text-blue-500 hover:bg-neutral-200"
                                >
                                    Contact Us
                                </ButtonSecondary>
                            </Link>
                        </div>
                    </Title>
                    <div className="flex flex-col justify-center bg-white dark:bg-neutral-800 pb-8 py-6 px-16 rounded-2xl">
                        <TextInput
                            label="Name"
                            placeholder="Your name"
                            mt="md"
                            name="name"
                            withAsterisk
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && formik.errors.name}
                        />
                        <TextInput
                            label="Email"
                            placeholder="Your email"
                            name="email"
                            mt="md"
                            withAsterisk
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && formik.errors.email}
                        />{" "}
                        <TextInput
                            label="Business Name"
                            placeholder="Your Business"
                            name="businessName"
                            mt="md"
                            withAsterisk
                            value={formik.values.businessName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={
                                formik.touched.businessName &&
                                formik.errors.businessName
                            }
                        />{" "}
                        <div className="flex justify-center pt-5">
                            <ButtonPrimary
                                type="submit"
                                onClick={() => console.log("clicked")}
                                className=""
                            >
                                Submit
                            </ButtonPrimary>
                        </div>
                    </div>
                </form>
            </Container>
        </div>
    )
}

export default SmartVoice
