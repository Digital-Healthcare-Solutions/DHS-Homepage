async function FetchAudio(req, res) {
    const { audiodata } = req.body
    const response = await fetch(
        "https://api.openai.com/v1/audio/transcriptions",
        {
            method: "POST",
            headers: {
                Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`
            },
            body: audiodata
        }
    )
    const data = await response.json()
    console.log(req.body)
    console.log(data)
    res.status(200).json(data)
}

export default FetchAudio
