import { FormikValues } from 'formik'

export interface CompanyFormValues extends FormikValues {
  companyName: {
    en: string
    fr: string
  }
  corporationNumber: string
  federalBusinessRegistryNumber: number
  incorporationDate: Date | null
  organizationType: string
  sector: string[]
  companyLogo: string
  customerSatisfactionScore: number | null
  environmentalImpact: string
  grantMatchScore: number | null
  innovationScore: number | null
  queryPerformanceScore: number | null
  totalEmployeeCount: number | null
  aiAnalysis: {
    aiAnalysisDate: Date | null
    aiAnalysisReady: boolean
    aiImprovementRecommendations: string
    aiReadinessDetails: string
  }
  clientId: string
  address: {
    city: string
    country: string
    line1: string
    line2: string
    state: string
    zipCode: string
  }
  socialMediaLinks: string[]
  type: string
  website: string
  currentDebtAmount: number
  debtType: string
  notes: string
  paymentSchedule: string
  supportingDocuments: Record<string, any>
  title: string
  documentType: string
  tags: string[]
  fileId: string
  documentVersions: any[]
  annualFinancials: any[]
  financialStatements: any[]
  amountReceived: number
  date: Date | null
  investorInfo: {
    name: string
    contact: string
    details: string
  }
  ipId: string
  ipType: string
  ipTitle: string
  ipDescription: string
  ipNotes: string
  ipSupportingDocuments: Record<string, any>
  management: Record<string, any>
  ownership: Record<string, any>
  employeeCount: number[]
  futureRevenueProjections: any[]
  growthPlans: {
    growthPlans: string
    supportingDocumentation: Record<string, any>
  }
  detailedDescription: string
  technologySupportingDocuments: Record<string, any>
  primaryContacts: any[]
  secondaryContact: {
    name: string
    role: string
    contactInfo: {
      email: string
      phone: string
    }
    linkedInProfile: string
    resumeMetadata: string
    notes: string
  }
  amountRequested: number
  dueDate: Date | null
  endDate: Date | null
  financialTracking: {
    categorySubtotals: Record<string, number>
    fundspokeEmployee: string
    fundspokeWriterTeam: string
  }
  programName: string
  projectSummary: string
  projectTimeline: {
    startDate: Date | null
    endDate: Date | null
    note: string
  }
  projectTitle: string
  reporting: any[]
  status: string
  submissionDate: Date | null
  claims: any[]
  fundingSupportingDocuments: any[]
  keyword: string
  memberId: string
  memberName: string
  memberRole: string
  memberContactInfo: {
    email: string
    phone: string
  }
  memberLinkedInProfile: string
  memberResumeMetadata: string
  memberNotes: string
  batchId: string
  changeImpact: string
  changeReason: string
  entity: string
  field: string
  modifiedBy: string
  newValue: string
  previousValue: string
}