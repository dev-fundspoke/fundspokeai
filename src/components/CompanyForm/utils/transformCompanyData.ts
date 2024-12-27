import { Timestamp } from 'firebase/firestore'
import { CompanyFormValues } from '../types/formTypes'
import { CompanyInformation } from '../../../types/company'

export function transformCompanyData(values: CompanyFormValues): Omit<CompanyInformation, 'id' | 'createdAt' | 'updatedAt'> {
  // Process number fields with proper type checking
  const numberFields = {
    customerSatisfactionScore: values.customerSatisfactionScore,
    grantMatchScore: values.grantMatchScore,
    innovationScore: values.innovationScore,
    queryPerformanceScore: values.queryPerformanceScore,
    totalEmployeeCount: values.totalEmployeeCount,
    federalBusinessRegistryNumber: values.federalBusinessRegistryNumber
  }

  // Convert empty/undefined values to null for number fields
  const processedNumbers = Object.entries(numberFields).reduce((acc, [key, value]) => ({
    ...acc,
    [key]: value === undefined || value === null ? null : Number(value)
  }), {})

  return {
    ...processedNumbers,
    companyName: {
      en: values.companyName.en.trim(),
      fr: values.companyName.fr.trim(),
    },
    corporationNumber: values.corporationNumber.trim(),
    incorporationDate: values.incorporationDate ? Timestamp.fromDate(values.incorporationDate) : null,
    organizationType: values.organizationType,
    sector: values.sector,
    companyLogo: values.companyLogo.trim(),
    environmentalImpact: values.environmentalImpact.trim(),
    aiAnalysis: {
      aiAnalysisDate: values.aiAnalysis.aiAnalysisDate ? 
        Timestamp.fromDate(values.aiAnalysis.aiAnalysisDate) : null,
      aiAnalysisReady: values.aiAnalysis.aiAnalysisReady,
      aiImprovementRecommendations: values.aiAnalysis.aiImprovementRecommendations.trim(),
      aiReadinessDetails: values.aiAnalysis.aiReadinessDetails.trim(),
    },
    clientId: values.clientId.trim()
  }
}