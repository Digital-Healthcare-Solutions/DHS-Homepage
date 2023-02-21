import { Container } from "@mantine/core"
import React from "react"
import AboutAvatar from "../../components/mantine-Components/aboutAvatar"

const AboutUs = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 m-2 sm:m-10 lg:m-20">
            <AboutAvatar
                avatar="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
                name="Jacob Owens"
                title="Co-Founder"
                email="jacobowens@smart-plan.io"
            />
            <AboutAvatar
                avatar="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80"
                name="William E Owens, MD"
                title="Co-Founder"
                email="jacobowens@smart-plan.io"
            />{" "}
        </div>
    )
}

export default AboutUs
