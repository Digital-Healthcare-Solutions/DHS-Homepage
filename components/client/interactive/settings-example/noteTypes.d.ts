// Base type for all elements
export interface BaseElementType {
    id: string
    name: string
    type: string
    isExpanded?: boolean
    order: number
    active: boolean
}

//SOAP and NURSE note types
export interface SubjectiveElementType extends BaseElementType {
    type: "subjective"
    customInstructions: string
    detailLevel: "normal" | "high"
    formatOption: "paragraphs" | "bullets"
}

export interface ObjectiveElementType extends BaseElementType {
    type: "objective"
    customInstructions: string
    physicalExam: PhysicalExamConfig
    formatOption: "paragraphs" | "bullets"
}

export interface AssessmentElementType extends BaseElementType {
    type: "assessment"
    customInstructions: string
    formatOption: "paragraphs" | "bullets"
    includeDifferential: boolean
}

export interface PlanElementType extends BaseElementType {
    type: "plan"
    customInstructions: string
    formatOption: "paragraphs" | "bullets"
}

//CUSTOM SECTION NOTE TYPES
export interface ChiefComplaintElementType extends BaseElementType {
    type: "chiefComplaint"
    detailLevel: "normal" | "high"
}

export interface HPIElementType extends BaseElementType {
    type: "hpi"
    detailLevel: "normal" | "high"
    formatOption: "paragraphs" | "bullets"
}

export interface MedicalHistoryElementType extends BaseElementType {
    type: "medicalHistory"
    formatOption: "paragraphs" | "bullets"
}

export interface SurgicalHistoryElementType extends BaseElementType {
    type: "surgicalHistory"
    formatOption: "paragraphs" | "bullets"
}

export interface FamilyHistoryElementType extends BaseElementType {
    type: "familyHistory"
    formatOption: "paragraphs" | "bullets"
}

export interface SocialHistoryElementType extends BaseElementType {
    type: "socialHistory"
    formatOption: "paragraphs" | "bullets"
}

export interface ObstetricHistoryElementType extends BaseElementType {
    type: "obstetricHistory"
    formatOption: "paragraphs" | "bullets"
}

export interface ROSElementType extends BaseElementType {
    type: "ros"
    formatOption: "bullets" | "paragraphs"
    rosConfig: ROSConfig
}

export interface DiagnosticElementType extends BaseElementType {
    type: "diagnostic"
    formatOption: "bullets" | "table"
}
export interface PhysicalExamElementType extends BaseElementType {
    type: "physicalExam"
    formatOption: "paragraphs" | "bullets"
    physicalExam: PhysicalExamConfig
}
export interface CurrentMedicationsElementType extends BaseElementType {
    type: "currentMedications"
    formatOption: "bullets" | "numbered"
}

export interface VitalSignsElementType extends BaseElementType {
    type: "vitalSigns"
    formatOption: "bullets" | "table"
}

export interface LabDataElementType extends BaseElementType {
    type: "labData"
    formatOption: "bullets" | "table"
}
export interface NewReferralElementType extends BaseElementType {
    type: "newReferral"
}

export interface FollowUpAppointmentElementType extends BaseElementType {
    type: "followUpAppointment"
    formatOption: "bullets" | "numbered"
}

export interface NewOrdersElementType extends BaseElementType {
    type: "newOrders"
    formatOption: "bullets" | "numbered"
}

export interface AllergiesElementType extends BaseElementType {
    type: "allergies"
    formatOption: "bullets" | "table" | "numbered"
}

export interface ImmunizationsElementType extends BaseElementType {
    type: "immunizations"
    formatOption: "bullets" | "table" | "numbered"
}

// Union type for all specific element types
export type ElementType =
    | SubjectiveElementType
    | ObjectiveElementType
    | AssessmentElementType
    | PlanElementType
    | DiagnosticElementType
    | ChiefComplaintElementType
    | HPIElementType
    | MedicalHistoryElementType
    | SurgicalHistoryElementType
    | FamilyHistoryElementType
    | SocialHistoryElementType
    | ObstetricHistoryElementType
    | ROSElementType
    | PhysicalExamElementType
    | CurrentMedicationsElementType
    | VitalSignsElementType
    | LabDataElementType
    | NewReferralElementType
    | FollowUpAppointmentElementType
    | NewOrdersElementType
    | AllergiesElementType
    | ImmunizationsElementType

export type NotAvailableTextOption = "default" | "notAvailable" | "custom"

export interface ExamSystemConfig {
    notAvailableOption: NotAvailableTextOption
    hidden: boolean
    defaultText: string
    notAvailableText?: string
    customText?: string
}
export interface PhysicalExamConfig {
    general: ExamSystemConfig
    HEENT: ExamSystemConfig
    respiratory: ExamSystemConfig
    cardiovascular: ExamSystemConfig
    gastrointestinal: ExamSystemConfig
    genitourinary: ExamSystemConfig
    musculoskeletal: ExamSystemConfig
    neurological: ExamSystemConfig
    skin: ExamSystemConfig
    psychiatric: ExamSystemConfig
    //   customFields: {
    //     [key: string]: ExamSystemConfig
    //   }[]
}

export type TextOption = "default" | "notReviewed" | "custom"

export interface ROSSystemConfig {
    hidden: boolean
    textOption: TextOption
    defaultText: string
    notReviewedText: string
    customText?: string
}

export interface ROSConfig {
    general: ROSSystemConfig
    skin: ROSSystemConfig
    HEENT: ROSSystemConfig
    cardiovascular: ROSSystemConfig
    respiratory: ROSSystemConfig
    gastrointestinal: ROSSystemConfig
    genitourinary: ROSSystemConfig
    musculoskeletal: ROSSystemConfig
    neurological: ROSSystemConfig
    psychiatric: ROSSystemConfig
    endocrine: ROSSystemConfig
    hematologicLymphatic: ROSSystemConfig
    allergicImmunologic: ROSSystemConfig
    // customSystems: {
    //   [key: string]: ROSSystemConfig
    // }
}
