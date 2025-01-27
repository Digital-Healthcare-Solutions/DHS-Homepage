import React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Printer,
  Shield,
  Clock,
  DollarSign,
  Search,
  BarChart,
  Smartphone,
  FileText,
  Check,
  ArrowRight
} from "lucide-react"

const EFaxPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-neutral-950 dark:to-neutral-900">
      {/* Hero Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                Transform Your Practice with AI-Powered eFax
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Say goodbye to paper faxes and hello to intelligent document
                processing. Our HIPAA-compliant eFax solution automates your
                workflow while ensuring security and compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                >
                  Start Free Trial
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-indigo-200 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-700 dark:text-indigo-400 dark:hover:bg-indigo-950"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl transform rotate-3 opacity-10 dark:opacity-20"></div>
              <Card className="p-8 relative backdrop-blur-sm bg-white/80 dark:bg-neutral-900/80 border-0 shadow-xl rounded-3xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Shield className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                    <p className="text-gray-600 dark:text-gray-300">
                      HIPAA Compliant
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                    <p className="text-gray-600 dark:text-gray-300">
                      80% Faster Processing
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <DollarSign className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                    <p className="text-gray-600 dark:text-gray-300">
                      Reduce Costs
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Comprehensive eFax Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: Search,
                title: "Smart Document Processing",
                features: [
                  "AI-powered document classification",
                  "Automatic routing to correct departments",
                  "OCR with 99.9% accuracy",
                  "Intelligent data extraction"
                ]
              },
              {
                icon: Shield,
                title: "Security & Compliance",
                features: [
                  "HIPAA, HITECH compliant",
                  "End-to-end encryption",
                  "Detailed audit logs",
                  "Role-based access control"
                ]
              },
              {
                icon: Smartphone,
                title: "Mobile Access",
                features: [
                  "Send/receive faxes from any device",
                  "Mobile app for iOS and Android",
                  "Digital signatures on the go",
                  "Real-time notifications"
                ]
              },
              {
                icon: FileText,
                title: "Document Management",
                features: [
                  "Searchable document archive",
                  "Custom folder organization",
                  "Bulk processing capabilities",
                  "Document annotation tools"
                ]
              }
            ].map((section) => (
              <Card
                key={section.title}
                className="p-8 bg-gradient-to-b from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-900 border border-gray-100 dark:border-gray-800 rounded-3xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col gap-6">
                  <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900 dark:to-indigo-900 w-fit">
                    <section.icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <span className="inline-flex p-1 rounded-lg bg-indigo-100 dark:bg-indigo-900">
                            <Check className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                          </span>
                          <span className="text-gray-600 dark:text-gray-300">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-neutral-900 dark:to-neutral-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Seamless Integration
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Works with your existing systems and workflows
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Epic",
              "Cerner",
              "Allscripts",
              "athenahealth",
              "eClinicalWorks",
              "NextGen"
            ].map((ehr) => (
              <Card
                key={ehr}
                className="p-6 bg-white dark:bg-neutral-900 hover:shadow-md transition-all duration-300 rounded-2xl border border-gray-100 dark:border-gray-800"
              >
                <p className="font-semibold text-center bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                  {ehr}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Measurable Impact
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Real results from real practices
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: "80%",
                description: "Reduction in document processing time"
              },
              {
                metric: "60%",
                description: "Cost savings on fax-related expenses"
              },
              {
                metric: "95%",
                description: "Staff satisfaction improvement"
              }
            ].map((stat) => (
              <Card
                key={stat.description}
                className="p-8 text-center bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950 dark:to-indigo-950 border-0 rounded-3xl"
              >
                <h3 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4">
                  {stat.metric}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {stat.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-700 dark:to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of healthcare providers who have already modernized
            their fax workflows
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-indigo-50 dark:bg-gray-200 dark:hover:bg-gray-300"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EFaxPage
