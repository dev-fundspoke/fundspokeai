import { Grid } from '@mui/material'
import { useCompanyFormContext } from '../../../context'
import { GlassFormField } from '../styles'
import { FormTextField } from './FormTextField'

export function CompanyScores() {
  const { formik } = useCompanyFormContext()

  return (
    <>
      <Grid item xs={12} sm={6} md={4}>
        <GlassFormField>
          <FormTextField
            type="number"
            name="customerSatisfactionScore"
            label="Customer Satisfaction Score"
            value={formik.values.customerSatisfactionScore || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            inputProps={{ min: 0, max: 100 }}
            error={formik.touched.customerSatisfactionScore && Boolean(formik.errors.customerSatisfactionScore)}
            helperText={formik.touched.customerSatisfactionScore && formik.errors.customerSatisfactionScore}
          />
        </GlassFormField>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <GlassFormField>
          <FormTextField
            type="number"
            name="grantMatchScore"
            label="Grant Match Score"
            value={formik.values.grantMatchScore || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            inputProps={{ min: 0, max: 100 }}
            error={formik.touched.grantMatchScore && Boolean(formik.errors.grantMatchScore)}
            helperText={formik.touched.grantMatchScore && formik.errors.grantMatchScore}
          />
        </GlassFormField>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <GlassFormField>
          <FormTextField
            type="number"
            name="innovationScore"
            label="Innovation Score"
            value={formik.values.innovationScore || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            inputProps={{ min: 0, max: 100 }}
            error={formik.touched.innovationScore && Boolean(formik.errors.innovationScore)}
            helperText={formik.touched.innovationScore && formik.errors.innovationScore}
          />
        </GlassFormField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <FormTextField
            type="number"
            name="queryPerformanceScore"
            label="Query Performance Score"
            value={formik.values.queryPerformanceScore || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            inputProps={{ min: 0, max: 100 }}
            error={formik.touched.queryPerformanceScore && Boolean(formik.errors.queryPerformanceScore)}
            helperText={formik.touched.queryPerformanceScore && formik.errors.queryPerformanceScore}
          />
        </GlassFormField>
      </Grid>
      <Grid item xs={12} sm={6}>
        <GlassFormField>
          <FormTextField
            type="number"
            name="totalEmployeeCount"
            label="Total Employee Count"
            value={formik.values.totalEmployeeCount || ''}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            inputProps={{ min: 0 }}
            error={formik.touched.totalEmployeeCount && Boolean(formik.errors.totalEmployeeCount)}
            helperText={formik.touched.totalEmployeeCount && formik.errors.totalEmployeeCount}
          />
        </GlassFormField>
      </Grid>
      <Grid item xs={12}>
        <GlassFormField>
          <FormTextField
            multiline
            rows={4}
            name="environmentalImpact"
            label="Environmental Impact"
            value={formik.values.environmentalImpact}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.environmentalImpact && Boolean(formik.errors.environmentalImpact)}
            helperText={formik.touched.environmentalImpact && formik.errors.environmentalImpact}
          />
        </GlassFormField>
      </Grid>
    </>
  )
}