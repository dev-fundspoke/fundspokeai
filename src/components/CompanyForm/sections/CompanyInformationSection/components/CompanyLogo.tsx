import { Grid } from '@mui/material'
import { useCompanyFormContext } from '../../../context'
import { GlassFormField } from '../styles'
import { FileUpload } from '../../../../FileUpload/FileUpload'

export function CompanyLogo() {
  const { formik } = useCompanyFormContext()

  const handleUploadComplete = (url: string) => {
    formik.setFieldValue('companyLogo', url)
  }

  return (
    <Grid item xs={12}>
      <GlassFormField>
        <FileUpload 
          onUploadComplete={handleUploadComplete}
          accept="image/*"
          maxSize={5 * 1024 * 1024} // 5MB limit
        />
        {formik.values.companyLogo && (
          <img 
            src={formik.values.companyLogo} 
            alt="Company Logo" 
            style={{ 
              maxWidth: '200px', 
              marginTop: '10px',
              borderRadius: '8px'
            }} 
          />
        )}
      </GlassFormField>
    </Grid>
  )
}