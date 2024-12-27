import { createContext, useContext, FC, ReactNode, useState } from 'react'
import { FormikProps, useFormik } from 'formik'
import { CompanyFormValues } from '../types/formTypes'
import { initialValues } from './initialValues'
import { companyFormValidationSchema } from './validation'
import { companyService } from '../../../services/company/companyService'
import { transformCompanyData } from '../utils/transformCompanyData'

interface CompanyFormContextType {
  formik: FormikProps<CompanyFormValues>
  isSubmitting: boolean
  error: string | null
  companyId: string | null
}

const CompanyFormContext = createContext<CompanyFormContextType | null>(null)

export const useCompanyFormContext = () => {
  const context = useContext(CompanyFormContext)
  if (!context) {
    throw new Error('useCompanyFormContext must be used within a CompanyFormProvider')
  }
  return context
}

interface CompanyFormProviderProps {
  children: (context: CompanyFormContextType) => ReactNode
}

export const CompanyFormProvider: FC<CompanyFormProviderProps> = ({ children }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [companyId, setCompanyId] = useState<string | null>(null)

  const formik = useFormik<CompanyFormValues>({
    initialValues,
    validationSchema: companyFormValidationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setIsSubmitting(true)
        setError(null)

        const transformedData = transformCompanyData(values)
        const newCompanyId = await companyService.createCompany(transformedData)
        
        setCompanyId(newCompanyId)
      } catch (error) {
        console.error('Error creating company:', error)
        setError(error instanceof Error ? error.message : 'An error occurred while creating the company')
      } finally {
        setIsSubmitting(false)
        setSubmitting(false)
      }
    },
  })

  return (
    <CompanyFormContext.Provider value={{ formik, isSubmitting, error, companyId }}>
      {children({ formik, isSubmitting, error, companyId })}
    </CompanyFormContext.Provider>
  )
}