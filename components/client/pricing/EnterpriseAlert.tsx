import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Building2 } from "lucide-react"
import React from "react"
import GetCustomQuote from "../modals/GetCustomQuote"
import { Card } from "@/components/ui/card"

const EnterpriseAlert = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <Card className="group relative overflow-hidden backdrop-blur-sm bg-gradient-to-br from-gray-900 to-blue-900 dark:from-blue-950 dark:to-gray-950 border-0 shadow-xl rounded-3xl">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="p-8 relative">
          <div className="flex items-start gap-6">
            <div className="p-3 rounded-2xl bg-white/10">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Looking for Enterprise Solutions?
              </h3>
              <p className="text-gray-300 mb-6">
                Get enterprise-grade features including unlimited users,
                dedicated infrastructure, SSO/SAML integration, API access, and
                custom solutions tailored to your organization.
              </p>
              <GetCustomQuote
                btnText="Get a Custom Quote"
                btnClassName="inline-flex items-center justify-center rounded-xl px-6 py-3 text-lg font-semibold bg-white text-gray-900 hover:bg-gray-100 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
export default EnterpriseAlert
