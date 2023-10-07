import { Container } from "@mantine/core"

const PrivacyPolicy = () => {
    return (
        <div className="py-14">
            <Container>
                <h1 className="text-center text-2xl underline underline-offset-4 pb-1">
                    Privacy Policy
                </h1>

                <h2 className="text-center pb-5">
                    Effective Date: June 12th, 2023
                </h2>

                <p className="pb-3">
                    This Privacy Policy ("Policy") explains how Digital
                    Healthcare Solutions ("we," "us," or "our") collects, uses,
                    discloses, and protects the personal information of users
                    ("you" or "user") of our healthcare app and related
                    services. By accessing or using our app, you consent to the
                    practices described in this Policy.
                </p>

                <h3 className="text-lg pb-1">1. Information We Collect</h3>

                <h4>a. Personal Information:</h4>
                <p>
                    We may collect personal information that you provide to us,
                    such as your name, contact information, professional
                    credentials, and any other information you voluntarily
                    submit through our app.
                </p>

                <h4 className="pt-2">b. Protected Health Information (PHI):</h4>
                <p>
                    As a healthcare app, we may collect PHI that you choose to
                    share with us, including patient medical records, treatment
                    information, and other health-related data. We treat PHI
                    with the utmost confidentiality and in compliance with
                    applicable laws and regulations, including the Health
                    Insurance Portability and Accountability Act (HIPAA).
                </p>

                <h4 className="pt-2">c. Usage Information:</h4>
                <p>
                    We may collect non-personal information about your use of
                    our app, such as device information, IP address, browser
                    type, and usage statistics. This information is collected
                    using cookies and similar technologies.
                </p>

                <h3 className="text-lg pt-5">2. Use of Information</h3>

                <h4>a. Provide Services:</h4>
                <p>
                    We use the collected information to provide and improve our
                    healthcare app, personalize your experience, and deliver the
                    requested services to you. This includes facilitating secure
                    communication between healthcare providers and patients,
                    managing appointments, and accessing patient records.
                </p>

                <h4 className="pt-2">b. Compliance with Laws:</h4>
                <p>
                    We may use your information to comply with applicable laws,
                    regulations, and legal obligations, including those related
                    to patient privacy and data security.
                </p>

                <h4 className="pt-2">c. Communication:</h4>
                <p>
                    We may use your contact information to communicate with you,
                    respond to your inquiries, provide updates, and send
                    administrative notifications related to our app and
                    services.
                </p>

                <h3 className="pt-5 text-lg">3. Sharing of Information</h3>

                <h4 className="pt-2">a. Business Associates:</h4>
                <p>
                    We may disclose PHI to our trusted business associates, such
                    as hosting providers, data processors, or third-party
                    service providers, who assist us in delivering and improving
                    our app and services. These business associates are
                    contractually obligated to protect the confidentiality and
                    security of PHI.
                </p>

                <h4 className="pt-2">b. Legal Requirements:</h4>
                <p>
                    We may disclose personal information when required by law or
                    in response to valid legal requests, such as subpoenas or
                    court orders.
                </p>

                <h4 className="pt-2">c. Consent:</h4>
                <p>
                    We may share your information with your explicit consent or
                    as otherwise permitted by applicable laws and regulations.
                </p>

                <h3 className="pt-5 text-lg">4. Data Security</h3>

                <p>
                    We implement strict security measures to protect your
                    personal information and PHI from unauthorized access, use,
                    or disclosure. However, please note that no data
                    transmission or storage method is 100% secure, and we cannot
                    guarantee absolute security.
                </p>

                <h3 className="pt-5 text-lg">5. Your Rights</h3>

                <p>
                    You have certain rights regarding your personal information,
                    including the right to access, update, and request the
                    deletion of your information. You may exercise these rights
                    by contacting us using the information provided below.
                    Please note that certain restrictions and exceptions may
                    apply as required by law.
                </p>

                <h3 className="pt-5 text-lg">6. Children's Privacy</h3>

                <p>
                    Our app is intended for use by healthcare professionals and
                    is not directed towards individuals under the age of 18. We
                    do not knowingly collect personal information from children.
                    If you become aware that a child has provided us with
                    personal information, please contact us, and we will take
                    steps to delete the information.
                </p>

                <h3 className="pt-5 text-lg">7. Changes to this Policy</h3>

                <p>
                    We may update this Privacy Policy from time to time. We will
                    notify you of any material changes by posting the updated
                    Policy on our app. Your continued use of our app after the
                    effective date of the revised Policy constitutes your
                    acceptance of the changes.
                </p>

                <h3 className="pt-5 text-lg">8. Contact Us</h3>

                <p className="pb-12">
                    If you have any questions, concerns, or requests regarding
                    this Privacy Policy or our data practices, please contact us
                    at
                    <a
                        className="text-blue-600 dark:text-blue-500 hover:underline"
                        href="mailto:support@digitalhealthcaresolutions.io."
                    >
                        {" "}
                        support@digitalhealthcaresolutions.io.
                    </a>
                </p>
            </Container>
        </div>
    )
}

export default PrivacyPolicy
