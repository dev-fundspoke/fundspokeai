import { Typography, Grid } from '@mui/material'
import { CompanyNames } from './components/CompanyNames'
import { RegistrationNumbers } from './components/RegistrationNumbers'
import { OrganizationDetails } from './components/OrganizationDetails'
import { SectorSelect } from './components/SectorSelect'
import { CompanyScores } from './components/CompanyScores'
import { AiAnalysis } from './components/AiAnalysis'
import { ClientDetails } from './components/ClientDetails'
import { CompanyLogo } from './components/CompanyLogo'

export function CompanyInformationSection() {
  return (
    <div>
      <Typography 
        variant="h6" 
        gutterBottom
        sx={{
          color: '#333333',
          fontFamily: 'Rajdhani, sans-serif',
          fontWeight: 600,
          marginBottom: 3
        }}
      >
        Company Information
      </Typography>
      
      <Grid container spacing={3}>
        <CompanyNames />
        <CompanyLogo />
        <RegistrationNumbers />
        <OrganizationDetails />
        <SectorSelect />
        <CompanyScores />
        <AiAnalysis />
        <ClientDetails />
      </Grid>
    </div>
  )
}