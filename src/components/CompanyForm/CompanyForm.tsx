import { Box, Tab, Tabs, Button, Alert, CircularProgress } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { CompanyFormProvider } from './context/CompanyFormContext'
import { TabPanel } from '../TabPanel/TabPanel'
import { CompanyInformationSection } from './sections/CompanyInformationSection/CompanyInformationSection'
import { FinancialInformationSection } from './sections/FinancialInformationSection'
import { ContactInformationSection } from './sections/ContactInformationSection'
import { DocumentsSection } from './sections/DocumentsSection'

interface CompanyFormProps {
  activeTab: number
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void
}

export function CompanyForm({ activeTab, handleTabChange }: CompanyFormProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CompanyFormProvider>
        {({ formik, isSubmitting, error, companyId }) => (
          <Box component="form" onSubmit={formik.handleSubmit}>
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            {companyId && (
              <Alert severity="success" sx={{ mb: 2 }}>
                Company created successfully!
              </Alert>
            )}

            <Tabs 
              value={activeTab} 
              onChange={handleTabChange} 
              aria-label="company form tabs"
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                '& .MuiTab-root': {
                  color: '#333333',
                  fontFamily: 'Rajdhani, sans-serif',
                  '&.Mui-selected': {
                    color: '#5D9B9B',
                  },
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: '#5D9B9B',
                },
              }}
            >
              <Tab label="Company Information" />
              <Tab label="Financial Information" />
              <Tab label="Contact Information" />
              <Tab label="Documents" />
            </Tabs>

            <TabPanel value={activeTab} index={0}>
              <CompanyInformationSection />
            </TabPanel>
            <TabPanel value={activeTab} index={1}>
              <FinancialInformationSection />
            </TabPanel>
            <TabPanel value={activeTab} index={2}>
              <ContactInformationSection />
            </TabPanel>
            <TabPanel value={activeTab} index={3}>
              <DocumentsSection />
            </TabPanel>

            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
              <Button
                type="submit"
                variant="contained"
                disabled={isSubmitting}
                sx={{
                  backgroundColor: '#5D9B9B',
                  color: '#FFFFFF',
                  fontFamily: 'Rajdhani, sans-serif',
                  '&:hover': {
                    backgroundColor: '#33B0B0',
                    boxShadow: '0 0 8px rgba(51, 176, 176, 0.5)',
                  },
                }}
              >
                {isSubmitting ? (
                  <>
                    <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} />
                    Submitting...
                  </>
                ) : (
                  'Submit'
                )}
              </Button>
            </Box>
          </Box>
        )}
      </CompanyFormProvider>
    </LocalizationProvider>
  )
}