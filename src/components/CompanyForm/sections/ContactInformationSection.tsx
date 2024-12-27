import { Grid, TextField } from '@mui/material'
import { useCompanyFormContext } from '../context'

export function ContactInformationSection() {
  const { formik } = useCompanyFormContext()
  const { address } = formik.values

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Address Line 1"
          name="address.line1"
          value={address.line1}
          onChange={formik.handleChange}
          error={formik.touched.address?.line1 && Boolean(formik.errors.address?.line1)}
          helperText={formik.touched.address?.line1 && formik.errors.address?.line1}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Address Line 2"
          name="address.line2"
          value={address.line2}
          onChange={formik.handleChange}
          error={formik.touched.address?.line2 && Boolean(formik.errors.address?.line2)}
          helperText={formik.touched.address?.line2 && formik.errors.address?.line2}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="City"
          name="address.city"
          value={address.city}
          onChange={formik.handleChange}
          error={formik.touched.address?.city && Boolean(formik.errors.address?.city)}
          helperText={formik.touched.address?.city && formik.errors.address?.city}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="State/Province"
          name="address.state"
          value={address.state}
          onChange={formik.handleChange}
          error={formik.touched.address?.state && Boolean(formik.errors.address?.state)}
          helperText={formik.touched.address?.state && formik.errors.address?.state}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Postal Code"
          name="address.zipCode"
          value={address.zipCode}
          onChange={formik.handleChange}
          error={formik.touched.address?.zipCode && Boolean(formik.errors.address?.zipCode)}
          helperText={formik.touched.address?.zipCode && formik.errors.address?.zipCode}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="Country"
          name="address.country"
          value={address.country}
          onChange={formik.handleChange}
          error={formik.touched.address?.country && Boolean(formik.errors.address?.country)}
          helperText={formik.touched.address?.country && formik.errors.address?.country}
        />
      </Grid>
    </Grid>
  )
}