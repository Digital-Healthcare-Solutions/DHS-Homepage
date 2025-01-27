import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import React from "react"

const UserReviews = () => {
  return (
    <div className="py-20">
      <h1 className="text-2xl md:text-5xl pb-12 flex items-center justify-center font-bold">
        See what our users have to say
      </h1>
      <InfiniteMovingCards
        items={[
          {
            quote:
              "I am a physician and have tried several different AI transcription software programs. This software has been my favorite to work with. I really like how you are able to customize the type of note that is generated to your specifications.",
            name: "Dr. Hugh Muse",
            title: "Physician Direct Internal Medicine"
          },
          {
            quote:
              "This is a great product. It has helped us tremendously in our clinic. The support team is very responsive and helpful. I would recommend this product to anyone.",
            name: "Emily Jones",
            title: "Office Manager, Midsouth Neurology"
          },
          {
            quote:
              "I have been using this product for over a year and have been very pleased with the results. The customer service is excellent and the product is very user friendly. I would highly recommend this product to anyone.",
            name: "Dr. John Doe",
            title: "Physician, Family Medicine"
          }
        ]}
        pauseOnHover={true}
        speed="normal"
      />
      <InfiniteMovingCards
        items={[
          {
            quote:
              "I am a physician and have tried several different AI transcription software programs. This software has been my favorite to work with. I really like how you are able to customize the type of note that is generated to your specifications.",
            name: "Dr. Hugh Muse",
            title: "Physician Direct Internal Medicine"
          },
          {
            quote:
              "This is a great product. It has helped us tremendously in our clinic. The support team is very responsive and helpful. I would recommend this product to anyone.",
            name: "Emily Jones",
            title: "Office Manager, Midsouth Neurology"
          },
          {
            quote:
              "I have been using this product for over a year and have been very pleased with the results. The customer service is excellent and the product is very user friendly. I would highly recommend this product to anyone.",
            name: "Dr. John Doe",
            title: "Physician, Family Medicine"
          }
        ]}
        pauseOnHover={true}
        speed="normal"
        direction="right"
      />
    </div>
  )
}

export default UserReviews
