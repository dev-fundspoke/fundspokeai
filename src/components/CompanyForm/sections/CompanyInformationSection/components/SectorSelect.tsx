import { Grid, FormControl, InputLabel, Select, MenuItem, Box, Chip, OutlinedInput, SelectChangeEvent } from '@mui/material'
import { useCompanyFormContext } from '../../../context'
import { GlassFormField } from '../styles'
import { SECTORS } from '../constants'

export function SectorSelect() {
  const { formik } = useCompanyFormContext()

  const handleSectorChange = (event: SelectChangeEvent<string[]>) => {
    formik.setFieldValue('sector', event.target.value)
  }

  return (
    <Grid item xs={12}>
      <GlassFormField>
        <FormControl 
          fullWidth 
          required
          error={formik.touched.sector && Boolean(formik.errors.sector)}
        >
          <InputLabel>Sectors</InputLabel>
          <Select
            multiple
            value={formik.values.sector}
            onChange={handleSectorChange}
            onBlur={formik.handleBlur}
            input={<OutlinedInput label="Sectors" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {SECTORS.map(sector => (
              <MenuItem key={sector} value={sector}>
                {sector}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </GlassFormField>
    </Grid>
  )
}