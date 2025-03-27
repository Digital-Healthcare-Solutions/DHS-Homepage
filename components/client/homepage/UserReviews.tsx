import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"
import React from "react"

const UserReviews = ({
  rows = 1,
  copy,
  color = "blue"
}: {
  rows?: number
  copy?: string
  color?: "green" | "blue" | "purple"
}) => {
  return (
    <div className="py-20">
      <h1 className="text-2xl md:text-5xl pb-12 flex items-center justify-center font-bold">
        {copy ?? "See what our users have to say"}
      </h1>
      {rows === 1 ? (
        <InfiniteMovingCards
          color={color}
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
                "I have seen an unbelievable increase in my free time since I started using this product. I am able to see more patients and spend more time with my family. I would highly recommend this product to anyone.",
              name: "Dr. William Owens",
              title: "Neurologist"
            }
          ]}
          pauseOnHover={false}
          speed="normal"
        />
      ) : (
        Array.from({ length: 2 }).map((_, i) => (
          <InfiniteMovingCards
            color={color}
            key={i}
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
                  "I have seen an unbelievable increase in my free time since I started using this product. I am able to see more patients and spend more time with my family. I would highly recommend this product to anyone.",
                name: "Dr. William Owens",
                title: "Neurologist"
              }
            ]}
            pauseOnHover={false}
            speed="normal"
            direction={i % 2 === 0 ? "left" : "right"}
          />
        ))
      )}
    </div>
  )
}

export default UserReviews
