import * as Yup from 'yup'

export const companyFormValidationSchema = Yup.object().shape({
  companyName: Yup.object().shape({
    en: Yup.string().required('English company name is required'),
    fr: Yup.string().required('French company name is required'),
  }),
  corporationNumber: Yup.string().required('Corporation number is required'),
  federalBusinessRegistryNumber: Yup.number()
    .required('Federal business registry number is required')
    .min(0, 'Must be a positive number'),
  incorporationDate: Yup.date().nullable(),
  organizationType: Yup.string().required('Organization type is required'),
  sector: Yup.array().min(1, 'At least one sector must be selected'),
  companyLogo: Yup.string(),
  customerSatisfactionScore: Yup.number()
    .nullable()
    .min(0, 'Must be between 0 and 100')
    .max(100, 'Must be between 0 and 100'),
  environmentalImpact: Yup.string(),
  grantMatchScore: Yup.number()
    .nullable()
    .min(0, 'Must be between 0 and 100')
    .max(100, 'Must be between 0 and 100'),
  innovationScore: Yup.number()
    .nullable()
    .min(0, 'Must be between 0 and 100')
    .max(100, 'Must be between 0 and 100'),
  queryPerformanceScore: Yup.number()
    .nullable()
    .min(0, 'Must be between 0 and 100')
    .max(100, 'Must be between 0 and 100'),
  totalEmployeeCount: Yup.number()
    .nullable()
    .min(0, 'Must be a positive number'),
  aiAnalysis: Yup.object().shape({
    aiAnalysisDate: Yup.date().nullable(),
    aiAnalysisReady: Yup.boolean(),
    aiImprovementRecommendations: Yup.string(),
    aiReadinessDetails: Yup.string(),
  }),
  clientId: Yup.string(),
})