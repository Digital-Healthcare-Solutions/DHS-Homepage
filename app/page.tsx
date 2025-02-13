import React from "react"
import { Hero } from "../components/client/homepage/Hero"
import RequestDemo from "../components/client/forms/requestDemo"
import FAQ from "@/components/client/homepage/FAQ"
import ContactUs from "@/components/client/homepage/ContactUs"
import { ProductDemoVideo } from "@/components/client/homepage/ProductDemoVideo"
import EchoSettingsVideo from "@/components/client/homepage/EchoSettingsVideo"
import FeatureHighlights from "@/components/client/homepage/FeatureHighlights"
import InviteUsers from "@/components/client/homepage/InviteUsers"
import Devices from "@/components/client/homepage/Devices"
import InteractiveDragandDropDemo from "@/components/client/interactive/settings-example"
import HeroV2 from "@/components/client/homepage/HeroV2"
import PlatformOverview from "@/components/client/homepage/PlatformOverview"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import UserReviews from "@/components/client/homepage/UserReviews"

const Page = () => {
  return (
    <div>
      {/* <Hero /> */}
      <HeroV2 />
      <FeatureHighlights />
      <ProductDemoVideo />
      <PlatformOverview />
      <Devices />
      {/* <UserReviews /> */}
      <RequestDemo />
      <FAQ />
    </div>
  )
}

export default Page
