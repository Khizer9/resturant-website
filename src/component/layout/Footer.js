import { Box, Typography } from '@mui/material'
import { GithubLogo, InstagramLogo, TwitterLogo, YoutubeLogo } from 'phosphor-react'
import React from 'react'

const Footer = () => {
  return (
    <>
      <Box textAlign='center' bgcolor='#1A1A19' color='white' p={3}>
        <Box sx={{my:3, }}>
            <InstagramLogo size={28} className='social-logos'/>
            <TwitterLogo size={28} className='social-logos'/>
            <GithubLogo size={28} className='social-logos'/>
            <YoutubeLogo size={28} className='social-logos'/>
        </Box>
        <Typography variant='h5' sx={{'@media (max-width:600px)' : {
            fontSize:'1rem',
        }}}>All right reserved &copy; Khizer Ali</Typography>
      </Box>
    </>
  )
}

export default Footer
