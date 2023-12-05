import React, { useState } from 'react'
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import '../../styles/HeaderStyle.css'
import { Brandy, List } from 'phosphor-react';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawer = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Box onClick={handleDrawer} sx={{textAlign:'center'}}>
            <Typography variant='h6' color='goldenrod' component='nav' sx={{flexGrow: 1, my:2}}>Resturant</Typography>  

            <Box sx={{display:{xs:'block', sm:'none'}}}>

              <Divider />
              
              <ul className='mobile-menu'>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/menu'}>Menu</Link>
                </li>
                <li>
                  <Link to={'/about'}>About</Link>
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                </li>
              </ul>
            </Box>
    </Box>
  )
  return (
    <>
      <Box>
        <AppBar component={'nav'} sx={{bgcolor:'black'}}>
          <Toolbar>
            <IconButton aria-label='open drawer' edge='start' sx={{mr:2, display:{sm:'none'}}}
              onClick={handleDrawer}>
              <List color='white'/>
            </IconButton>
            <Brandy  />
            <Typography variant='h6' color='goldenrod' component='nav' sx={{flexGrow: 1}}>Resturant</Typography>  

            <Box sx={{display:{xs:'none', sm:'block'}}}>
              <ul className='navigation-menu'>
                <li>
                  <Link to={'/'}>Home</Link>
                </li>
                <li>
                  <Link to={'/menu'}>Menu</Link>
                </li>
                <li>
                  <Link to={'/about'}>About</Link>
                </li>
                <li>
                  <Link to={'/contact'}>Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component='nav'>
          <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawer}
          sx={{display:{xs:'block', sm:'none'}, "& .MuiDrawer-paper" : {boxSizing:'border-box', width:'240px'}}}>
            {drawer}
          </Drawer>
        </Box>

        <Box>
          <Toolbar /> 
        </Box>
      </Box>
    </>
  )
}

export default Header
