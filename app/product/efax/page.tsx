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
  ArrowRight,
  X
} from "lucide-react"
import { MdAutoAwesome } from "react-icons/md"

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
                  className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:text-white"
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
            <div className="relative group">
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-3xl transform rotate-3 opacity-10 dark:opacity-20 transition-all duration-300 ease-in-out group-hover:rotate-6 group-hover:scale-105 group-hover:opacity-30 dark:group-hover:opacity-40"></div>

              {/* Main card */}
              <Card className="p-8 relative backdrop-blur-sm bg-white/80 dark:bg-neutral-900/80 border-0 shadow-xl rounded-3xl transition-all duration-300 ease-in-out group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:bg-white/90 dark:group-hover:bg-neutral-900/90">
                <div className="space-y-6">
                  <div className="flex items-center gap-4 transition-transform duration-300 ease-in-out hover:translate-x-2">
                    <MdAutoAwesome className="w-8 h-8 text-indigo-600 dark:text-indigo-400 transition-transform duration-300 group-hover:scale-110" />
                    <p className="text-gray-600 dark:text-gray-300">
                      Automated AI Summarization
                    </p>
                  </div>
                  <div className="flex items-center gap-4 transition-transform duration-300 ease-in-out hover:translate-x-2">
                    <Clock className="w-8 h-8 text-indigo-600 dark:text-indigo-400 transition-transform duration-300 group-hover:scale-110" />
                    <p className="text-gray-600 dark:text-gray-300">
                      80% Faster Processing
                    </p>
                  </div>
                  <div className="flex items-center gap-4 transition-transform duration-300 ease-in-out hover:translate-x-2">
                    <Shield className="w-8 h-8 text-indigo-600 dark:text-indigo-400 transition-transform duration-300 group-hover:scale-110" />
                    <p className="text-gray-600 dark:text-gray-300">
                      Secure & HIPAA Compliant
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
                  "AI-powered document classification and labeling",
                  "Automated data extraction",
                  "OCR with 99.9% accuracy",
                  "Groups all faxes for a particular patient together"
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
                icon: DollarSign,
                title: "Cost & Efficiency",
                features: [
                  "Eliminate paper and toner expenses",
                  "Reduce staff time spent on faxing by 80%",
                  "No need for dedicated fax lines",
                  "Automatic retry for failed transmissions"
                ]
              },
              {
                icon: FileText,
                title: "Document Management",
                features: [
                  "Searchable document archive by sender or patient",
                  "Custom folder organization",
                  "Customizable filtering and sorting",
                  "Long document summarization"
                ]
              }
            ].map((section) => (
              <Card
                key={section.title}
                className="p-8 bg-gradient-to-b from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-900 border border-transparent hover:border-purple-300 dark:hover:border-purple-800 dark:border-gray-800 rounded-3xl hover:shadow-lg transition-all duration-300"
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

      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Why Choose Smart eFax?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              See how we compare to traditional faxing
            </p>
          </div>

          <Card className="overflow-hidden rounded-3xl border border-purple-100 dark:border-purple-900/50">
            <div className="grid grid-cols-3 gap-4 p-6 bg-purple-100 dark:bg-purple-700/50">
              <div className="font-semibold text-gray-900 dark:text-white">
                Feature
              </div>
              <div className="font-semibold text-gray-900 dark:text-white text-center">
                Traditional Fax
              </div>
              <div className="font-semibold text-gray-900 dark:text-white text-center">
                AI powered eFax
              </div>
            </div>

            {[
              {
                feature: "Document Processing",
                traditional: "Manual sorting and routing",
                smart: "AI-powered automatic classification"
              },
              {
                feature: "Accessibility",
                traditional: "Physical access required",
                smart: "Access from any device, anywhere"
              },
              {
                feature: "Data Security",
                traditional: "Paper documents can be lost",
                smart: "End-to-end encryption & audit trails"
              },
              {
                feature: "Integration",
                traditional: "Manual data entry required",
                smart: "Automated data extraction"
              },
              {
                feature: "Cost",
                traditional: "Expensive phone lines & paper",
                smart: "Affordable, paperless solution"
              },
              {
                feature: "Storage",
                traditional: "Physical filing cabinets",
                smart: "Searchable digital archive"
              }
            ].map((item, index) => (
              <div
                key={item.feature}
                className={`grid grid-cols-3 gap-4 p-6 ${
                  index % 2 === 0
                    ? "bg-white dark:bg-neutral-900"
                    : "bg-gray-50 dark:bg-neutral-800"
                }`}
              >
                <div className="text-gray-900 dark:text-white">
                  {item.feature}
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300">
                  <X className="w-5 h-5 text-red-500" />
                  <span className="text-sm">{item.traditional}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-sm">{item.smart}</span>
                </div>
              </div>
            ))}
          </Card>
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
              className="text-white border-white hover:text-white hover:bg-indigo-500/40 dark:hover:bg-indigo-600/40"
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
