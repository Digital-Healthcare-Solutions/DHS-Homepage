import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Axon AI | Privacy Policy",
  description:
    "Learn how Axon AI collects, uses, and protects your personal information and Protected Health Information (PHI) in our Privacy Policy.",
  keywords:
    "privacy policy, data protection, data privacy, personal information, PHI, de-identified data, HIPAA, healthcare, Axon AI Privacy Policy"
}

const PrivacyPolicy = () => {
  return (
    <div className="py-14">
      <main className="max-w-3xl mx-auto px-5 md:px-0">
        <h1 className="text-center text-4xl font-bold underline underline-offset-4 pb-4">
          Privacy Policy
        </h1>

        <h2 className="text-center text-lg">
          Effective Date: September 23rd, 2026
        </h2>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 pb-8">
          Previous version effective June 12th, 2023.
        </p>

        <section className="space-y-6">
          <p>
            This Privacy Policy ("Policy") explains how Digital Healthcare
            Solutions ("we," "us," or "our"), operator of Axon AI, collects,
            uses, discloses, and protects the personal information of users
            ("you" or "user") of our healthcare app and related services. By
            accessing or using our app, you consent to the practices described
            in this Policy.
          </p>

          <p>
            Our customers are healthcare providers and practices ("Customers").
            When we handle Protected Health Information (PHI) on behalf of a
            Customer, we act as that Customer's business associate under the
            Health Insurance Portability and Accountability Act (HIPAA), and our
            handling of that PHI is governed by the Business Associate Agreement
            (BAA) between us and that Customer, in addition to this Policy.
            Where this Policy and a BAA conflict regarding PHI, the BAA
            controls.
          </p>

          <h3 className="text-2xl font-semibold">1. Information We Collect</h3>

          <div>
            <h4 className="text-xl font-semibold">a. Personal Information:</h4>
            <p>
              We may collect personal information that you provide to us, such
              as your name, contact information, professional credentials, and
              any other information you voluntarily submit through our app.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">
              b. Protected Health Information (PHI):
            </h4>
            <p>
              In providing our services, we may process PHI on behalf of our
              Customers, including patient communications (phone calls, text
              messages, and voicemails), recordings and transcripts of clinical
              encounters, faxed documents, forms, and other health-related data.
              We treat PHI with the utmost confidentiality and in compliance
              with HIPAA and other applicable laws.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">c. Usage Information:</h4>
            <p>
              We may collect non-personal information about your use of our app,
              such as device information, IP address, browser type, and usage
              statistics. This information is collected using cookies and
              similar technologies.
            </p>
          </div>

          <h3 className="text-2xl font-semibold">2. Use of Information</h3>

          <div>
            <h4 className="text-xl font-semibold">a. Provide Services:</h4>
            <p>
              We use the collected information to provide and improve our app
              and deliver the requested services, including facilitating secure
              communication between healthcare providers and patients, managing
              appointments, generating clinical documentation, and processing
              documents.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">b. Compliance with Laws:</h4>
            <p>
              We may use information to comply with applicable laws,
              regulations, and legal obligations, including those related to
              patient privacy and data security.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">
              c. Communication and Marketing:
            </h4>
            <p>
              We may use your contact information to communicate with you,
              respond to your inquiries, provide updates, and send
              administrative notifications related to our app and services. By
              signing up for any of our applications, demos, or services, you
              agree to receive marketing communications from us. You can opt out
              of marketing communications at any time by following the
              unsubscribe instructions in our emails or contacting us directly.
            </p>
          </div>

          <h3 className="text-2xl font-semibold">3. De-identified Data</h3>

          <div>
            <h4 className="text-xl font-semibold">
              a. Creation of De-identified Data:
            </h4>
            <p>
              Where a Customer has authorized us to do so in writing, we may
              de-identify PHI in accordance with HIPAA (45 C.F.R. § 164.514),
              using either the Safe Harbor method or the Expert Determination
              method. De-identified data is data from which individuals cannot
              reasonably be identified and is no longer PHI.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">
              b. Use and Licensing of De-identified Data:
            </h4>
            <p>
              With a Customer's prior written authorization, we may use, and
              license to third parties, de-identified data derived from that
              Customer's records. Recipients may use licensed de-identified data
              for their own purposes, including research, analytics, product
              development, and the development and training of artificial
              intelligence models, subject to the safeguards described below. We
              will not create, use, or license de-identified data derived from a
              Customer's records without that Customer's written authorization.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">c. Safeguards:</h4>
            <p>
              When we license de-identified data, we contractually prohibit
              recipients from attempting to re-identify any individual and from
              linking the data with other information for that purpose. We do
              not include audio recordings, voice data, or faxed documents in
              licensed de-identified data.
            </p>
          </div>

          <h3 className="text-2xl font-semibold">4. Sharing of Information</h3>

          <p>We do not sell PHI.</p>

          <div>
            <h4 className="text-xl font-semibold">a. Service Providers:</h4>
            <p>
              We may disclose PHI to our subcontractors, such as hosting
              providers, data processors, and other third-party service
              providers, who assist us in delivering our app and services. These
              subcontractors are bound by written agreements requiring them to
              protect the confidentiality and security of PHI as required by
              HIPAA.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">b. De-identified Data:</h4>
            <p>
              We may share de-identified data as described in Section 3.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">c. Legal Requirements:</h4>
            <p>
              We may disclose information when required by law or in response to
              valid legal requests, such as subpoenas or court orders.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold">d. Consent:</h4>
            <p>
              We may share your information with your explicit consent or as
              otherwise permitted by applicable laws and regulations.
            </p>
          </div>

          <h3 className="text-2xl font-semibold">
            5. Artificial Intelligence
          </h3>

          <p>
            We do not use PHI or other identifiable personal information to
            train artificial intelligence models. De-identified data licensed
            under Section 3 may be used by recipients to develop and train AI
            models.
          </p>

          <h3 className="text-2xl font-semibold">6. Data Security</h3>

          <p>
            We implement strict administrative, technical, and physical
            safeguards to protect personal information and PHI from unauthorized
            access, use, or disclosure. However, no data transmission or storage
            method is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h3 className="text-2xl font-semibold">7. Your Rights</h3>

          <p>
            You have certain rights regarding your personal information,
            including the right to access, update, and request the deletion of
            your information. You may exercise these rights by contacting us
            using the information below. Certain restrictions and exceptions may
            apply as required by law.
          </p>

          <p>
            <span className="font-semibold">Patients:</span> If you are a
            patient of one of our Customers, your health information is
            controlled by your healthcare provider. Please contact your provider
            directly to exercise your rights under HIPAA, including requests to
            access or amend your records.
          </p>

          <h3 className="text-2xl font-semibold">8. Children's Privacy</h3>

          <p>
            Our app is intended for use by healthcare professionals and is not
            directed toward individuals under the age of 18. We do not knowingly
            collect personal information directly from children. If you become
            aware that a child has provided us with personal information, please
            contact us and we will take steps to delete it.
          </p>

          <h3 className="text-2xl font-semibold">9. Changes to this Policy</h3>

          <p>
            We may update this Policy from time to time. We will notify
            Customers of material changes by email and by posting the updated
            Policy in our app before the changes take effect. We will not apply
            a material change in how we use PHI or de-identified data to
            information collected before the change without the affected
            Customer's written authorization.
          </p>

          <h3 className="text-2xl font-semibold">10. Contact Us</h3>

          <p>
            If you have any questions, concerns, or requests regarding this
            Policy or our data practices, please contact us at{" "}
            <a
              className="text-blue-600 dark:text-blue-400 hover:underline"
              href="mailto:support@digitalhealthcaresolutions.io"
            >
              support@digitalhealthcaresolutions.io
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  )
}

export default PrivacyPolicy
