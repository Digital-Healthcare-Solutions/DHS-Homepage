import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Building2 } from "lucide-react"
import React from "react"
import GetCustomQuote from "../modals/GetCustomQuote"

const EnterpriseAlert = () => {
    return (
        <div className="relative w-full max-w-3xl overflow-hidden rounded-xl bg-gray-900 dark:bg-neutral-100 shadow-lg">
            <div className="relative p-6 md:p-8">
                <div className="flex items-start space-x-4">
                    <Building2 className="h-8 w-8 text-white dark:text-neutral-800 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                        <AlertTitle className="text-2xl font-bold text-white dark:text-neutral-800">
                            Looking for Enterprise Solutions?
                        </AlertTitle>
                        <AlertDescription className="mt-3 text-lg text-gray-200 dark:text-neutral-800 space-y-4">
                            <p>
                                Get enterprise-grade features including
                                unlimited users, dedicated infrastructure,
                                SSO/SAML integration, API access, and custom
                                solutions tailored to your organization.
                            </p>
                            <div className="pt-2">
                                <GetCustomQuote
                                    btnText="Get a Custom Quote"
                                    btnClassName="w-full sm:w-auto px-6 py-3 text-lg font-semibold rounded-lg transition-all duration-300 bg-white text-gray-900 hover:bg-gray-100 dark:bg-black dark:text-neutral-100 dark:hover:bg-neutral-900 shadow-md hover:shadow-lg"
                                />
                            </div>
                        </AlertDescription>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EnterpriseAlert
