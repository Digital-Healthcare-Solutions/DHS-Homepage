import React from "react"
import { Button } from "@mantine/core"

const Product = () => {
    return (
        <div>
            {" "}
            <Button
                // onClick={() => setOneTimePayment(false)}
                variant="filled"
                color="blue"
                // className={
                //     oneTimePayment
                //         ? ""
                //         : "text-black dark:text-white bg-blue-200"
                // }
            >
                Monthly
            </Button>
            <Button
                // onClick={() => setOneTimePayment(true)}
                variant="light"
                color="blue"
                // className={
                //     oneTimePayment
                //         ? "text-black dark:text-white bg-blue-200 dark:bg-blue-500"
                //         : ""
                // }
            >
                Yearly
            </Button>
        </div>
    )
}

export default Product
