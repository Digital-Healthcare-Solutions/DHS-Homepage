import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Axon AI | Terms of Service",
    description:
        "By accessing or using Axon AI, you agree to be bound by these Terms of Service. Learn more about your responsibilities, intellectual property rights, and dispute resolution.",
    keywords:
        "terms of service, terms, service, agreement, user responsibilities, intellectual property, disclaimer, limitation of liability, indemnification, modifications, termination, governing law, dispute resolution, severability, entire agreement, contact information"
}

const Terms = () => {
    return (
        <div className="py-14">
            <main className="max-w-3xl mx-auto px-5 md:px-0">
                <h1 className="text-center text-4xl font-bold underline underline-offset-4 pb-4">
                    Terms of Service
                </h1>

                <section className="space-y-6">
                    <p>
                        These Terms of Service ("Terms") govern your use of Axon
                        AI (getaxon.ai) and its related services, provided by
                        Digital Healthcare Solutions ("we," "us," or "our"). By
                        accessing or using the Axon AI platform, you agree to be
                        bound by these Terms.
                    </p>

                    <h2 className="text-2xl font-semibold">
                        1. Acceptance of Terms
                    </h2>
                    <p>
                        By accessing or using Axon AI, you affirm that you are
                        of legal age and have the capacity to enter into this
                        agreement. If you are accessing or using the platform on
                        behalf of an organization, you represent and warrant
                        that you have the authority to bind that organization to
                        these Terms.
                    </p>

                    <h2 className="text-2xl font-semibold">
                        2. User Responsibilities
                    </h2>

                    <div>
                        <h3 className="text-xl font-semibold">
                            a. Account Creation:
                        </h3>
                        <p>
                            You may need to create an account to use certain
                            features of Axon AI. You agree to provide accurate
                            and complete information during the registration
                            process and to keep your account credentials secure.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">
                            b. User Content:
                        </h3>
                        <p>
                            You are solely responsible for complying with all
                            applicable laws and regulations, including the
                            Health Insurance Portability and Accountability Act
                            (HIPAA). By posting HIPAA-protected content on Axon
                            AI, you represent and warrant that you have obtained
                            the necessary consents and authorizations from
                            patients or individuals involved, as required by
                            HIPAA, and that you will handle and protect this
                            information in compliance with HIPAA regulations.
                            You acknowledge and understand that Digital
                            Healthcare Solutions will act as a business
                            associate and will enter into a separate Business
                            Associate Agreement with you upon request to
                            establish the obligations and responsibilities of
                            each party in accordance with HIPAA. You may find
                            the BAA request form in the settings page of your
                            account.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">
                            c. Prohibited Conduct:
                        </h3>
                        <p>
                            You agree not to engage in any of the following
                            activities:
                        </p>
                        <ul className="list-disc list-inside pl-5">
                            <li>
                                Using Axon AI for any illegal or unauthorized
                                purpose.
                            </li>
                            <li>
                                Violating any applicable laws or regulations,
                                including HIPAA regulations.
                            </li>
                            <li>Impersonating any person or entity.</li>
                            <li>
                                Interfering with or disrupting the functionality
                                of Axon AI.
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
                                affect the performance or security of Axon AI.
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-2xl font-semibold">
                        3. Intellectual Property
                    </h2>

                    <div>
                        <h3 className="text-xl font-semibold">a. Ownership:</h3>
                        <p>
                            Axon AI and all its associated content, including
                            but not limited to text, graphics, logos, and
                            software, are the intellectual property of Digital
                            Healthcare Solutions or its licensors. These Terms
                            do not grant you any rights to use our trademarks,
                            service marks, or copyrighted materials without
                            prior written consent.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">b. Feedback:</h3>
                        <p>
                            We welcome any feedback or suggestions you provide
                            regarding Axon AI. By submitting feedback, you grant
                            us the right to use and incorporate it into our
                            products or services without any obligation to
                            compensate you.
                        </p>
                    </div>

                    <h2 className="text-2xl font-semibold">
                        4. Disclaimer of Warranties
                    </h2>
                    <p>
                        Axon AI is provided on an "as is" and "as available"
                        basis without warranties of any kind, either express or
                        implied. We do not warrant that the platform will be
                        uninterrupted, error-free, or completely secure.
                    </p>

                    <h2 className="text-2xl font-semibold">
                        5. Limitation of Liability
                    </h2>
                    <p>
                        To the extent permitted by law, Digital Healthcare
                        Solutions and its affiliates, officers, directors,
                        employees, and agents shall not be liable for any
                        direct, indirect, incidental, consequential, or special
                        damages arising out of or in connection with your use of
                        Axon AI, even if we have been advised of the possibility
                        of such damages.
                    </p>

                    <h2 className="text-2xl font-semibold">
                        6. Indemnification
                    </h2>
                    <p>
                        You agree to indemnify and hold harmless Digital
                        Healthcare Solutions and its affiliates, officers,
                        directors, employees, and agents from any claims,
                        liabilities, damages, losses, or expenses, including
                        reasonable attorneys' fees, arising out of or relating
                        to your use of Axon AI or violation of these Terms.
                    </p>

                    <h2 className="text-2xl font-semibold">
                        7. Modifications and Termination
                    </h2>
                    <p>
                        We reserve the right to modify, suspend, or terminate
                        Axon AI or any part of it at any time without prior
                        notice. We may also update these Terms from time to
                        time, and your continued use of Axon AI after any
                        modifications shall constitute your acceptance of the
                        updated Terms.
                    </p>

                    <h2 className="text-2xl font-semibold">
                        8. Governing Law and Dispute Resolution
                    </h2>
                    <p>
                        These Terms shall be governed by and construed in
                        accordance with the laws of the United States of
                        America. Any disputes arising out of or relating to
                        these Terms shall be resolved through arbitration in
                        accordance with the rules of the American Arbitration
                        Association (AAA), held in the state of Mississippi.
                    </p>

                    <h2 className="text-2xl font-semibold">9. Severability</h2>
                    <p>
                        If any provision of these Terms is found to be
                        unenforceable or invalid, the remaining provisions shall
                        remain in full force and effect.
                    </p>

                    <h2 className="text-2xl font-semibold">
                        10. Entire Agreement
                    </h2>
                    <p>
                        These Terms constitute the entire agreement between you
                        and Digital Healthcare Solutions regarding your use of
                        Axon AI and supersede any prior agreements.
                    </p>

                    <h2 className="text-2xl font-semibold">
                        11. Contact Information
                    </h2>
                    <p>
                        If you have any questions or concerns about these Terms,
                        please contact us at{" "}
                        <a
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                            href="mailto:support@getaxon.ai"
                        >
                            support@getaxon.ai
                        </a>
                        .
                    </p>
                </section>
            </main>
        </div>
    )
}

export default Terms
