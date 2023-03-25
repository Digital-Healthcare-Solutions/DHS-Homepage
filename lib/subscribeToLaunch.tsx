export const subscribeToLaunch = async (
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
    return data
}
