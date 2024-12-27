import { Badge, IconButton, styled } from '@mui/material'

const StyledBadge = styled(Badge)({
  '& .MuiBadge-badge': {
    backgroundColor: '#FF00FF',
    color: '#FFFFFF',
    minWidth: '8px',
    height: '8px',
    padding: '0',
    right: '2px',
    top: '2px',
  },
})

const BellIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17Z" 
      fill="#33B0B0"/>
  </svg>
)

interface NotificationBellProps {
  hasNotifications: boolean
}

export function NotificationBell({ hasNotifications }: NotificationBellProps) {
  return (
    <IconButton color="inherit" size="small">
      <StyledBadge variant="dot" invisible={!hasNotifications}>
        <BellIcon />
      </StyledBadge>
    </IconButton>
  )
}