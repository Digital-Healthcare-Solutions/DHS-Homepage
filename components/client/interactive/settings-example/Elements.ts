import {
    AssessmentElementType,
    CurrentMedicationsElementType,
    DiagnosticElementType,
    ElementType,
    FollowUpAppointmentElementType,
    MedicalHistoryElementType,
    SurgicalHistoryElementType,
    SocialHistoryElementType,
    ObstetricHistoryElementType,
    FamilyHistoryElementType,
    HPIElementType,
    LabDataElementType,
    NewOrdersElementType,
    NewReferralElementType,
    ObjectiveElementType,
    PhysicalExamElementType,
    PlanElementType,
    ROSElementType,
    SubjectiveElementType,
    VitalSignsElementType,
    ChiefComplaintElementType,
    PhysicalExamConfig,
    ROSConfig,
    AllergiesElementType,
    ImmunizationsElementType
} from "./noteTypes"

const physicalExamDefault: PhysicalExamConfig = {
    general: {
        defaultText: "Appears well-nourished, no acute distress or anxiety.",
        notAvailableOption: "default",
        notAvailableText: "General exam not provided",
        hidden: false,
        customText: ""
    },
    HEENT: {
        defaultText:
            "HEENT normal, neck supple and free of adenopathy or masses. No thyromegaly, JVD, or carotid bruits.",
        notAvailableOption: "default",
        notAvailableText: "HEENT exam not provided",
        hidden: false
    },
    respiratory: {
        defaultText:
            "Lung sounds are clear to auscultation bilaterally with no wheezes, rales, or rhonchi.",
        notAvailableOption: "default",
        notAvailableText: "Respiratory exam not provided",
        hidden: false
    },
    cardiovascular: {
        defaultText:
            "Heart sounds are regular with no murmurs, clicks, gallops, or rubs. Peripheral pulses are intact. No edema present.",
        notAvailableOption: "default",
        notAvailableText: "Cardiovascular exam not provided",
        hidden: false
    },
    gastrointestinal: {
        defaultText:
            "Abdomen is soft, non-tender, and non-distended. Bowel sounds are present and normal.",
        notAvailableOption: "default",
        notAvailableText: "Gastrointestinal exam not provided",
        hidden: false
    },
    genitourinary: {
        defaultText: "Genitourinary exam is unremarkable.",
        notAvailableOption: "default",
        notAvailableText: "Genitourinary exam not provided",
        hidden: false
    },
    musculoskeletal: {
        defaultText:
            "Full range of motion in all extremities with no deformities or tenderness. Gait is normal.",
        notAvailableOption: "default",
        notAvailableText: "Musculoskeletal exam not provided",
        hidden: false
    },
    neurological: {
        defaultText:
            "Patient is alert and oriented x 3. Cranial nerves II-XII are intact. Motor and sensory functions are normal.",
        notAvailableOption: "default",
        notAvailableText: "Neurological exam not provided",
        hidden: false
    },
    skin: {
        defaultText: "Skin is warm, dry, and intact with no rashes or lesions.",
        notAvailableOption: "default",
        notAvailableText: "Integumentary exam not provided",
        hidden: false
    },
    psychiatric: {
        defaultText:
            "Patient is cooperative with normal mood and affect. Thought processes are coherent.",
        notAvailableOption: "default",
        notAvailableText: "Pychiatric exam not provided",
        hidden: false
    }
    //   customFields: []
}

const RosDefault: ROSConfig = {
    general: {
        hidden: false,
        textOption: "default",
        defaultText:
            "Denies fever, chills, fatigue, weight changes, or night sweats.",
        notReviewedText: "General system not reviewed.",
        customText: ""
    },
    skin: {
        hidden: false,
        textOption: "default",
        defaultText: "Denies rashes, lesions, or changes in skin color.",
        notReviewedText: "Skin system not reviewed."
    },
    HEENT: {
        hidden: false,
        textOption: "default",
        defaultText:
            "Denies headaches, vision changes, hearing loss, sinus problems, or sore throat.",
        notReviewedText: "HEENT system not reviewed."
    },
    cardiovascular: {
        hidden: false,
        textOption: "default",
        defaultText:
            "Denies chest pain, palpitations, shortness of breath, or edema.",
        notReviewedText: "Cardiovascular system not reviewed."
    },
    respiratory: {
        hidden: false,
        textOption: "default",
        defaultText: "Denies cough, wheezing, or difficulty breathing.",
        notReviewedText: "Respiratory system not reviewed."
    },
    gastrointestinal: {
        hidden: false,
        textOption: "default",
        defaultText:
            "Denies abdominal pain, nausea, vomiting, diarrhea, or constipation.",
        notReviewedText: "Gastrointestinal system not reviewed."
    },
    genitourinary: {
        hidden: false,
        textOption: "default",
        defaultText: "Denies dysuria, frequency, urgency, or hematuria.",
        notReviewedText: "Genitourinary system not reviewed.",
        customText: ""
    },
    musculoskeletal: {
        hidden: false,
        textOption: "default",
        defaultText: "Denies joint pain, swelling, stiffness, or muscle pain.",
        notReviewedText: "Musculoskeletal system not reviewed."
    },
    neurological: {
        hidden: false,
        textOption: "default",
        defaultText:
            "Denies dizziness, seizures, numbness, tingling, or weakness.",
        notReviewedText: "Neurological system not reviewed."
    },
    psychiatric: {
        hidden: false,
        textOption: "default",
        defaultText: "Denies depression, anxiety, or sleep disturbances.",
        notReviewedText: "Psychiatric system not reviewed."
    },
    endocrine: {
        hidden: false,
        textOption: "default",
        defaultText: "Denies polyuria, polydipsia, heat or cold intolerance.",
        notReviewedText: "Endocrine system not reviewed."
    },
    hematologicLymphatic: {
        hidden: false,
        textOption: "default",
        defaultText: "Denies bruising, bleeding, or swollen lymph nodes.",
        notReviewedText: "Hematologic/Lymphatic system not reviewed.",
        customText: ""
    },
    allergicImmunologic: {
        hidden: false,
        textOption: "default",
        defaultText:
            "Denies seasonal allergies, hay fever, or frequent infections.",
        notReviewedText: "Allergic/Immunologic system not reviewed."
    }
    // customSystems: {
    //   other: {
    //     hidden: false,
    //     textOption: "custom",
    //     defaultText: "No other symptoms reported.",
    //     notReviewedText: "Other systems not reviewed.",
    //     customText: "All other systems reviewed and negative."
    //   }
    // }
}

export const nurseNoteElements: ElementType[] = [
    {
        id: "subjective",
        type: "subjective",
        name: "Subjective",
        customInstructions: "",
        detailLevel: "normal",
        formatOption: "paragraphs",
        order: 1,
        active: true
    } as SubjectiveElementType
]

export const SoapElements: ElementType[] = [
    {
        id: "subjective",
        type: "subjective",
        name: "Subjective",
        customInstructions: "",
        detailLevel: "normal",
        formatOption: "paragraphs",
        order: 1,
        active: true
    } as SubjectiveElementType,
    {
        id: "objective",
        name: "Objective",
        type: "objective",
        customInstructions: "",
        formatOption: "paragraphs",
        physicalExam: physicalExamDefault
    } as ObjectiveElementType,
    {
        id: "assessment",
        name: "Assessment",
        type: "assessment",
        customInstructions: "",
        formatOption: "paragraphs",
        includeDifferential: false
    } as AssessmentElementType,
    {
        id: "plan",
        name: "Plan",
        type: "plan",
        customInstructions: "",
        formatOption: "paragraphs"
    } as PlanElementType
]

export const structuredSectionsElements: ElementType[] = [
    {
        id: "chiefComplaint",
        name: "Chief Complaint (CC)",
        type: "chiefComplaint",
        detailLevel: "normal"
    } as ChiefComplaintElementType,
    {
        id: "historyOfPresentIllness",
        name: "History of Present Illness (HPI)",
        type: "hpi",
        formatOption: "paragraphs",
        detailLevel: "normal"
    } as HPIElementType,
    {
        id: "medicalHistory",
        name: "Medical History",
        type: "medicalHistory",
        formatOption: "paragraphs"
    } as MedicalHistoryElementType,

    {
        id: "socialHistory",
        name: "Social History",
        type: "socialHistory",
        formatOption: "paragraphs"
    } as SocialHistoryElementType,

    {
        id: "ros",
        name: "Review of Systems (ROS)",
        type: "ros",
        formatOption: "paragraphs",
        rosConfig: RosDefault
    } as ROSElementType,
    {
        id: "physicalExam",
        name: "Physical Exam",
        type: "physicalExam",
        formatOption: "paragraphs",
        physicalExam: physicalExamDefault
    } as PhysicalExamElementType,
    {
        id: "assessment",
        name: "Assessment",
        type: "assessment",
        customInstructions: "",
        formatOption: "paragraphs",
        includeDifferential: false
    } as AssessmentElementType,
    {
        id: "plan",
        name: "Plan",
        type: "plan",
        customInstructions: "",
        formatOption: "paragraphs"
    } as PlanElementType
]

export const unusedSoapElements: ElementType[] = [
    {
        id: "ros",
        name: "Review of Systems (ROS)",
        type: "ros",
        formatOption: "paragraphs",
        rosConfig: RosDefault
    } as ROSElementType,
    {
        id: "diagnosticTests",
        name: "Diagnostic Tests",
        type: "diagnostic",
        formatOption: "bullets"
    } as DiagnosticElementType,

    {
        id: "vitals",
        name: "Vital Signs",
        formatOption: "bullets",
        type: "vitalSigns"
    } as VitalSignsElementType,
    {
        id: "labData",
        name: "Laboratory Data",
        type: "labData",
        formatOption: "bullets"
    } as LabDataElementType
]

export const unusedSectionsElements: ElementType[] = [
    {
        id: "diagnosticTests",
        name: "Diagnostic Tests",
        type: "diagnostic",
        formatOption: "bullets"
    } as DiagnosticElementType,

    {
        id: "familyHistory",
        name: "Family History",
        type: "familyHistory",
        formatOption: "paragraphs"
    } as FamilyHistoryElementType,
    {
        id: "obstetricHistory",
        name: "Obstetric History",
        type: "obstetricHistory",
        formatOption: "paragraphs"
    } as ObstetricHistoryElementType,
    {
        id: "surgicalHistory",
        name: "Surgical History",
        type: "surgicalHistory",
        formatOption: "paragraphs"
    } as SurgicalHistoryElementType,
    {
        id: "currentMedications",
        name: "Current Medications",
        type: "currentMedications",
        formatOption: "bullets"
    } as CurrentMedicationsElementType,
    {
        id: "vitalSigns",
        name: "Vital signs",
        formatOption: "bullets",
        type: "vitalSigns"
    } as VitalSignsElementType,
    {
        id: "labData",
        name: "Laboratory Data",
        type: "labData",
        formatOption: "bullets"
    } as LabDataElementType,
    {
        id: "followUpAppointments",
        name: "Follow-up Appointments",
        type: "followUpAppointment",
        formatOption: "bullets"
    } as FollowUpAppointmentElementType,
    {
        id: "newOrders",
        name: "New Orders",
        type: "newOrders",
        formatOption: "bullets"
    } as NewOrdersElementType,
    {
        id: "allergies",
        name: "Allergies",
        type: "allergies",
        formatOption: "bullets"
    } as AllergiesElementType,
    {
        id: "immunizations",
        name: "Immunizations",
        type: "immunizations",
        formatOption: "bullets"
    } as ImmunizationsElementType
]
