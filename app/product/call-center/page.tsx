import React from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Phone,
  Calendar,
  Brain,
  Clock,
  Users,
  Headphones,
  MessageSquare,
  BarChart,
  CheckCircle,
  Clock8,
  Building,
  PhoneCall,
  Check,
  ArrowRight,
  Heart,
  Wand2
} from "lucide-react"
import { MdAutoAwesome } from "react-icons/md"

const CallCenterPage = () => {
  return (
    // <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-900">
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden pb-32">
        {/* Background gradients with smoother transitions */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-blue-50/50 to-white dark:from-neutral-950 dark:via-neutral-950/90 dark:to-neutral-900"></div>
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-blue-100/80 to-transparent dark:from-blue-950/50 dark:to-transparent"></div>

        {/* Decorative Elements with extended reach */}
        <div className="absolute right-0 top-20 w-[800px] h-[800px] bg-gradient-to-br from-blue-200/40 to-sky-300/40 dark:from-blue-800/30 dark:to-sky-900/30 rounded-full blur-3xl opacity-60  transform translate-x-1/4"></div>
        <div className="absolute left-0 bottom-10 w-[600px] h-[600px] bg-gradient-to-tr from-sky-200/40 to-blue-300/60 dark:from-sky-800/30 dark:to-blue-900/30 rounded-full blur-3xl opacity-50  transform -translate-x-1/4 translate-y-1/4"></div>

        {/* Additional subtle gradient for transition */}
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-white via-white/95 to-transparent dark:from-neutral-950 dark:via-neutral-950/75 dark:to-transparent"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 relative">
          {/* Rest of the hero content remains the same */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-sky-600 to-blue-500 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent">
              Automate phone based workflows with conversational AI
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10">
              Free your healthcare team from phone duties with an AI assistant
              that handles routine calls, allowing your staff to focus on
              providing exceptional in-person patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-200 text-blue-600 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-400 dark:hover:bg-blue-950"
                endIcon={<MdAutoAwesome size={14} />}
              >
                Try Interactive Demo
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl p-6">
              {/* Card contents remain the same */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 dark:from-sky-900 dark:to-blue-900">
                  <Heart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Enhanced Care
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    More time with patients
                  </p>
                </div>
              </div>
            </Card>
            {/* Other cards remain the same */}
            <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 dark:from-sky-900 dark:to-blue-900">
                  <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    24/7 Support
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Always available
                  </p>
                </div>
              </div>
            </Card>
            <Card className="bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border-0 shadow-lg rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 dark:from-sky-900 dark:to-blue-900">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Staff Relief
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Reduce workload
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Empower Your Team with AI Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: "Automated Scheduling",
                description:
                  "Let AI handle routine scheduling tasks while your staff focuses on complex patient needs"
              },
              {
                icon: Heart,
                title: "Enhanced Patient Care",
                description:
                  "Free up your team to provide more personal attention and care to patients in the office"
              },
              {
                icon: CheckCircle,
                title: "Streamlined Operations",
                description:
                  "Reduce administrative burden and operating costs while maintaining high service quality"
              }
            ].map((capability) => (
              <Card
                key={capability.title}
                className="p-8 bg-gradient-to-b from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-900 border border-gray-100 dark:border-gray-800 rounded-3xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="inline-flex p-3 rounded-2xl bg-gradient-to-br from-sky-100 to-blue-100 dark:from-sky-900 dark:to-blue-900 mb-6">
                    <capability.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {capability.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-neutral-900 dark:to-neutral-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Supporting Your Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: PhoneCall,
                title: "Call Management",
                features: [
                  "Handles routine patient inquiries",
                  "Reduces phone queue times",
                  "Manages high call volumes",
                  "24/7 availability"
                ]
              },
              {
                icon: Users,
                title: "Staff Benefits",
                features: [
                  "More time for patient care",
                  "Reduced stress and interruptions",
                  "Focus on meaningful work",
                  "Better work-life balance"
                ]
              },
              {
                icon: Building,
                title: "Practice Efficiency",
                features: [
                  "Streamlined operations",
                  "Reduced administrative costs",
                  "Improved patient satisfaction",
                  "Better resource allocation"
                ]
              },
              {
                icon: Brain,
                title: "Smart Integration",
                features: [
                  "Works alongside your team",
                  "Seamless handoffs when needed",
                  "Customizable workflows",
                  "Easy system integration"
                ]
              }
            ].map((section) => (
              <Card
                key={section.title}
                className="p-8 bg-white dark:bg-neutral-900 border border-gray-100 dark:border-gray-800 rounded-3xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex gap-6">
                  <div className="inline-flex p-3 h-fit rounded-2xl bg-gradient-to-br from-sky-100 to-blue-100 dark:from-sky-900 dark:to-blue-900">
                    <section.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                      {section.title}
                    </h3>
                    <ul className="space-y-3">
                      {section.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <span className="inline-flex p-1 rounded-lg bg-blue-100 dark:bg-blue-900">
                            <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
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

      {/* Tasks Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Supporting Your Daily Operations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Routine Appointment Scheduling",
              "Basic Insurance Questions",
              "Prescription Refill Requests",
              "General Practice Information",
              "Appointment Reminders",
              "Simple Form Requests",
              "Payment Inquiries",
              "After-hours Information",
              "Basic Triage Support"
            ].map((task) => (
              <Card
                key={task}
                className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-900 border border-gray-100 dark:border-gray-800 rounded-2xl hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex p-2 rounded-xl bg-gradient-to-br from-sky-100 to-blue-100 dark:from-sky-900 dark:to-blue-900">
                    <CheckCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </span>
                  <p className="font-medium text-gray-900 dark:text-white">
                    {task}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-neutral-900 dark:to-neutral-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900 dark:text-white">
            Measurable Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: "60%",
                description: "Reduction in staff phone time"
              },
              {
                metric: "75%",
                description: "Faster response times"
              },
              {
                metric: "40%",
                description: "Lower operational costs"
              }
            ].map((stat) => (
              <Card
                key={stat.description}
                className="p-8 text-center bg-gradient-to-br from-sky-50 to-blue-50 dark:from-sky-950 dark:to-blue-950 border-0 rounded-3xl"
              >
                <h3 className="text-5xl font-bold bg-gradient-to-r from-sky-600 to-blue-500 dark:from-sky-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">
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
      <section className="py-24 bg-gradient-to-r from-blue-600 to-sky-500 dark:from-blue-700 dark:to-sky-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Empower Your Healthcare Team
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Give your staff the support they need to focus on what matters most
            - providing exceptional patient care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-sky-600 hover:bg-sky-50 dark:bg-gray-200 dark:hover:bg-gray-300"
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-sky-500 dark:hover:bg-sky-600"
              endIcon={<MdAutoAwesome size={16} />}
            >
              Try Interactive Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CallCenterPage
