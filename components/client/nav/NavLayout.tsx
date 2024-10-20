import Nav from "./nav"
import { Footer } from "./footer"

const NavLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <Nav />
            {children}
            <Footer />
        </div>
    )
}

export default NavLayout
