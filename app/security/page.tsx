import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Axon AI | Security and Compliance",
    description:
        "Learn about the security measures and compliance practices we have in place to protect your data on Axon AI.",
    keywords:
        "security, compliance, HIPAA, data protection, data security, privacy, PHI, protected health information, BAA, encryption, access controls, audit logs, incident response, data retention, data deletion, user responsibilities, security updates, contact information"
}

const Security = () => {
    return (
        <div className="py-14">
            <main className="max-w-3xl mx-auto px-5 md:px-0">
                <h1 className="text-center text-4xl font-bold underline underline-offset-4 pb-4">
                    Security and Compliance
                </h1>

                <section className="space-y-6">
                    <p>
                        At Digital Healthcare Solutions LLC, we take the
                        security and privacy of your data seriously. Our
                        platform, Axon AI (getaxon.ai), is designed with robust
                        security measures to protect sensitive information,
                        including Protected Health Information (PHI) in
                        compliance with the Health Insurance Portability and
                        Accountability Act (HIPAA).
                    </p>

                    <h2 className="text-2xl font-semibold">
                        1. HIPAA Compliance
                    </h2>
                    <p>
                        We are committed to maintaining the confidentiality,
                        integrity, and availability of PHI. Our services are
                        designed to be fully compliant with HIPAA regulations,
                        and we have implemented administrative, physical, and
                        technical safeguards to protect your data.
                    </p>

                    <div>
                        <h3 className="text-xl font-semibold">
                            a. Business Associate Agreement (BAA)
                        </h3>
                        <p>
                            We enter into a Business Associate Agreement (BAA)
                            with all covered entities to outline our
                            responsibilities in handling PHI. The BAA ensures
                            that both parties understand and comply with HIPAA
                            requirements. You can request a BAA through the
                            settings page of your account.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">
                            b. Data Encryption
                        </h3>
                        <p>
                            All PHI is encrypted both in transit and at rest
                            using industry-standard encryption protocols. This
                            ensures that your data is secure from unauthorized
                            access during transmission and storage.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">
                            c. Access Controls
                        </h3>
                        <p>
                            We implement strict access controls to ensure that
                            only authorized personnel can access PHI. User
                            authentication mechanisms, including strong password
                            policies and multi-factor authentication, are in
                            place to prevent unauthorized access.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">d. Audit Logs</h3>
                        <p>
                            Our systems maintain detailed audit logs of all
                            access and actions performed on PHI. These logs are
                            regularly reviewed to detect and respond to any
                            unauthorized activities.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">
                            e. Employee Training
                        </h3>
                        <p>
                            All employees undergo regular training on HIPAA
                            compliance and data security best practices. This
                            ensures that everyone involved in handling PHI is
                            aware of their responsibilities.
                        </p>
                    </div>

                    <h2 className="text-2xl font-semibold">
                        2. Data Security Measures
                    </h2>
                    <p>
                        In addition to HIPAA-specific measures, we implement
                        comprehensive security protocols to protect all user
                        data.
                    </p>

                    <div>
                        <h3 className="text-xl font-semibold">
                            a. Secure Infrastructure
                        </h3>
                        <p>
                            Our servers are hosted in secure data centers that
                            comply with industry standards for physical security
                            and environmental controls.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">
                            b. Regular Security Assessments
                        </h3>
                        <p>
                            We conduct regular security assessments, including
                            penetration testing and vulnerability scans, to
                            identify and address potential security risks.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">
                            c. Incident Response Plan
                        </h3>
                        <p>
                            We have a robust incident response plan in place to
                            quickly address and mitigate any security incidents
                            or breaches, ensuring minimal impact on our users.
                        </p>
                    </div>

                    <h2 className="text-2xl font-semibold">
                        3. User Responsibilities
                    </h2>
                    <p>
                        While we take extensive measures to protect your data,
                        security is a shared responsibility. Users are expected
                        to take appropriate steps to safeguard their account
                        credentials and comply with all applicable laws and
                        regulations, including HIPAA.
                    </p>

                    <div>
                        <h3 className="text-xl font-semibold">
                            a. Account Security
                        </h3>
                        <p>
                            Users should use strong, unique passwords for their
                            accounts and keep their login information
                            confidential. Notify us immediately if you suspect
                            any unauthorized access to your account.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">
                            b. PHI Handling
                        </h3>
                        <p>
                            Users are responsible for ensuring that any PHI
                            uploaded or shared on Axon AI complies with HIPAA
                            regulations. This includes obtaining necessary
                            consents and authorizations from patients.
                        </p>
                    </div>

                    <h2 className="text-2xl font-semibold">
                        4. Data Retention and Deletion
                    </h2>
                    <p>
                        We retain user data, including PHI, only as long as
                        necessary to provide our services or as required by law.
                        Users can request deletion of their data in accordance
                        with our data retention policies.
                    </p>

                    <h2 className="text-2xl font-semibold">
                        5. Updates to Security Practices
                    </h2>
                    <p>
                        We continually update our security practices to adapt to
                        new threats and regulatory requirements. Users will be
                        notified of significant changes to our security policies
                        or procedures.
                    </p>

                    <h2 className="text-2xl font-semibold">
                        6. Contact Information
                    </h2>
                    <p>
                        If you have any questions or concerns about our security
                        practices or HIPAA compliance, please contact us at{" "}
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

export default Security
