import { useEffect, useRef } from "react"
import Prism from "prismjs"
import "prismjs/themes/prism-twilight.css"
import "prismjs/components/prism-javascript"
import "prismjs/components/prism-python"

const CodeBlock = ({ children, code }) => {
    const ref = useRef(null)

    useEffect(() => {
        // Highlight syntax once the component mounts
        if (ref.current) {
            Prism.highlightElement(ref.current)
        }
    }, [ref])

    return (
        <pre className=" p-4 my-5 md:my-8 overflow-x-auto">
            <code ref={ref} className={"language-python"}>
                {children}
            </code>
        </pre>
    )
}

export default CodeBlock
