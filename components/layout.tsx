import { Footer } from "./mantine-Components/footer"
import Nav from "./page-Components/nav"

const Layout = ({ children }) => {
    const data = [
        {
            title: "Product",
            links: [
                {
                    label: "Care Plans",
                    link: "/product/smart-plan"
                },
                {
                    label: "Call Center",
                    link: "/product/intellicall"
                },
                {
                    label: "Dictation ",
                    link: "/product/smart-voice"
                }
                // {
                //     label: "Prior Authorization",
                //     link: "/product/features"
                // },
                // {
                //     label: "Online Paperwork",
                //     link: "/product/features"
                // }
            ]
        },

        {
            title: "About",
            links: [
                {
                    label: "Team",
                    link: "/about-us"
                },
                {
                    label: "Features",
                    link: "/product/demos"
                },
                // {
                //     label: "Demo",
                //     link: "/product/demo"
                // },
                {
                    label: "Pricing",
                    link: "/pricing"
                }
            ]
        },
        {
            title: "Learn More",
            links: [
                {
                    label: "Blog",
                    link: "/blog"
                },
                {
                    label: "Launch list",
                    link: "/product/smart-plan#launch-list"
                },

                {
                    label: "Contact us",
                    link: "/#contact"
                }
                // {
                //     label: "Releases",
                //     link: "#"
                // }
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
