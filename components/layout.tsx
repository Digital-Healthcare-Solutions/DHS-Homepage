import { Footer } from "./mantine-Components/footer"
import Nav from "./page-Components/nav"

const Layout = ({ children }) => {
    const data = [
        // {
        //     title: "Product",
        //     links: [
        //         {
        //             label: "About",
        //             link: "/product"
        //         },
        //         {
        //             label: "Features",
        //             link: "/product/features"
        //         }
        //     ]
        // },

        {
            title: "About",
            links: [
                {
                    label: "Team",
                    link: "/about-us"
                },
                {
                    label: "Features",
                    link: "/product"
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
                    label: "Careers",
                    link: "#"
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
