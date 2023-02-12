import { Footer } from "./mantine-Components/footer"
import Nav from "./page-Components/nav"

const Layout = ({ children }) => {
    const data = [
        {
            title: "About",
            links: [
                {
                    label: "Features",
                    link: "#"
                },
                {
                    label: "Pricing",
                    link: "#"
                },
                {
                    label: "Support",
                    link: "#"
                },
                {
                    label: "Forums",
                    link: "#"
                }
            ]
        },
        {
            title: "Project",
            links: [
                {
                    label: "Contribute",
                    link: "#"
                },
                {
                    label: "Media assets",
                    link: "#"
                },
                {
                    label: "Changelog",
                    link: "#"
                },
                {
                    label: "Releases",
                    link: "#"
                }
            ]
        },
        {
            title: "Community",
            links: [
                {
                    label: "Join Discord",
                    link: "#"
                },
                {
                    label: "Follow on Twitter",
                    link: "#"
                },
                {
                    label: "Email newsletter",
                    link: "#"
                },
                {
                    label: "GitHub discussions",
                    link: "#"
                }
            ]
        }
    ]

    return (
        <div>
            <Nav />
            {children}
            <Footer data={data} />
        </div>
    )
}

export default Layout
