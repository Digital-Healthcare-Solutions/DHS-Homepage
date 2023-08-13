import Head from "next/head"
import { Footer } from "./mantine-Components/footer"
import Nav from "./page-Components/nav"

const Layout = ({ children }) => {
    const data = [
        {
            title: "Product",
            links: [
                {
                    label: "Clinic Connect",
                    link: "/product/clinic-connect"
                },
                {
                    label: "Call Center",
                    link: "/product/intellicall"
                },
                {
                    label: "Care Plans",
                    link: "/product/smart-plan"
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
                    label: "Request a Demo",
                    link: "/product/smart-plan#request-demo"
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
            <Head>
                <script id="mcjs">
                    {
                        //@ts-ignore
                        !(function (c, h, i, m, p) {
                            ;(m = c.createElement(h)),
                                (p = c.getElementsByTagName(h)[0]),
                                (m.async = 1),
                                (m.src = i),
                                p.parentNode.insertBefore(m, p)
                        })(
                            document,
                            "script",
                            "https://chimpstatic.com/mcjs-connected/js/users/1199c26ea58e1d8664b09730f/c963c98cd688240fb76253445.js"
                        )
                    }
                </script>
            </Head>
            <Nav />
            {children}
            <Footer data={data} />
        </div>
    )
}

export default Layout
