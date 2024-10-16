export const getCustomQuote = async ({
    name,
    email,
    business,
    providers,
    features
}: {
    name: string
    email: string
    business: string
    providers: number
    features: string[]
}) => {
    try {
        const res = await fetch(
            "https://api.digitalhealthcaresolutions.io/api:5iYyLrKQ/customQuote",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    business,
                    providers,
                    features
                })
            }
        )
        const data = await res.json()
        if (!res.ok) {
            throw new Error(data.message || "An error occurred")
        }
        return data
    } catch (error: any) {
        throw new Error(error)
    }
}
