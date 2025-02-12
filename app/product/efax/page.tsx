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
  X,
  DatabaseZap
} from "lucide-react"
import { MdAutoAwesome } from "react-icons/md"
import { Metadata } from "next"
import MediaShowcase from "@/components/product/efax/media-showcase"

export const metadata: Metadata = {
  title: "Axon AI | Efax",
  description:
    "Transform your practice with AI-powered eFax. Say goodbye to paper faxes and hello to intelligent document processing. Our HIPAA-compliant eFax solution automates your workflow while ensuring security and compliance.",
  keywords:
    "efax, electronic fax, fax, faxing, document processing, document management, secure fax, secure document management, healthcare, medical, HIPAA, HITECH, AI, artificial intelligence, machine learning, automation, digital fax, digital document management"
}

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
                      AI Summarizations
                    </p>
                  </div>
                  <div className="flex items-center gap-4 transition-transform duration-300 ease-in-out hover:translate-x-2">
                    <DatabaseZap className="w-8 h-8 text-indigo-600 dark:text-indigo-400 transition-transform duration-300 group-hover:scale-110" />
                    <p className="text-gray-600 dark:text-gray-300">
                      Automated data extraction
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
                  "Intelligent search and filtering"
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
      {/* Fax Number Options Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 ">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Choose Your Fax Number
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Set up your fax line in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Port Existing Number */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-indigo-200 dark:from-purple-800 dark:to-indigo-800 rounded-[2.5rem] transform rotate-2 transition-transform group-hover:rotate-3 group-hover:scale-105"></div>
              <Card className="relative p-10 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/90 border-0 shadow-xl rounded-[2.5rem]">
                <div className="absolute top-6 right-6">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900">
                    <span className="text-sm font-medium text-purple-700 dark:text-purple-300">
                      Most Popular
                    </span>
                  </div>
                </div>
                <div className="flex flex-col h-full">
                  <div className="mb-8">
                    <div className="inline-flex p-3 mb-6 rounded-2xl bg-gradient-to-br from-purple-100 to-indigo-100 dark:from-purple-900 dark:to-indigo-900">
                      <ArrowRight className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      Port Your Existing Number
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Keep your current fax number and upgrade to smart features
                    </p>
                  </div>

                  <div className="flex-grow">
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 mt-1 text-green-500" />
                        <span className="text-gray-600 dark:text-gray-300">
                          Maintain your existing fax number with zero downtime
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 mt-1 text-green-500" />
                        <span className="text-gray-600 dark:text-gray-300">
                          We handle the entire porting process with your carrier
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 mt-1 text-green-500" />
                        <span className="text-gray-600 dark:text-gray-300">
                          Keep business continuity with your existing contacts
                        </span>
                      </li>
                    </ul>
                  </div>
                  {/* 
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 dark:from-purple-500 dark:to-indigo-500"
                  >
                    Start Porting Process
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button> */}
                </div>
              </Card>
            </div>

            {/* New Number */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-200 to-purple-200 dark:from-indigo-800 dark:to-purple-800 rounded-[2.5rem] transform -rotate-2 transition-transform group-hover:-rotate-3 group-hover:scale-105"></div>
              <Card className="relative p-10 backdrop-blur-sm bg-white/90 dark:bg-neutral-900/90 border-0 shadow-xl rounded-[2.5rem]">
                <div className="absolute top-6 right-6">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900">
                    <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
                      Instant Setup
                    </span>
                  </div>
                </div>
                <div className="flex flex-col h-full">
                  <div className="mb-8">
                    <div className="inline-flex p-3 mb-6 rounded-2xl bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900 dark:to-purple-900">
                      <DollarSign className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                      Purchase a New Number
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Start fresh with a new dedicated fax line in minutes
                    </p>
                  </div>

                  <div className="flex-grow">
                    <ul className="space-y-4 mb-8">
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 mt-1 text-green-500" />
                        <span className="text-gray-600 dark:text-gray-300">
                          Choose your preferred area code and number
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 mt-1 text-green-500" />
                        <span className="text-gray-600 dark:text-gray-300">
                          Get started immediately with instant activation
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Check className="w-5 h-5 mt-1 text-green-500" />
                        <span className="text-gray-600 dark:text-gray-300">
                          Add multiple numbers for different departments
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-indigo-500 dark:to-purple-500"
                  >
                    Select New Number
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button> */}
                </div>
              </Card>
            </div>
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

      <MediaShowcase />

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
