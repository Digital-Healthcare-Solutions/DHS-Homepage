import Nav from "./nav"
import { Footer } from "./footer"

const NavLayout = ({ children }: { children: React.ReactNode }) => {
    const data = [
        {
            title: "Features",
            links: [
                {
                    label: "AI Generated Notes",
                    link: "/product/echo"
                },

                {
                    label: "Customizable Intake Forms",
                    link: "/product/smart-form"
                }
            ]
        },

        {
            title: "About",
            links: [
                {
                    label: "Pricing",
                    link: "/pricing"
                },
                {
                    label: "Privacy Policy",
                    link: "/privacy-policy"
                },
                { label: "Terms of Service", link: "/terms-of-service" }
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
                    link: "/#request-demo"
                },

                {
                    label: "Contact us",
                    link: "/#contact"
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

export default NavLayout
