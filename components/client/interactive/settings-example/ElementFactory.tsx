"use client"

import React from "react"
import {
    SubjectiveElement,
    ObjectiveElement,
    AssessmentElement,
    PlanElement,
    VitalSignsElement,
    LaboratoryDataElement,
    ReviewOfSystemsElement,
    DiagnosticTestsElement,
    PhysicalExamElement,
    ChiefComplaintElement,
    HpiElement,
    MedicalHistoryElement,
    SurgicalHistoryElement,
    SocialHistoryElement,
    FamilyHistoryElement,
    ObstetricHistoryElement,
    CurrentMedicationsElement,
    NewOrdersElement,
    FollowUpAppointmentElement,
    AllergiesElement,
    ImmunizationsElement
} from "./noteElements"
import { BaseElement } from "./noteElements/BaseElement"
import { ElementType } from "./noteTypes"

export const ElementFactory: React.FC<{
    element: ElementType
    toggleExpand: (id: string) => void
}> = ({ element, toggleExpand }) => {
    switch (element.type) {
        case "subjective":
            return (
                <SubjectiveElement
                    element={element}
                    toggleExpand={toggleExpand}
                />
            )
        case "objective":
            return (
                <ObjectiveElement
                    element={element}
                    toggleExpand={toggleExpand}
                />
            )
        case "assessment":
            return (
                <AssessmentElement
                    element={element}
                    toggleExpand={toggleExpand}
                />
            )
        case "plan":
            return <PlanElement element={element} toggleExpand={toggleExpand} />
        case "vitalSigns":
            return (
                <VitalSignsElement
                    element={element}
                    toggleExpand={toggleExpand}
                />
            )
        case "labData":
            return (
                <LaboratoryDataElement
                    element={element}
                    toggleExpand={toggleExpand}
                />
            )
        case "ros":
            return (
                <ReviewOfSystemsElement
                    element={element}
                    toggleExpand={toggleExpand}
                />
            )
        case "diagnostic":
            return (
                <DiagnosticTestsElement
                    element={element}
                    toggleExpand={toggleExpand}
                />
            )
        case "physicalExam":
            return (
                <PhysicalExamElement
                    element={element}
                    toggleExpand={toggleExpand}
                />
            )
        case "chiefComplaint":
            return (
                <ChiefComplaintElement
                    element={element}
                    toggleExpand={toggleExpand}
                />
            )
        case "hpi":
            return <HpiElement element={element} toggleExpand={toggleExpand} />
        case "medicalHistory":
            return (
                <MedicalHistoryElement
                    element={element}
                    toggleExpand={toggleExpand}
                />
            )
        case "surgicalHistory":
            return (
                <SurgicalHistoryElement
                    element={element}
                    toggleExpand={toggleExpand}
                />
            )
        case "socialHistory":
            return (
                <SocialHistoryElement
                    element={element}
                    toggleExpand={toggleExpand}
                />
            )
        case "familyHistory":
            return (
                <FamilyHistoryElement
                    element={element}
                    toggleExpand={toggleExpand}
                />
            )
        case "obstetricHistory":
            return (
                <ObstetricHistoryElement
                    element={element}
                    toggleExpand={toggleExpand}
                />
            )
        case "currentMedications":
            return (
                <CurrentMedicationsElement
                    element={element}
                    toggleExpand={toggleExpand}
                />
            )
        case "followUpAppointment":
            return (
                <FollowUpAppointmentElement
                    element={element}
                    toggleExpand={toggleExpand}
                />
            )
        case "newOrders":
            return (
                <NewOrdersElement
                    element={element}
                    toggleExpand={toggleExpand}
                />
            )
        case "allergies":
            return (
                <AllergiesElement
                    element={element}
                    toggleExpand={toggleExpand}
                />
            )
        case "immunizations":
            return (
                <ImmunizationsElement
                    element={element}
                    toggleExpand={toggleExpand}
                />
            )
        // Add more cases for other element types as you create them
        default:
            return (
                <BaseElement element={element} toggleExpand={toggleExpand}>
                    {/* Add a default element here */}
                    <></>
                </BaseElement>
            )
    }
}
