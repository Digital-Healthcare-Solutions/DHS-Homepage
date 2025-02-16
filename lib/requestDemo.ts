export const requestDemo = async ({
  name,
  email,
  business
}: {
  name: string
  email: string
  business: string
}) => {
  try {
    const res = await fetch(
      "https://api.digitalhealthcaresolutions.io/api:5iYyLrKQ/request-demo",
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
    if (!res.ok) {
      throw new Error(data.message || "An error occurred")
    }
    return data
  } catch (error: any) {
    throw new Error(error)
  }
}
