import { Container } from "@mantine/core"
import React from "react"

const Terms = () => {
    return (
        <div className="py-14">
            <Container>
                <h1 className="text-center text-2xl underline underline-offset-4 pb-5">
                    Terms of Service
                </h1>
                <div>
                    <div className="pb-3">
                        These Terms of Service ("Terms") govern your use of
                        Digital Healthcare Solutions and its related services,
                        provided by Digital Healthcare Solutions ("we," "us," or
                        "our"). By accessing or using the Digital Healthcare
                        Solutions platform, you agree to be bound by these
                        Terms.
                    </div>
                    <div className="pb-3">
                        <h2 className="text-center text-lg">
                            Acceptance of Terms{" "}
                        </h2>
                        By accessing or using Digital Healthcare Solutions, you
                        affirm that you are of legal age and have the capacity
                        to enter into this agreement. If you are accessing or
                        using the platform on behalf of an organization, you
                        represent and warrant that you have the authority to
                        bind that organization to these Terms.
                    </div>{" "}
                    <div className="pb-3">
                        <h2 className="text-center text-lg">
                            User Responsibilities
                        </h2>
                        <h3 className="">a. Account Creation:</h3> You may need
                        to create an account to use certain features of Digital
                        Healthcare Solutions. You agree to provide accurate and
                        complete information during the registration process and
                        to keep your account credentials secure.
                        <h3 className="pt-1">b. User Content: </h3>You, as a
                        user, are solely responsible for complying with all
                        applicable laws and regulations, including the Health
                        Insurance Portability and Accountability Act (HIPAA). By
                        posting HIPAA-protected content on Digital Healthcare
                        Solutions, you represent and warrant that you have
                        obtained the necessary consents and authorizations from
                        patients or individuals involved, as required by HIPAA,
                        and that you will handle and protect this information in
                        compliance with HIPAA regulations. You acknowledge and
                        understand that Digital Healthcare Solutions will act as
                        a business associate and will enter into a separate
                        Business Associate Agreement with you to establish the
                        obligations and responsibilities of each party in
                        accordance with HIPAA.
                        <h3 className="pt-1"> c. Prohibited Conduct: </h3>
                        You agree not to engage in any of the following
                        activities:
                        <ul className="list-disc list-inside">
                            <li>
                                Using Digital Healthcare Solutions for any
                                illegal or unauthorized purpose.
                            </li>
                            <li>
                                {" "}
                                Violating any applicable laws or regulations,
                                including HIPAA regulations.
                            </li>
                            <li>Impersonating any person or entity.</li>
                            <li>
                                Interfering with or disrupting the functionality
                                of Digital Healthcare Solutions.
                            </li>
                            <li>
                                Uploading or transmitting any malicious code or
                                harmful content.
                            </li>
                            <li>
                                Collecting or harvesting personal information of
                                other users.
                            </li>
                            <li>
                                Engaging in any activity that may adversely
                                affect the performance or security of Digital
                                Healthcare Solutions.
                            </li>
                        </ul>
                    </div>
                    <div className="pb-3">
                        <h2 className="text-center text-lg">
                            Intellectual Property
                        </h2>
                        <h3>a. Ownership:</h3> Digital Healthcare Solutions and
                        all its associated content, including but not limited to
                        text, graphics, logos, and software, are the
                        intellectual property of Digital Healthcare Solutions or
                        its licensors. These Terms do not grant you any rights
                        to use our trademarks, service marks, or copyrighted
                        materials without prior written consent.{" "}
                        <h3 className="pt-1">b. Feedback:</h3> We welcome any
                        feedback or suggestions you provide regarding Digital
                        Healthcare Solutions. By submitting feedback, you grant
                        us the right to use and incorporate it into our products
                        or services without any obligation to compensate you.
                    </div>
                    <div className="pb-3">
                        <h2 className="text-center text-lg">
                            Limitation of Liability
                        </h2>
                        To the extent permitted by law, Digital Healthcare
                        Solutions and its affiliates, officers, directors,
                        employees, and agents shall not be liable for any
                        direct, indirect, incidental, consequential, or special
                        damages arising out of or in connection with your use of
                        Digital Healthcare Solutions, even if we have been
                        advised of the possibility of such damages.
                    </div>
                    <div className="pb-3">
                        <h2 className="text-center text-lg">
                            Modifications and Termination
                        </h2>
                        We reserve the right to modify, suspend, or terminate
                        Digital Healthcare Solutions or any part of it at any
                        time without prior notice. We may also update these
                        Terms from time to time, and your continued use of
                        Digital Healthcare Solutions after any modifications
                        shall constitute your acceptance of the updated Terms.
                    </div>
                    <div className="pb-12">
                        <h2 className="text-center text-lg">
                            Governing Law and Dispute Resolution
                        </h2>
                        These Terms shall be governed by and construed in
                        accordance with the laws of The United States of
                        America. Any disputes arising out of or relating to
                        these Terms shall be resolved through arbitration in
                        accordance with the rules of the American Arbitration
                        Association (AAA), held in the state of Mississippi.
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Terms
