import { CompanyInformation } from '../../../types/company'

export interface ValidationError {
  field: string
  message: string
}

export function validateCompanyData(data: Partial<CompanyInformation>): ValidationError[] {
  const errors: ValidationError[] = []

  // Company name validation
  if (!data.companyName?.en?.trim()) {
    errors.push({ field: 'companyName.en', message: 'English company name is required' })
  }
  if (!data.companyName?.fr?.trim()) {
    errors.push({ field: 'companyName.fr', message: 'French company name is required' })
  }

  // Corporation number validation
  if (!data.corporationNumber?.trim()) {
    errors.push({ field: 'corporationNumber', message: 'Corporation number is required' })
  }

  // Federal business registry number validation
  if (!data.federalBusinessRegistryNumber || data.federalBusinessRegistryNumber <= 0) {
    errors.push({ 
      field: 'federalBusinessRegistryNumber', 
      message: 'Valid federal business registry number is required' 
    })
  }

  // Organization type validation
  if (!data.organizationType?.trim()) {
    errors.push({ field: 'organizationType', message: 'Organization type is required' })
  }

  // Sector validation
  if (!Array.isArray(data.sector) || data.sector.length === 0) {
    errors.push({ field: 'sector', message: 'At least one sector must be selected' })
  }

  // Score validations
  const scoreFields = [
    'customerSatisfactionScore',
    'grantMatchScore',
    'innovationScore',
    'queryPerformanceScore'
  ]

  scoreFields.forEach(field => {
    const score = data[field as keyof CompanyInformation] as number | null
    if (score !== null && (score < 0 || score > 100)) {
      errors.push({ field, message: 'Score must be between 0 and 100' })
    }
  })

  // Employee count validation
  if (data.totalEmployeeCount !== null && data.totalEmployeeCount < 0) {
    errors.push({ field: 'totalEmployeeCount', message: 'Employee count must be positive' })
  }

  return errors
}